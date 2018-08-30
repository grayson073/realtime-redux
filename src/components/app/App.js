import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
// import Home from './Home'; 
import styles from './App.css';

export default class componentName extends Component {

  render() {
    return (
      <Router>
        <div className={styles.app}>
          <header>
            <Header/>
          </header>
        </div>
      </Router>
    );
  }
}
