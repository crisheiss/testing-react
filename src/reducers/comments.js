import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types"

export default (state=[], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload]
    case FETCH_COMMENTS:
      const fetchComments = action.payload.data.map(comment => comment.name);
      return [...state, ...fetchComments]
    default:
      return state
  }
}