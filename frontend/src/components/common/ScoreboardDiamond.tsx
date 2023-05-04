import React  from 'react';
import clsx from 'clsx';
import Tooltip from 'rc-tooltip';

import { Player } from 'lib/models';

interface ScoreboardDiamondProps {
  baserunner?: Player;
  base: number;
}

function ScoreboardDiamond({ baserunner, base } : ScoreboardDiamondProps) {
  const classNames = clsx({
    'ScoreboardDiamond': true,
    'w-[12px]': true,
    'h-[12px]': true,
    'inline-block': true,
    'border': true,
    'border-solid': true,
    'border-dark-blue': true,
    'rotate-45': true,
    'translate-x-[2px]': base !== 2,
    'translate-y-[2px]': base !== 2,
    'translate-x-[3px]': base === 2,
    'translate-y-[-9px]': base === 2,
    'ml-[-3px]': base === 2,
    'mr-[-1px]': base === 2,
    'bg-dark-blue': baserunner,
  });

  return baserunner?.name ? (

    <Tooltip placement="top" overlay={<span className="">{baserunner?.name}</span>}>
      <span className={classNames}></span>
    </Tooltip>
    ) : (
      <span className={classNames}></span>
    );
}

export default ScoreboardDiamond;

