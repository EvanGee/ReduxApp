// ------------------------------------
// Constants
// ------------------------------------
export const SET_INFO = "SET_INFO"

// ------------------------------------
// Actions
// ------------------------------------
export function setInfo() {
    console.log("set info")
    return {
        type: SET_INFO,
        payload: 5
    }
}

export const actions = {
  setInfo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_INFO]    : (state, action) => action.payload 
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
