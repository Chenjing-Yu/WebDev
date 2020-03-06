import axios from 'axios'

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './userTypes.js'

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  }
}

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

//action creator returning an action
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  }
}

//async 'action' creator (not returning an action)
//return a function which takes dispatch and can
//execute regular dispatch and other side effects
export const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest());
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        //response.data is the array of users
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        //error.message is the error description
        dispatch(fetchUsersFailure(error.message));
      });
  }
}

export default fetchUsers
