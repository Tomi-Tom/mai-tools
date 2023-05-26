import React, {useState} from 'react';

import {RecommendedLevelCell} from '../common/components/RecommendedLevelCell';
import {
  calcRecommendedLv,
  getRankDefinitions,
  getRankIndexByAchievement,
} from '../common/rank-functions';
import {loadUserPreference, saveUserPreference, UserPreference} from '../common/user-preference';
import {NUM_TOP_NEW_CHARTS, NUM_TOP_OLD_CHARTS} from '../rating-calculator/rating-analyzer';

const MIN_ACHIEVEMENT = 99;
const DEFAULT_TARGET_RATING = 12000;

export const RecommendedLevels = () => {
  const [targetRating, setTargetRating] = useState(
    () => parseInt(loadUserPreference(UserPreference.TargetRating)) || DEFAULT_TARGET_RATING
  );
  const handleTargetRatingChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const rating = parseInt(e.currentTarget.value);
    if (isNaN(rating) || rating <= 0) {
      return;
    }
    saveUserPreference(UserPreference.TargetRating, rating.toFixed(0));
    setTargetRating(rating);
  };

  const targetRatingPerSong = Math.ceil(targetRating / (NUM_TOP_NEW_CHARTS + NUM_TOP_OLD_CHARTS));
  const ranks = getRankDefinitions().slice(0, getRankIndexByAchievement(MIN_ACHIEVEMENT) + 1);
  const recommendLvs = ranks.map((r) => calcRecommendedLv(targetRatingPerSong, r));
  return (
    <div className="suggestLvByRating">
      <label className="targetRatingLabel">
        Target Rating:{' '}
        <input
          className="targetRating"
          onChange={handleTargetRatingChange}
          type="number"
          value={targetRating}
        ></input>
      </label>
      <table className="lookupTable recLvTable">
        <thead className="lookupTableHead">
          <tr>
            <th></th>
            {ranks.map((r) => (
              <th key={r.title}>
                <span className="recLvRankTitle">{r.title}</span>
                <span className="recLvRankAchv">{r.minAchv}%</span>
              </th>
            ))}
            <th>Rating per record</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Lv</th>
            {recommendLvs.map((lv, idx) => (
              <RecommendedLevelCell key={idx} lv={lv} />
            ))}
            <td>{targetRatingPerSong}↑</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
