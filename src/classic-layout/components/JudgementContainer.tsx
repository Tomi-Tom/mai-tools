import React from 'react';

import {
  BreakScoreMap,
  FullNoteType,
  JudgementDisplayMap,
  ScorePerType,
  StrictJudgementMap,
} from '../types';
import {BreakNoteJudgement} from './BreakNoteJudgement';
import {NextRankInfo} from './NextRankInfo';
import {NoteJudgement} from './NoteJudgement';

interface JudgementContainerProps {
  noteJudgements: Map<FullNoteType, JudgementDisplayMap | StrictJudgementMap>;
  noteLoss: Map<FullNoteType, JudgementDisplayMap>;
  breakDistribution: BreakScoreMap;
  totalJudgements: JudgementDisplayMap;
  scorePerType: ScorePerType;
  nextRank?: {title: string; diff: number};
  combo?: string;
  isDxMode: boolean;
  showDetail: boolean;
}

export class JudgementContainer extends React.PureComponent<JudgementContainerProps> {
  render() {
    const {
      breakDistribution,
      combo,
      isDxMode,
      nextRank,
      noteJudgements,
      noteLoss,
      scorePerType,
      showDetail,
      totalJudgements,
    } = this.props;
    return (
      <div className="judgementContainer">
        <table className="judgement">
          <tbody>
            <tr>
              <th className="rowHead">&nbsp;</th>
              <th className="perfect">Perfect</th>
              <th className="great">Great</th>
              <th className="good">Good</th>
              <th className="miss">Miss</th>
              <th className="score">Score</th>
            </tr>
            <NoteJudgement
              noteType="total"
              judgements={totalJudgements}
              loss={noteLoss.get('total')}
              lastColumn={scorePerType.get('total')}
              isDxMode={isDxMode}
              showDetail={showDetail}
            />
            <NextRankInfo nextRank={nextRank} showTitle={showDetail} />
            {combo && (
              <tr className="maxCombo">
                <th className="noRightBorder" colSpan={4}>
                  MAX COMBO
                </th>
                <td className="noLeftBorder" colSpan={2}>
                  {combo}
                </td>
              </tr>
            )}
            <tr className="tableSeparator">
              <td colSpan={6}></td>
            </tr>
            <NoteJudgement
              noteType="tap"
              judgements={noteJudgements.get('tap')}
              loss={noteLoss.get('tap')}
              lastColumn={scorePerType.get('tap')}
              isDxMode={isDxMode}
              showDetail={showDetail}
            />
            <NoteJudgement
              noteType="hold"
              judgements={noteJudgements.get('hold')}
              loss={noteLoss.get('hold')}
              lastColumn={scorePerType.get('hold')}
              isDxMode={isDxMode}
              showDetail={showDetail}
            />
            <NoteJudgement
              noteType="slide"
              judgements={noteJudgements.get('slide')}
              loss={noteLoss.get('slide')}
              lastColumn={scorePerType.get('slide')}
              isDxMode={isDxMode}
              showDetail={showDetail}
            />
            <NoteJudgement
              noteType="touch"
              judgements={noteJudgements.get('touch')}
              loss={noteLoss.get('touch')}
              lastColumn={scorePerType.get('touch')}
              isDxMode={isDxMode}
              showDetail={showDetail}
            />
            <BreakNoteJudgement
              judgements={noteJudgements.get('break')}
              loss={noteLoss.get('break')}
              distribution={breakDistribution}
              lastColumn={scorePerType.get('break')}
              isDxMode={isDxMode}
              showDetail={showDetail}
            />
          </tbody>
        </table>
      </div>
    );
  }
}
