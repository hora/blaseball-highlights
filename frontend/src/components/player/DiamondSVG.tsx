import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import svgToTinyDataUri from 'mini-svg-data-uri';

import { Team } from 'lib/models';
import { getTeamColours } from 'lib/team';

interface DiamondSvgProps {
  team: Team;
  children: React.ReactNode;
}

const DIAMOND_COLOURS = {
  mound: 'ffcf56',
  moundOutline: '003049',
  bases: 'ff9770',
  basesOutline: '003049',
  grass: '2b9348',
  grassOutline: '2b9348',
  dirt: 'ffcf56',
  dirtOutline: 'fff',
  foulZone: 'edead0',
  foulZoneOutline: 'edead0',
};

function DiamondSvg({ children, team } : DiamondSvgProps) {
  const colours = getTeamColours(team);
  const grass = colours.grass || DIAMOND_COLOURS.grass;
  const grassOutline = colours.grassOutline || DIAMOND_COLOURS.grassOutline;
  const dirt = colours.dirt || DIAMOND_COLOURS.dirt;
  const dirtOutline = colours.dirtOutline || DIAMOND_COLOURS.dirtOutline;
  const foulZone = colours.foulZone || DIAMOND_COLOURS.foulZone;
  const foulZoneOutline = colours.foulZoneOutline || DIAMOND_COLOURS.foulZoneOutline;
  const mound = colours.mound || colours.official || DIAMOND_COLOURS.mound;
  const moundOutline = colours.moundOutline || DIAMOND_COLOURS.moundOutline;
  const bases = colours.bases || DIAMOND_COLOURS.bases;
  const basesOutline = colours.basesOutline || DIAMOND_COLOURS.basesOutline;

  let field = (<svg xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px" y="0px" width="1149px" height="735px"
    viewBox="0 0 1149 735" enableBackground="new 0 0 1149 735">
        <g>
          <polygon fill={`#${grass}`} stroke={`#${grassOutline}`} strokeWidth="15"
            points="12.219,725.594 1139.781,725.594 1139.781,8.408 12.219,8.592" />
          <polygon fill={`#${dirt}`} stroke={`#${dirtOutline}`} strokeWidth="3"
            strokeLinejoin="round" points="166.906,326.033 134.094,326.033
                                  134.094,407.781 166.906,407.781
            476.094,725.406 822.781,364.658 476.094,8.592" />
          <polygon fill={`#${grass}`} stroke={`#${dirtOutline}`} strokeWidth="3.689"
            strokeLinejoin="round" points="691.531,407.781 687.969,401.969
            684.594,398.219 681.594,394.094 678.969,389.781 676.906,385.281
            675.219,380.406 673.906,375.344 673.156,370.094    672.781,364.658
            673.156,359.592 673.906,354.158 675.219,349.283 676.906,344.217
            678.969,339.717 681.594,335.408    684.594,331.467 687.969,327.717
            691.531,326.033 514.344,143.217 512.094,146.967 508.344,150.342
            504.406,153.533    500.281,156.158 495.781,158.217 491.094,160.092
            486.219,161.217 480.969,162.158 476.094,162.342 470.656,162.158
            465.594,161.217 460.719,160.092 456.031,158.217 451.531,156.158
            447.406,153.533 443.281,150.342 439.719,146.967    436.531,143.217
            433.719,138.908 232.531,345.342 232.531,388.656 433.906,595.281
            436.531,590.781 439.719,587.219    443.281,583.656 447.406,580.656
            451.531,577.844 456.031,575.781 460.719,573.906 465.594,572.781
            470.656,571.844    476.094,571.656 480.969,571.844 486.219,572.781
            491.094,573.906 495.781,575.781 500.281,577.844 504.406,580.656
            508.344,583.656 512.094,587.219 515.281,590.969  " />
          <path fill={`#${mound}`} stroke={`#${moundOutline}`} strokeWidth="5.5"
            strokeLinejoin="round" d="M476.094,417.344
                                  c28.188,0.382,51.159-25.188,51.188-52.686c0.028-27.433-23.32-52.656-51.188-52.691c-28.34-0.036-51.296,24.943-51.375,52.691
              C424.64,392.454,447.597,417.82,476.094,417.344z" />
          <polygon fill={`#${foulZone}`} stroke={`#${foulZoneOutline}`} strokeWidth="15"
            points="401.281,8.592 91.906,326.033 91.906,407.781 401.281,725.406
            12.219,725.406 12.219,8.592  " />
          <polygon fill={`#${bases}`} stroke={`#${basesOutline}`} strokeWidth="5.5"
            strokeLinejoin="round" points="204.406,340.658 218.656,364.658
                                  204.406,388.656 162.219,388.656
                                  162.406,340.658  " />
          <polygon fill={`#${bases}`} stroke={`#${basesOutline}`} strokeWidth="5.5"
            strokeLinejoin="round" points="508.906,66.158 476.094,99.908
            443.281,66.158 476.094,32.592  " />
          <polygon fill={`#${bases}`} stroke={`#${basesOutline}`} strokeWidth="5.5"
            strokeLinejoin="round" points="799.344,364.658 766.531,398.219
            733.906,364.658 766.531,330.908  " />
          <polygon fill={`#${bases}`} stroke={`#${basesOutline}`} strokeWidth="5.5"
            strokeLinejoin="round" points="508.906,662.781 476.094,696.531
            443.281,662.781 476.094,629.219  " />
        </g>
        </svg>);

  const fieldData = svgToTinyDataUri(renderToStaticMarkup(field));

  return (
    <div
      style={{backgroundImage: `url("${fieldData}")`}}
      className='w-[720px] h-[460px] bg-[720px_auto] relative'
      role='image'
      aria-label={`A top-down view of a blaseball diamond. Represented are home plate, three bases and a pitcher's mound. The ${team.name} logo is displayed next to home plate.`}
    >
      {children}
    </div>
  );
}

export default DiamondSvg;

