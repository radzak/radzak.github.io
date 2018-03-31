import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/defaults.css';
import './styles/constants.css';
import './styles/classes.css';
import './styles/effects.css';
import './styles/colors.css';

import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
