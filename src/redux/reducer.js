import { ADD_USERS, ADD_POSTS, ADD_COMMENTS } from "./types";

const defaultState = {
  users: [],
  posts: [],
  comments: []
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_USERS:
      return {...state, users: [...state.users, ...action.payload]}
    case ADD_POSTS:
        return {...state, posts: [...state.posts, ...action.payload]}
    case ADD_COMMENTS:
        return {...state, comments: [...state.comments, ...action.payload]}
    default:
      return state
  }
}

export default reducer;