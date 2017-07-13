// ------------------------------------
// Constants
// ------------------------------------
export const SET_INFO = "SET_INFO"
import fetch from "isomorphic-fetch"
require('es6-promise').polyfill();
//import 'babel-polyphill'




// ------------------------------------
// Actions
// ------------------------------------


export function fetchPosts(subreddit) {
  return function (dispatch) {
    //dispatch(requestPosts(subreddit))
    return fetch(`https://www.reddit.com/r/politics.json`)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json => {
        dispatch(receivePosts(subreddit, json))
        console.log(subreddit)}
      )
  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_INFO]    : (state, action) => action.payload,
  [RECEIVE_POSTS] : (state, action) => ({"json" : action.posts})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
