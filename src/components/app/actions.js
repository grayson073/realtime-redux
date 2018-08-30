import { ERROR } from './reducers';
import { auth } from '../../services/firebase';
import { userGamesRef } from '../../services/firebaseRef';

export const login = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if(user) {
        console.log('Found a user');

        userGamesRef.child(user.uid).on('value', snapshot => {
          console.log('Load some games here');
        });

      } else {
        auth.signInAnonymously()
          .catch(err => {
            dispatch({
              type: ERROR,
              payload: err.message
            });
          });
      }
    }
    );
  };
};