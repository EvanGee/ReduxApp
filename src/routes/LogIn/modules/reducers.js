import axios from 'axios'
// ------------------------------------
// Constants
// ------------------------------------
export const LOGGED_IN = "LOGGED_IN"
export const PASSWORD  = "PASSWORD"
export const EMAIL     = "EMAIL"

// ------------------------------------
// Actions
// ------------------------------------

export function loggedIn() {
  return {
    type: LOGGED_IN,
    payload: true
  }
}

export function changePassword(newPassword) {
  return {
    type: PASSWORD,
    payload: newPassword
  }
}


export function changeEmail(newEmail) {
  return {
    type: EMAIL,
    payload: newEmail
  }
}


// ------------------------------------
// Server Requests
// ------------------------------------

export function logIn(email, password) {
  return (dispatch, getstate) => {
    axios.get('/api/birds')
    .then(function (response) {
      console.log(response.data);
      dispatch(loggedIn())
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGGED_IN]   : (state, action) => ({"LoggedIn" : action.payload}),
  [PASSWORD]    : (state, action) => ({ ...state, "password" : action.payload}),
  [EMAIL]         : (state, action) => ({ ...state, "email" : action.payload})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function LogInReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}


