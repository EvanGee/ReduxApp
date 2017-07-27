import axios from "axios"
// ------------------------------------
// Constants
// ------------------------------------
export const REGISTERED = "REGISTERED"
export const PASS = "R_PASSWORD"
export const VAL_PASS = "R_VAL_PASS"
export const EMAIL = "R_EMAIL"
export const USERNAME = "R_USERNAME"

export const actions = {
  REGISTERED,
  PASS,
  VAL_PASS,
  EMAIL,
  USERNAME
}


// ------------------------------------
// Actions
// ------------------------------------
export const registered = () => {
  return {
    type: REGISTERED,
    payload: true
  }
}

export const setPass = (newPass) => {
  console.log(newPass)
  return {
    type: PASS,
    payload: newPass
  }
}

export const setValidatePass = (newPass) => {
  return {
    type: VAL_PASS,
    payload: newPass
  }
}

export const setEmail = (newEmail) => {
  return {
    type: EMAIL,
    payload: newEmail
  }
}

export const setUserName = (newUserName) => {
  return {
    type: USERNAME,
    payload: newUserName
  }
}


// ------------------------------------
// Server Requests
// ------------------------------------

export const register = () => {

  return (dispatch, getstate) => {
    axios.get('/api/register')
      .then(function (res) {
        console.log(res.data);
        dispatch(registered())

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
  [REGISTERED]: (state, action) => ( {...state, REGISTERED: action.payload }),
  [USERNAME]: (state, action) => ({...state, USERNAME : action.payload}),
  [PASS]: (state, action) => ({...state, PASS: action.payload}),
  [VAL_PASS]: (state, action) => ({...state, VAL_PASS: action.payload}),
  [EMAIL]: (state, action) => ({...state, EMAIL: action.payload}),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false
export default function registerReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
