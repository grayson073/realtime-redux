import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home'; 
import Game from '../game/Game'; 
import styles from './App.css';

export default class componentName extends Component {

  render() {
    return (
      <Router>
        <div className={styles.app}>
          <header>
            <Header/>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/games/:gameKey" component={Game}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
