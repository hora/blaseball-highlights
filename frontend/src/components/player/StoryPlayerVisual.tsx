import { Story, Slide, Game } from 'lib/models';

import Matchup from './Matchup';
import Diamond from './Diamond';

interface StoryPlayerVisualProps {
  story: Story;
  currentSlide: Slide;
  game: Game;
}

function StoryPlayerVisual({ story, currentSlide, game } : StoryPlayerVisualProps) {

  const renderVisual = () => {
    switch(currentSlide.visual) {
      case 'matchup':
        return (
          <Matchup
            game={game}
          />
        );
      case 'diamond':
        return <Diamond />
      default:
        return <Diamond />
    }
  };

  return (
    <div className='StoryPlayerVisual text-center max-w-[720px] mx-auto'>
      {renderVisual()}
    </div>
  );
}

export default StoryPlayerVisual;

