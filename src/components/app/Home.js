import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import styles from './Header.css';

export default class Home extends Component {

  render() {
    return (
      <div className={styles.home}>
        <h2>Play a game in real time!</h2>
      </div>
    );
  }
}