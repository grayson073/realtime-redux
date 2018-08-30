import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Header.css';
import { getUser } from './reducers';
import { login } from './actions';

class Home extends Component {

  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func
  };

  handleNameChange = () => {
    const { user, login } = this.props;
    const person = prompt('Please enter your name');
    if(person === null) return;
    user.updateProfile({
      displayName: person
    })
      .then(() => {
        this.setState({ user });
        login();
      });
  };


  render() {
    const { user } = this.props;

    return (
      <div className={styles.home}>
        <h2>Hi
          {user && 
            <span> {user.displayName === null ? 'stranger' : user.displayName}!</span>
          }
        </h2>
        <button onClick={this.handleNameChange}>(Change your name)</button>

        <p>Play a game in real time!</p>
      </div>
    );
  }


}

export default connect(
  state => ({
    user: getUser(state)
  }), { login }
)(Home);