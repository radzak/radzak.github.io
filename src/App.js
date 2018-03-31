import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '@/views/Layout';
import Home from '@/views/Home';
import About from '@/views/About';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // TODO: don't use fixed timeout, instead check if the #root is not empty
    // const ele = document.getElementById('loader');
    // if (ele) {
    //   setTimeout(() => {
    //     ele.classList.add('available');
    //     this.setState({ loading: false });
    //     setTimeout(() => {
    //       ele.outerHTML = '';
    //     }, 2000);
    //   }, 2000);
    // }
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return null;
    }

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
