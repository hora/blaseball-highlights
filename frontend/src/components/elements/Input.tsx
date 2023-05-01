import React, {ChangeEvent} from 'react';

interface InputProps {
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  classes?: string;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

function Input({ id, name, type, value, placeholder, classes, onChange, checked } : InputProps) {
  placeholder = placeholder || '';

  classes = classes || '';
  let cmpClasses = `${classes} rounded-sm border-none p-2.5 mt-2.5 mb-4 leading-extra-tight text-black`;

  return (
    <input className={cmpClasses} id={id} name={name} type={type} value={value} placeholder={placeholder} onChange={onChange} checked={checked}></input>
  );
}

export default Input;

