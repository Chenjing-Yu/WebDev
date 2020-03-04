const redux = require('redux')
const reduxLogger = require('redux-logger')
const thunk = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const initialState = {
  loading: true,
  data: [],
  error: '',
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

//action creator returning an action
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  }
}

//async 'action' creator (not returning an action)
//return a function which takes dispatch and can
//execute regular dispatch and other side effects
const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest());
    axios.get('https://jsonplaceholder/typicode.com/users')
      .then(response => {
        //response.data is the array of users
        const users = response.data.map(user => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        //error.message is the error description
        dispatch(fetchUsersFailure(error.message));
      });
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST: return {
      ...state,
      loading: true,
    };
    case FETCH_USERS_SUCCESS: return {
      ...state,
      loading: false,
      data: action.payload,
      error: '',
    };
    case FETCH_USERS_FAILURE: return {
      ...state,
      loading: false,
      data: [],
      error: action.payload,
    };
    default: return state;
  }
}

const store = createStore(reducer, applyMiddleware(logger, thunk))
store.subscribe(()=>{})
store.dispatch(fetchUsers())
