import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from 'containers/LoginFormContainer';
import './Login.scss';

function Login(props) {
  return (
    <Fragment>
      <h1>Service Admin</h1>
      <LoginFormContainer handleLogin={props.handleLogin} />
      <br />
      <br />
      <Link to="/dashboard">대쉬보드</Link>
    </Fragment>
  );
}

export default Login;
