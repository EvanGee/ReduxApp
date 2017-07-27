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

export function login(email, password) {
  return (dispatch, getstate) => {
    axios.post('/api/login', {"username" : email, password})
    .then(function (res) {

    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

//update state
export function updateServerState(user, state) {
    axios.post('/api/updateState', state)
    .then(function (res) {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }



// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGGED_IN]   : (state, action) => ({"LoggedIn" : action.payload}),
  [PASSWORD]    : (state, action) => ({ ...state, PASSWORD: action.payload}),
  [EMAIL]         : (state, action) => ({ ...state, EMAIL : action.payload})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function LogInReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}


