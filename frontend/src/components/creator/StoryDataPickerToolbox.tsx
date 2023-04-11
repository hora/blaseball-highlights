import React, { useState}  from 'react';

import Button from 'components/elements/Button';

function StoryDataPickerToolbox() {
  const [canSave, setCanSave] = useState(false);
  const [canPreview, setCanPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);

  return (
    <div className="StoryDataPickerToolbox flex mt-4">
      <div className="w-64 mr-5">
        <input id="toolbox-check-all" type="checkbox" name="select all events" />
        <label htmlFor="toolbox-check-all">Select all events</label>
      </div>

      <div className="flex">
        <span className="w-[120px]">Jump to:</span>
        <ul className="mb-2.5">
          <li className="text-lg inline-block mr-[5px] mb-[7px] bg-pink text-navy-blue py-[2px] px-[5px] lowercase">next half-inning</li>
          <li className="text-lg inline-block mr-[5px] mb-[7px] bg-pink text-navy-blue py-[2px] px-[5px] lowercase">next strikeout</li>
          <li className="text-lg inline-block mr-[5px] mb-[7px] bg-pink text-navy-blue py-[2px] px-[5px] lowercase">next hit</li>
          <li className="text-lg inline-block mr-[5px] mb-[7px] bg-pink text-navy-blue py-[2px] px-[5px] lowercase">next steal</li>
          <li className="text-lg inline-block mr-[5px] mb-[7px] bg-pink text-navy-blue py-[2px] px-[5px] lowercase">next special</li>
          <li className="text-lg inline-block mr-[5px] mb-[7px] bg-pink text-navy-blue py-[2px] px-[5px] lowercase">next score</li>
        </ul>
      </div>

      <div className="w-[400px] flex flex-col">
        <Button text="Save & Publish Story" btnType="submit" disabled={canSave} />
        {isSaving &&
          <div><span>Saving ... </span></div>
        }
        {hasSaved &&
          <div><span>💾 Saved!</span></div>
        }
        <Button text="Preview Story" btnType="submit" disabled={canPreview} />
      </div>
    </div>
  );
}

export default StoryDataPickerToolbox;

