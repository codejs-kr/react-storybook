import React from 'react';
import styled from 'styled-components';

const ButtonSC = styled.button`
  margin: 10px;
  padding: 0 100px;
  line-height: 1;
  min-width: 100px;
  height: 60px;
  color: #fff;
  background-color: #78cd13;
  border-radius: 4px;

  // size
  &.small {
    padding: 0 74px;
    height: 48px;
    font-size: 1.4rem;
  }

  &.large {
    padding: 0 183px;
    height: 70px;
    font-size: 1.8rem;
  }

  // color, type
  &.sub {
    background: #f1f3f5;
    color: #343a40;
  }

  &.outline {
    background: none;
    color: #343a40;
    border: solid 1px #dee2e6;
  }
`;

const Button = ({ children = '버튼', type = 'button', size = 'normal', style = 'primary', onClick = () => {} }) => {
  const className = `${size} ${style}`;

  return (
    <ButtonSC type={type} className={className} onClick={onClick}>
      {children}
    </ButtonSC>
  );
};

export default Button;
