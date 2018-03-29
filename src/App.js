import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '@/views/Layout';
import Home from '@/views/Home';
import About from '@/views/About';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
