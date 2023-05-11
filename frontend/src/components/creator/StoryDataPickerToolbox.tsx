import React, { useState, useEffect }  from 'react';

import Button from 'components/elements/Button';
import Input from 'components/elements/Input';

interface InterestingEvents {
  [index: string]: boolean;
}

interface StoryDataPickerToolboxProps {
  interestingEvents: InterestingEvents;
  toggleCheckAll: () => void;
  checkAll: boolean;
  canSaveStory: boolean;
  canPreviewStory: boolean;
  previewStory: () => void;
}

function StoryDataPickerToolbox({ interestingEvents, toggleCheckAll, checkAll, canSaveStory, canPreviewStory, previewStory } : StoryDataPickerToolboxProps) {
  const [isSaving, setIsSaving] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);

  // make toolbox stick if scrolled beyond it
  useEffect(() => {
    const toolbox = document.getElementsByClassName('StoryDataPickerToolbox')[0] as HTMLDivElement;
    const toolboxTop = toolbox.offsetTop;

    const handleScroll = () => {
      toolbox.dataset.sticky = (window.pageYOffset >= toolboxTop) ? 'true' : 'false';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const scrollTo = (ev: React.MouseEvent<HTMLUListElement>) => {
    const target = ev.target as HTMLLIElement;
    const lookFor = target.getAttribute('data-scroll') || '';

    if (!lookFor) return;

    const toolbox = document.getElementsByClassName('StoryDataPickerToolbox')[0] as HTMLDivElement;
    const headerHeight = toolbox.offsetHeight;

    const firstInView = [...document.getElementsByClassName('GameEventRow')].filter((el) => {
      const row = el as HTMLTableRowElement;
      return (row.offsetTop > window.pageYOffset + headerHeight) && (row.offsetTop < window.pageYOffset + row.offsetHeight + headerHeight);
    })[0] as HTMLTableRowElement;

    // look for the first instance of lookFor in firstInView's next siblings
    let found;
    let el = firstInView;

    while (el = el?.nextSibling as HTMLTableRowElement) {
      if (el.classList.contains(lookFor)) {
        found = el;
        break;
      }
    }

    // look for the first starting from the top of the page
    if (!found) {
      found = document.getElementsByClassName('StoryDataPickerTable')[0].querySelectorAll(`.${lookFor}`)[0] as HTMLTableRowElement;
    }

    if (found) {
      window.scroll({
        top: found.getBoundingClientRect().top + window.pageYOffset - headerHeight,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className="StoryDataPickerToolbox w-full data-sticky:sticky data-sticky:top-0 data-sticky:left-0 data-sticky:bg-darker-blue data-sticky:z-[1000]" data-sticky="false">
    <div className="flex mt-4 max-w-[900px] mx-auto">
      <div className="mt-3 w-64 mr-5">
        <Input id="toolbox-check-all" type="checkbox" classes="" checked={checkAll} onChange={toggleCheckAll} />
        <label htmlFor="toolbox-check-all" className="ml-2.5">Select all events</label>
      </div>

      <div className="mt-3 flex">
        <span className="w-[120px] mr-2.5">Jump to:</span>
        <ul className="mb-2.5" onClick={scrollTo}>
          { interestingEvents.halfInning && <li className="text-lg inline-block mr-[5px] mb-[7px] bg-pink text-navy-blue py-[2px] px-[5px] lowercase" data-scroll="inning">next half-inning</li>}
          { interestingEvents.strike && <li className="text-lg inline-block mr-[5px] mb-[7px] bg-pink text-navy-blue py-[2px] px-[5px] lowercase" data-scroll="strike">next strikeout</li>}
          { interestingEvents.hit && <li className="text-lg inline-block mr-[5px] mb-[7px] bg-pink text-navy-blue py-[2px] px-[5px] lowercase" data-scroll="hit">next hit</li>}
          { interestingEvents.steal && <li className="text-lg inline-block mr-[5px] mb-[7px] bg-pink text-navy-blue py-[2px] px-[5px] lowercase" data-scroll="steal">next steal</li>}
          { interestingEvents.special && <li className="text-lg inline-block mr-[5px] mb-[7px] bg-pink text-navy-blue py-[2px] px-[5px] lowercase" data-scroll="special">next special</li>}
          { interestingEvents.score && <li className="text-lg inline-block mr-[5px] mb-[7px] bg-pink text-navy-blue py-[2px] px-[5px] lowercase" data-scroll="score">next score</li>}
        </ul>
      </div>

      <div className="mt-3 w-[400px] flex flex-col">
        <Button text="Save & Publish Story" btnType="submit" disabled={!canSaveStory} classes="mb-[7px]" />
        {isSaving &&
          <div><span>Saving ... </span></div>
        }
        {hasSaved &&
          <div><span>💾 Saved!</span></div>
        }
        <Button text="Preview Story" btnType="submit" onClick={previewStory} disabled={!canPreviewStory} classes="mb-[7px]" />
      </div>
    </div>
    </div>
  );
}

export default StoryDataPickerToolbox;

