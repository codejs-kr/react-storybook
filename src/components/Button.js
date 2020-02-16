import React from 'react';
import './Button.scss';

const Button = ({ children = '버튼', type = 'button', size = 'normal', color = 'primary', onClick = () => {} }) => {
  const className = `button ${size} ${color}`;

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
