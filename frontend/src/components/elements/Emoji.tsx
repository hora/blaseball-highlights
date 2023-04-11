import React  from 'react';

interface EmojiProps {
  emojiCode: string;
}


function Emoji({ emojiCode} : EmojiProps ) {
  const emoji = String.fromCodePoint(Number(emojiCode));

  return (
    <span className="Emoji" role="img" aria-label={emoji}>{emoji}</span>
  );
}

export default Emoji;

