import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home'; 

export default class componentName extends Component {

  render() {
    return (
      <Router>
        <h1>Hello React!</h1>
        <header>
          <Header/>
        </header>
      </Router>
    );
  }
}
