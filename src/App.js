import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Transitions from '@/views/components/Transitions';
import Layout from '@/views/Layout';
import Home from '@/views/Home';
import About from '@/views/About';
import Skills from '@/views/Skills';
import Projects from '@/views/Projects';
import Contact from '@/views/Contact';
import CV from '@/views/CV';

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // TODO: don't use fixed timeout, instead check if the #root is not empty
    const ele = document.getElementById('loader');
    if (ele) {
      setTimeout(() => {
        ele.classList.add('available');

        setTimeout(() => {
          this.setState({ loading: false });
          ele.outerHTML = '';
        }, 436); // fadeOut animation duration
      }, 500);
    }
  }

  render() {
    const { loading } = this.state;
    const { location } = this.props;

    if (loading) {
      return null;
    }

    return (
      <Layout>
        <Transitions pageKey={location.pathname} {...location.state}>
          <Switch location={location}>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cv" component={CV} />
            <Redirect to="/home" />
          </Switch>
        </Transitions>
      </Layout>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({}).isRequired
};

export default App;
