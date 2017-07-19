import Axios from 'axios'
// ------------------------------------
// Constants
// ------------------------------------
export const LOGGED_IN = "LOGGED_IN"
export const PASSWORD  = "PASSWORD"
export const EMAIL     = "EMAIL"
axios = Axios.create({withCredentials:true})
// ------------------------------------
// Actions
// ------------------------------------

export function loggedIn() {

  return (dispatch, getstate) => {
    axios.get('/api/register')
    .then(function (res) {
      console.log(res.data);
      //updateServerState("evan", getstate())
      //dispatch(loggedIn())
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  /*
  return {
    type: LOGGED_IN,
    payload: true
  }
  */
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

export function login(email, password) {
  return (dispatch, getstate) => {
    axios.post('/api/login', {"username" : email, password})
    .then(function (res) {
      console.log(res.data);
      //updateServerState("evan", getstate())
      //dispatch(loggedIn())
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

//update state
export function updateServerState(user, state) {
    axios.post('/api/updateState', {withCredentials:true}, state)
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


