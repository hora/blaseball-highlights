import React, { useState, useEffect, ChangeEvent }  from 'react';

import { Game, GameEvent, GameEventsUpdateProps } from 'lib/models';

import Input from 'components/elements/Input';
import Scoreboard from 'components/common/Scoreboard';

interface InterestingEvents {
  [index: string]: boolean;
}

interface GameEventProps {
  gameEvent: GameEvent;
  game: Game;
  updateInterestingEvents: (newInterestingEventsState: InterestingEvents) => void;
  updateGameEvents: (action: GameEventsUpdateProps) => void;
  checkAll: boolean;
}

function GameEventRow({ gameEvent, game, updateInterestingEvents, updateGameEvents, checkAll } : GameEventProps) {
  // const [isChecked, setIsChecked] = useState(gameEvent.isSelected);
  const [eventText, setEventText] = useState(gameEvent.displayText);
  const [visual, setVisual] = useState(gameEvent.mlustard.gameStatus === 'beforeFirstPitch' ? 'matchup' : 'diamond');
  const [interestingEvents, setInterestingEvents] = useState({
    'halfInning': true,
    'strike': false,
    'hit': false,
    'steal': false,
    'special': false,
    'score': false
  } as InterestingEvents);

  const onCheck = () => {
    updateGameEvents({type: 'modifyOne', gameEvents: [{...gameEvent, isSelected: !gameEvent.isSelected}]});
  }

  // force state change when check all is (un)checked
  useEffect(() => {
    updateGameEvents({type: 'modifyOne', gameEvents: [{...gameEvent, isSelected: checkAll}]});
  }, [checkAll]);

  const getRowClasses = () : string => {
    let rowClasses = 'GameEventRow';

    if (gameEvent.mlustard.out && gameEvent.mlustard.outMeta.kind === 'strike') {
      rowClasses += ' strike';
      !interestingEvents.strike && setInterestingEvents(prevState => {return {...prevState, 'strike': true }});
    }

    if (gameEvent.mlustard.hit) {
      rowClasses += ' hit';
      !interestingEvents.hit && setInterestingEvents(prevState => {return {...prevState, 'hit': true }});
    }

    if (gameEvent.mlustard.steal && gameEvent.mlustard.stealMeta.success) {
      rowClasses += ' steal';
      !interestingEvents.steal && setInterestingEvents(prevState => {return {...prevState, 'steal': true }});
    }

    if (gameEvent.mlustard.special) {
      rowClasses += ' special';
      !interestingEvents.special && setInterestingEvents(prevState => {return {...prevState, 'special': true }});
    }

    if (gameEvent.mlustard.score) {
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

  const updateEventText = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setEventText(evt.target.value);
  }

  const updateVisual = (evt: ChangeEvent<HTMLSelectElement>) => {
    setVisual(evt.target.value);
  }

  return (
    <tr className={getRowClasses()}>
      <td className="p-2.5 align-top">
        <Input type="checkbox" classes="" checked={gameEvent.isSelected} onChange={onCheck} />
      </td>
      <td className="p-2.5 align-top">
        <textarea className="text-black p-[5px]" defaultValue={eventText} onChange={updateEventText} />
      </td>
      <td className="p-2.5 align-top">
        <label>Choose a visual for this event:</label>
        <select className="text-black block mt-1" name="visual" value={visual} onChange={updateVisual} >
          <option value="diamond">Diamond</option>
          <option value="matchup">Matchup</option>
          <option value="custom">Custom</option>
        </select>
      </td>
      <td className="p-2.5 align-top">
        <Scoreboard
          homeTeam={game.homeTeam}
          awayTeam={game.awayTeam}
          homeScore={gameEvent.homeScore}
          awayScore={gameEvent.awayScore}
          baserunners={gameEvent.baserunners}
          balls={gameEvent.balls}
          strikes={gameEvent.strikes}
          outs={gameEvent.outs}
        />
      </td>
      <td className="p-2.5 align-top">
        <a className={gameEvent.isSelected ? 'underline' : 'cursor-default text-white/50'} href="#">Preview</a>
      </td>
    </tr>
  );
}

export default GameEventRow;

