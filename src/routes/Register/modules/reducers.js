import axios from "axios"
// ------------------------------------
// Constants
// ------------------------------------
export const REGISTERED = "REGISTERED"

export const actions = {
  REGISTERED
}


// ------------------------------------
// Actions
// ------------------------------------
export function registered() {
  return {
    type: REGISTERED,
    payload: true
  }
}

// ------------------------------------
// Server Requests
// ------------------------------------

export function register() {

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
  [REGISTERED]    : (state, action) => ({...state, REGISTERED : action.payload})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false
export default function registerReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
