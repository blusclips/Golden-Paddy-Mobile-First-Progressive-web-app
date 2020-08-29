/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Store from './redux';
import './index.css';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import DefaultPage from './pages/default';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="*" component={DefaultPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
