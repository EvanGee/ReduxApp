import axios from 'axios'
import dispatch from 'redux'
// ------------------------------------
// Constants
// ------------------------------------
export const LOGGED_IN = "LOGGED_IN"

// ------------------------------------
// Actions
// ------------------------------------

export function loggedIn() {
  return {
    type: LOGGED_IN,
    payload: true
  }
}

// ------------------------------------
// Server Requests
// ------------------------------------

export function logIn(email, password) {
  axios.post('/LogIn', {
    firstName: 'Fred',
    password: 'abc123'
  })
  .then(function (response) {
    console.log(response);
    console.log("SUCCESS")
    dispatch(loggedIn())
  })
  .catch(function (error) {
    console.log(error);
  });
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGGED_IN]   : (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function LogInReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}


