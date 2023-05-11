import React  from 'react';

import { Game, Slide, SlidesUpdateProps } from 'lib/models';

import Input from 'components/elements/Input';
import Emoji from 'components/elements/Emoji';
import GameEventRow from 'components/creator/GameEventRow';

interface InterestingEvents {
  [index: string]: boolean;
}

interface StoryDataPickerTableProps {
  game: Game;
  slides: Slide[];
  updateSlides: (action: SlidesUpdateProps) => void;
  updateInterestingEvents: (newInterestingEventsState: InterestingEvents) => void;
  checkAll: boolean;
}

function StoryDataPickerTable({ game, slides, updateSlides, updateInterestingEvents, checkAll } : StoryDataPickerTableProps) {
  const hasDisplayText = (slide: Slide) : boolean => {
    return !!slide.displayText
  };

  const isStartOrEnd = (slide: Slide) : boolean => {
    return slide.mlustard.gameStatus === 'beforeFirstPitch' || slide.mlustard.gameStatus === 'gameEnd'
  };

  const isInteresting = (slide: Slide) : boolean => {
    // don't care about events that don't have display text
    if (!hasDisplayText(slide)) return false;

    if (
      //(slide.mlustard.out && slide.mlustard.outMeta.kind === 'strike') ||
      //(slide.mlustard.walk) ||
      //(slide.mlustard.hit) ||
      //(slide.mlustard.steal && slide.mlustard.stealMeta.success) ||
      //(slide.mlustard.special) ||
      //(slide.mlustard.maximumBlaseball) ||
      (slide.mlustard.score)
    ) {
      return true;
    }

    return false;
  };

  const isHighlight = (slide: Slide) : boolean => {
    return isInteresting(slide) || isStartOrEnd(slide);
  };

  // const updateGameEvent = (slide: GameEvent) => {
  //   setGame(game.slides.map(gE => {
  //     if (gE.uuid === slide.uuid) {
  //       return {...gE, isSelected: slide.isSelected };
  //     } else {
  //       return gE;
  //     }
  //   }));
  // };

  return (
    <table className="StoryDataPickerTable w-full text-lg border-separate">
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup>

      <tbody className="bg-faded-blue">
        <tr>
        <td colSpan={5} className="p-2.5 ">
          <div className="flex justify-start">
            <div className="w-1/2">
              <label htmlFor="story-title">Story title</label>
              <Input id="story-title" type="text" placeholder={`${game.awayTeam.name} at ${game.homeTeam.name}`} classes="w-full"/>
            </div>
            <div className="ml-[50px]">
              <label htmlFor="story-creator">Creator</label>
              <Input id="story-creator" type="text" placeholder="Enter a username" classes="w-full" />
            </div>
          </div>
        </td>
        </tr>

        {slides.filter(hasDisplayText).map((slide:Slide, i:number) => {
          let inningHeader;
          let tOrB = '';
          let fielderEmoji = '';
          let pitcher = '';
          let batterEmoji = '';

          switch (slide.mlustard.gameStatus) {
            case 'beforeFirstPitch':
            case 'secondHalfInningEnd':
              tOrB = 'Top';
              fielderEmoji = game.homeTeam.emoji;
              pitcher = game.homePitcher.name;
              batterEmoji = game.awayTeam.emoji;
              break;
            case 'firstHalfInningEnd':
              tOrB = 'Bottom';
              fielderEmoji = game.awayTeam.emoji;
              pitcher = game.awayPitcher.name;
              batterEmoji = game.homeTeam.emoji;
              break;
            default:
              break;
          }

          inningHeader = (<React.Fragment>
                <tr className="inning"><td className="p-2.5 align-top" colSpan={5}>{tOrB} of {slide.inning + 1}</td></tr>
                <tr className="">
                  <td colSpan={5} className="p-2.5 align-top">
                    <span>
                      <Emoji emojiCode={fielderEmoji}/> fielding, with {pitcher} pitching
                    </span>
                    <span>
                      <Emoji emojiCode={batterEmoji}/> batting
                    </span>
                  </td>
                </tr>
              </React.Fragment>
              )

          return (
            <React.Fragment key={i}>

            { slide.mlustard.gameStatus === 'beforeFirstPitch' && inningHeader}

            <GameEventRow
                key={i}
                slide={slide}
                game={game}
                updateInterestingEvents={updateInterestingEvents}
                updateSlides={updateSlides}
                checkAll={checkAll}
              />

            { slide.mlustard.gameStatus === 'firstHalfInningEnd' && inningHeader}
            { slide.mlustard.gameStatus === 'secondHalfInningEnd' && inningHeader}

            </React.Fragment>
          );
        }

        )}
      </tbody>
    </table>
  );
}

export default StoryDataPickerTable;
