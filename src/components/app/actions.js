import { ERROR, ERROR_CLEAR, USER_LOAD } from './reducers';
import { auth } from '../../services/firebase';
// import { userGamesRef, playersRef } from '../../services/firebaseRef';

export const clearError = () => ({ type: ERROR_CLEAR });

export const login = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if(user) {
        console.log('User logged in!', user);
        dispatch({
          type: USER_LOAD,
          payload: user
        });

        console.log('Load some games here');
      } else {
        auth.signInAnonymously()
          .catch(err => {
            dispatch({
              type: ERROR,
              payload: err.message
            });
          });
      }
    });
  };
};

export const updateUserName = (name) => {
  
};