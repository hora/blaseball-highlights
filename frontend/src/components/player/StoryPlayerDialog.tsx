import { useEffect, useRef, useState } from 'react';

import { Slide } from 'lib/models';
import { makeDialogParts } from 'lib/slide';

interface StoryPlayerDialogProps {
  currentSlide: Slide;
  changeSlide: (direction: string) => void;
  canGoSlide: (direction: string) => boolean;
  previewStory: (toggle: boolean) => void;
}

function StoryPlayerDialog({ currentSlide, changeSlide, canGoSlide, previewStory } : StoryPlayerDialogProps) {
  const [dialogIndex, setDialogIndex] = useState(0);
  const dialogParts = makeDialogParts(currentSlide.text);
  const [topIsAnimating, setTopIsAnimating] = useState(true);
  const [bottomIsAnimating, setBottomIsAnimating] = useState(false);
  const [bottomFinished, setBottomFinished] = useState(false);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  console.log(dialogParts);

  const startAnimations = () => {
    setBottomIsAnimating(false);
    setTopIsAnimating(true);
  };

  const handleDialogGo = (direction: string) => {
    if (!canGo(direction)) return;

    if (canScrollDialog(direction)) {
      setDialogIndex(dialogIndex => direction === 'prev' ? dialogIndex - 1 : dialogIndex + 1);
      startAnimations();
    } else {
      changeSlide(direction);
      setDialogIndex(0);
      startAnimations();
    }
  };

  const canScrollDialog = (direction: string) : boolean => {
    return (direction === 'prev') ? dialogIndex > 0 : dialogIndex < dialogParts.length - 1;
  };

  const canGo = (direction: string) : boolean => {
    if (direction === 'prev') {
      return canGoSlide('prev') || canScrollDialog('prev');
    } else { // direction === 'next'
      return canGoSlide('next') || canScrollDialog('next');
    }
  };

  const getDialogTop = () : string => {
    return dialogParts[dialogIndex][0];
  };

  const getDialogBottom = () : string => {
    return dialogParts[dialogIndex][1];
  };

  // how to remove the rendering delay between top animation end
  // and bottoms animation start?
  const handleAnimationEnd = () => {
    if (topIsAnimating) {
      setTopIsAnimating(false);
      setBottomIsAnimating(true);
    }

    if (bottomIsAnimating) {
      setBottomIsAnimating(false);
    }
  };

  useEffect(() => {
    const handleKeyup = (evt: KeyboardEvent) : any => {
      evt.preventDefault();
      evt.stopPropagation();

      // triggering clicks on left & right button because otherwise
      // there's no guarantee that dialogIndex is updated in time
      // (react seems to make sure queued up setStates are called
      // before clicks)
      switch (evt.code) {
        case 'ArrowLeft':
          leftRef.current && leftRef.current.click();
          break;
        case 'ArrowRight':
          rightRef.current && rightRef.current.click();
          break;
        case 'Escape':
          previewStory(false);
          break;
      }
    };

    document.body.addEventListener('keyup', handleKeyup);
    return () => document.body.removeEventListener('keyup', handleKeyup);
  }, []);

  return (
    <div
      className='StoryPlayerDialog bg-pink fixed bottom-0 left-0 w-full z-50 pt-[10px] pb-[20px] h-[130px]'
    >

      <div className='max-w-[720px] mx-auto text-navy-blue text-3xl font-exo py-[15px] '>

        {topIsAnimating &&
          <p className='animate-typing overflow-hidden whitespace-nowrap m-0 pb-3' onAnimationEnd={handleAnimationEnd}>{getDialogTop()}</p>}
        {!topIsAnimating &&
          <p className='overflow-hidden whitespace-nowrap m-0 pb-3'>{getDialogTop()}</p>}

        {getDialogBottom() && bottomIsAnimating && !topIsAnimating &&
            <p className='animate-typing overflow-hidden whitespace-nowrap m-0 pb-3' onAnimationEnd={handleAnimationEnd}>{getDialogBottom()}</p>}

        {getDialogBottom() && !bottomIsAnimating && !topIsAnimating &&
            <p className='overflow-hidden whitespace-nowrap m-0 pb-3'>{getDialogBottom()}</p>}

        {canGo('prev') &&
          <div
            className='absolute w-0 h-0 right-[180px] bottom-[20px] cursor-pointer border-t-transparent border-t-[15px] border-b-transparent border-b-[15px] border-r-navy-blue border-r-[20px] mr-[25px]'
            onClick={() => handleDialogGo('prev')}
            ref={leftRef}
          />
        }
        {canGo('next') &&
          <div
            className='absolute w-0 h-0 right-[180px] bottom-[20px] cursor-pointer border-t-transparent border-t-[15px] border-b-transparent border-b-[15px] border-l-navy-blue border-l-[20px]'
            onClick={() => handleDialogGo('next')}
            ref={rightRef}
          />
        }
      </div>
    </div>
  );
}

export default StoryPlayerDialog;

