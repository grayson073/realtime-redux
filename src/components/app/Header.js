import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

export default class componentName extends Component {

  render() {
    return (
      <section>
        <div className="logo">
          <img src={logo}/>
          <h1>Rock Paper Scissors</h1>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}