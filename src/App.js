import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '@/views/Layout';
import Home from '@/views/Home';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
        </Layout>
      </Switch>
    );
  }
}

export default App;
