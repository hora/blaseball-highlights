import React  from 'react';

interface ButtonProps {
  btnType: string;
  disabled?: boolean;
  text: string;
  classes?: string;
  onClick?: () => void;
}

function Button({ btnType, disabled, text, classes, onClick } : ButtonProps) {
  classes = classes || '';
  let btnClasses = `${classes} rounded-sm border-none p-2.5 bg-sea-green text-white disabled:bg-gray-500`;

  return (
    <button className={btnClasses} type="submit" onClick={onClick} disabled={disabled}>{text}</button>
  );
}

export default Button;

