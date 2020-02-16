import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom';
import AppRoute from './AppRoute';
import BlankLayout from 'layouts/BlankLayout';
import BasicLayout from 'layouts/BasicLayout';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';
import Manage from 'pages/Manage';
import Exception from 'pages/Exception';
import utils from 'modules/utils';
import 'assets/style/main.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.body = document.querySelector('body');
    this.init();
  }

  init = () => {
    this.checkEnv();
  };

  checkEnv = () => {
    this.body.classList.add(utils.isMobile ? 'mobile' : 'pc');
  };

  render() {
    return (
      <Fragment>
        <Switch>
          <AppRoute exact path="/" layout={BlankLayout} component={Login} id="login" />
          <AppRoute path="/login" layout={BlankLayout} component={Login} id="login" />
          <AppRoute path="/dashboard" layout={BasicLayout} component={Dashboard} />
          <AppRoute path="/manage/:name" layout={BasicLayout} component={Manage} />
          <AppRoute path="/exception/:name" layout={BlankLayout} component={Exception} />
          <AppRoute layout={BlankLayout} component={Exception} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
