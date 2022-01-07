import { ADD_USERS, ADD_POSTS, ADD_COMMENTS } from "./types"

export const addUsersAction = (payload) => ({type: ADD_USERS, payload})
export const addPostsAction = (payload) => ({type: ADD_POSTS, payload})
export const addCommentsAction = (payload) => ({type: ADD_COMMENTS, payload})

export const fetchUsers = () => {
  return dispatch => {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => dispatch(addUsersAction(json)))
  }
}

export const fetchPosts = () => {
  return dispatch => {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(json => dispatch(addPostsAction(json)))
  }
}

export const fetchComments = () => {
  return dispatch => {
      fetch('https://jsonplaceholder.typicode.com/comments')
          .then(response => response.json())
          .then(json => dispatch(addCommentsAction(json)))
  }
}