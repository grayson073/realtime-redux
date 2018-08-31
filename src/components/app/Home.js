import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Home.css';
import { getUser, getGames } from './reducers';
import { login, requestGame } from './actions';
import { Link } from 'react-router-dom';

class Home extends Component {

  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    requestGame: PropTypes.func.isRequired,
    games: PropTypes.array
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
    const { user, games, requestGame } = this.props;

    return (
      <div className={styles.home}>
        <h2>Hi
          {user && 
            <span> {user.displayName === null ? 'stranger' : user.displayName}!</span>
          }
        </h2>
        <button onClick={this.handleNameChange}>Change name</button>
        {user &&
          <UserGames games={games} onRequest={requestGame}/>
        }

        <p>Play a game in real time!</p>
      </div>
    );
  }


}

export const UserGames = ({ onRequest, games }) => {
  return (
    <section>
      <button onClick={onRequest}>Play Game</button>
      <ul>
        {games.map((gameKey, i) => (
          <li key={gameKey}>
            <Link to={`/games/${gameKey}`}>Game {i + 1}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

UserGames.propTypes = {
  games: PropTypes.array.isRequired,
  onRequest: PropTypes.func.isRequired
};

export default connect(
  state => ({
    user: getUser(state),
    games: getGames(state)
  }), { login, requestGame }
)(Home);