import React, {useCallback, useEffect, useState} from 'react';

import {getChartTypeNameForDXRatingNet} from '../../common/chart-type';
import {getDifficultyNameForDxRatingNet} from '../../common/difficulties';
import {GameRegion} from '../../common/game-region';
import {GameVersion} from '../../common/game-version';
import {Language} from '../../common/lang';
import {useLanguage} from '../../common/lang-react';
import {QueryParam} from '../../common/query-params';
import {SongDatabase} from '../../common/song-props';
import {RatingData} from '../types';

const MessagesByLang = {
  [Language.en_US]: {
    share: 'Share',
    exportAllForDxRatingNet: 'Export as DXRating.net format (all records)',
    exportTopForDxRatingNet: 'Export as DXRating.net format (only b15 & b35)',
  },
  [Language.zh_TW]: {
    share: '分享',
    exportAllForDxRatingNet: '匯出成 DXRating.net 格式 (完整紀錄)',
    exportTopForDxRatingNet: '匯出成 DXRating.net 格式 (R 值對象曲)',
  },
  [Language.ko_KR]: {
    share: '공유',
    exportAllForDxRatingNet: 'DXRating.net 형식으로 내보내기 (모든 기록)',
    exportTopForDxRatingNet: 'DXRating.net 형식으로 내보내기 (베스트 15 & 베스트 35)',
  },
};

function downloadJson(fileContent: string, filename: string) {
  const file = new Blob([fileContent], {type: 'application/json'});
  const url = URL.createObjectURL(file);
  console.log(url);

  const anchor = document.createElement('a');
  anchor.href = url;
  // `dxrating.export-${new Date().toISOString()}.json`
  anchor.download = filename + '.json';
  anchor.click();
  URL.revokeObjectURL(url);
}

function downloadAsDxRatingNetJson(ratingData: RatingData, onlyTopRecords: boolean) {
  const recordsToDownload = onlyTopRecords
    ? ratingData.newChartRecords
        .slice(0, ratingData.newTopChartsCount)
        .concat(ratingData.oldChartRecords.slice(0, ratingData.oldTopChartsCount))
    : ratingData.newChartRecords.concat(ratingData.oldChartRecords);
  const sheets = recordsToDownload.map((r) => ({
    sheetId: `${r.songName}__dxrt__${getChartTypeNameForDXRatingNet(
      r.chartType
    )}__dxrt__${getDifficultyNameForDxRatingNet(r.difficulty)}`,
    achievementRate: r.achievement,
  }));
  const filename = onlyTopRecords
    ? `dxrating-top-${new Date().toISOString()}`
    : `dxrating-all-${new Date().toISOString()}`;
  downloadJson(JSON.stringify(sheets, null, 2), filename);
}

export function ShareRating(props: {
  gameRegion: GameRegion;
  gameVer: GameVersion;
  ratingData: RatingData;
  songDb: SongDatabase;
}) {
  const {gameRegion, gameVer, ratingData, songDb} = props;
  const [encodedSongImages, setEncodedSongImages] = useState<string>('');
  const [encodedChartTypes, setEncodedChartTypes] = useState<string>('');
  const [encodedDifficulties, setEncodedDifficulties] = useState<string>('');
  const [encodedAchievements, setEncodedAchievements] = useState<string>('');

  useEffect(() => {
    const topRecords = ratingData.newChartRecords
      .slice(0, ratingData.newTopChartsCount)
      .concat(ratingData.oldChartRecords.slice(0, ratingData.oldTopChartsCount));

    const songProps = topRecords
      .map((record) => songDb.getSongProperties(record.songName, record.genre, record.chartType))
      .filter((sp) => sp?.ico);

    if (songProps.length < topRecords.length) {
      // We can only create URL if we have ico for every song.
      setEncodedSongImages('');
      setEncodedChartTypes('');
      setEncodedDifficulties('');
      setEncodedAchievements('');
      return;
    }

    setEncodedSongImages(songProps.map((sp) => sp.ico).join('_'));
    setEncodedChartTypes(topRecords.reduce<string>((acc, rec) => acc + rec.chartType, ''));
    setEncodedDifficulties(topRecords.reduce<string>((acc, rec) => acc + rec.difficulty, ''));
    setEncodedAchievements(topRecords.map((res) => res.achievement).join('_'));
  }, [ratingData, songDb]);

  const downloadTopAsDXRatingNetJson = useCallback(() => {
    downloadAsDxRatingNetJson(ratingData, true);
  }, [ratingData]);

  const downloadAllAsDXRatingNetJson = useCallback(() => {
    downloadAsDxRatingNetJson(ratingData, false);
  }, [ratingData]);

  const messages = MessagesByLang[useLanguage()];

  let shareLink = '';
  if (encodedSongImages && encodedChartTypes && encodedDifficulties && encodedAchievements) {
    const queryParams = new URLSearchParams();
    queryParams.set(QueryParam.GameRegion, gameRegion);
    queryParams.set(QueryParam.GameVersion, gameVer.toString());
    if (ratingData.playerName) {
      queryParams.set(QueryParam.PlayerName, ratingData.playerName);
    }
    queryParams.set(QueryParam.Date, ratingData.date.getTime().toString());

    // We choose to use image name to identify songs because it makes the URL shorter than 2000 bytes.
    // In local testing the URL length was around 1600.
    queryParams.set(QueryParam.SongImage, encodedSongImages);
    queryParams.set(QueryParam.ChartType, encodedChartTypes);
    queryParams.set(QueryParam.Difficulty, encodedDifficulties);
    queryParams.set(QueryParam.Achievement, encodedAchievements);
    shareLink = '?' + queryParams;
  }
  return (
    <div>
      {shareLink ? (
        <>
          <a href={shareLink} target="_blank">
            {messages.share}
          </a>
          <br />
        </>
      ) : null}
      <a href="javascript:void(0)" onClick={downloadTopAsDXRatingNetJson}>
        {messages.exportTopForDxRatingNet}
      </a>
      <br />
      <a href="javascript:void(0)" onClick={downloadAllAsDXRatingNetJson}>
        {messages.exportAllForDxRatingNet}
      </a>
    </div>
  );
}
