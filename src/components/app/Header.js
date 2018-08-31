import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';
import styles from './Header.css';

export default class Header extends Component {

  render() {
    return (
      <div className={styles.header}>
        <div className="logo">
          <img src={logo}/>
        </div>
        <h1>Rock Paper Scissors</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}