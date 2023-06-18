import React, { useState, useEffect, ChangeEvent }  from 'react';

import { Game, Slide, SlidesUpdateProps } from 'lib/models';

import Input from 'components/elements/Input';
import Scoreboard from 'components/common/Scoreboard';

interface InterestingEvents {
  [index: string]: boolean;
}

interface GameEventProps {
  slide: Slide;
  game: Game;
  updateInterestingEvents: (newInterestingEventsState: InterestingEvents) => void;
  updateSlides: (action: SlidesUpdateProps) => void;
  checkAll: boolean;
}

function GameEventRow({ slide, game, updateInterestingEvents, updateSlides, checkAll } : GameEventProps) {
  // const [isChecked, setIsChecked] = useState(slide.isSelected);
  // const [eventText, setEventText] = useState(slide.displayText);
  // const [visual, setVisual] = useState(slide.mlustard.gameStatus === 'beforeFirstPitch' ? 'matchup' : 'diamond');
  const [interestingEvents, setInterestingEvents] = useState({
    'halfInning': true,
    'strike': false,
    'hit': false,
    'steal': false,
    'special': false,
    'score': false
  } as InterestingEvents);

  const onCheck = () => {
    updateSlides({type: 'modifyOne', slides: [{...slide, isSelected: !slide.isSelected}]});
  }

  // force state change when check all is (un)checked
  useEffect(() => {
    updateSlides({type: 'modifyOne', slides: [{...slide, isSelected: checkAll}]});
  }, [checkAll]);

  const updateSlideText = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    updateSlides({type: 'modifyOne', slides: [{...slide, text: evt.target.value}]});
  }

  const updateVisual = (evt: ChangeEvent<HTMLSelectElement>) => {
    updateSlides({type: 'modifyOne', slides: [{...slide, visual: evt.target.value}]});
  }


  const getRowClasses = () : string => {
    let rowClasses = 'GameEventRow';

    if (slide.mlustard.out && slide.mlustard.outMeta.kind === 'strike') {
      rowClasses += ' strike';
      !interestingEvents.strike && setInterestingEvents(prevState => {return {...prevState, 'strike': true }});
    }

    if (slide.mlustard.hit) {
      rowClasses += ' hit';
      !interestingEvents.hit && setInterestingEvents(prevState => {return {...prevState, 'hit': true }});
    }

    if (slide.mlustard.steal && slide.mlustard.stealMeta.success) {
      rowClasses += ' steal';
      !interestingEvents.steal && setInterestingEvents(prevState => {return {...prevState, 'steal': true }});
    }

    if (slide.mlustard.special) {
      rowClasses += ' special';
      !interestingEvents.special && setInterestingEvents(prevState => {return {...prevState, 'special': true }});
    }

    if (slide.mlustard.score) {
      rowClasses +=  ' score';
      !interestingEvents.score && setInterestingEvents(prevState => {return {...prevState, 'score': true }});
    }

    if (rowClasses !== 'GameEventRow') {
      rowClasses += ' bg-pink text-navy-blue';
    }

    rowClasses += ' hover:bg-darker-blue hover:text-white';

    return rowClasses;
  }

  useEffect(() => {
    // only update events that were found in this row
    // otherwise what we haven't found will override what may have been found
    // in another row
    const updated = Object.keys(interestingEvents).reduce((upd, k) => {
      if (interestingEvents[k]) {
        upd[k] = interestingEvents[k];
      }

      return upd;
    }, {} as InterestingEvents);

    updateInterestingEvents(updated);
  }, [interestingEvents]);

  return (
    <tr className={getRowClasses()}>
      <td className="p-2.5 align-top">
        <Input type="checkbox" classes="" checked={slide.isSelected} onChange={onCheck} />
      </td>
      <td className="p-2.5 align-top">
        <textarea className="text-black p-[5px]" defaultValue={slide.text} onBlur={updateSlideText} />
      </td>
      <td className="p-2.5 align-top">
        <label>Choose a visual for this event:</label>
        <select className="text-black block mt-1" name="visual" value={slide.visual} onChange={updateVisual} >
          <option value="diamond">Diamond</option>
          <option value="matchup">Matchup</option>
          <option value="custom">Custom</option>
        </select>
      </td>
      <td className="p-2.5 align-top">
        <Scoreboard
          homeTeam={game.homeTeam}
          awayTeam={game.awayTeam}
          homeScore={slide.homeScore}
          awayScore={slide.awayScore}
          baserunners={slide.baserunners}
          balls={slide.balls}
          strikes={slide.strikes}
          outs={slide.outs}
          inning={slide.inning}
          atBat={slide.atBat}
        />
      </td>
      <td className="p-2.5 align-top">
        <a className={slide.isSelected ? 'underline' : 'cursor-default text-white/50'} href="#">Preview</a>
      </td>
    </tr>
  );
}

export default GameEventRow;

