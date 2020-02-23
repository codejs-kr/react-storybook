import React from 'react';
import './Dialog.scss';

const Dialog = ({ type = 'default', title, children, onClick = () => {} }) => {
  const Title = ({ children }) => <header>{children}</header>;
  const className = `dialog ${type}`;

  return (
    <div className={className} onClick={onClick}>
      {title && <Title>{title}</Title>}
      {children}
    </div>
  );
};

export default Dialog;
