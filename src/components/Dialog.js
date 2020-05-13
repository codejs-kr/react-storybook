import React from 'react';
import styled from 'styled-components';

const DialogSC = styled.div`
  display: inline-block;
  border-radius: 4px;
  background-color: #ffffff;

  header {
    margin-bottom: 8px;
    height: 45px;
    font-size: 3.9rem;
    line-height: 1.15;
    text-align: center;
    color: #333;
    font-weight: bold;
  }

  main {
    font-size: 3rem;
    text-align: center;
  }

  footer {
    text-align: center;

    button {
      margin: 0 5px;
    }
  }

  &.default {
    padding: 40px 24px 24px;
    min-width: 390px;
    min-height: 200px;
    box-shadow: 0 24px 32px 0 rgba(0, 0, 0, 0.16);

    main {
      margin-bottom: 30px;
      color: #666;
    }
  }

  &.alert {
    padding: 30px;
    box-shadow: 0 30px 30px 0 rgba(0, 0, 0, 0.18);

    main {
      color: #333;
    }
  }
`;

const Dialog = ({ type = 'default', title, children, onClick = () => {} }) => {
  const Title = ({ children }) => <header>{children}</header>;
  const className = `${type}`;

  return (
    <DialogSC className={className} onClick={onClick}>
      {title && <Title>{title}</Title>}
      {children}
    </DialogSC>
  );
};

export default Dialog;
