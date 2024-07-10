import React from 'react';
import ButtonProps from './type';

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  className,
  children,
  tag,
 ...props
}) => {
  return (
    <button type={type} className={className} {...props}>
      <span className='flex items-center justify-center gap-3'>{text}
      {children}</span>
    </button>
  );
};

export default Button;
