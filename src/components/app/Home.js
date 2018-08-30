import React, { Component } from 'react';
import PropTypes from 'prop-types';
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