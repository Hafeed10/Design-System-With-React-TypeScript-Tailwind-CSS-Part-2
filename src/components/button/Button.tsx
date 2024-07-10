import React from 'react';
import ButtonProps from './type';

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  className,
  children,
  onClick,
  onChange,
  tag,
 ...props
}) => {
  return (
    <button type={type} className={className} onClick={onClick} onChange={onChange} {...props}>
      <span className='flex items-center justify-center gap-3'>
      {children}</span>
    </button>
  );
};

export default Button;
