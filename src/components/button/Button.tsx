import React from 'react';
import ButtonProps from './type';

const Button: React.FC<ButtonProps> = ({ Children,text, type, className, ...restProps }) => {
  return (
    <button
     type={type} 
    className={className} 
    {...restProps}>
      <span className='flex items-center justify-center gap-3'>{text},{Children} </span>
    </button>
  );
}

export default Button;
