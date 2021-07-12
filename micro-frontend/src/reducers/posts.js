import { FETCH_POST, ADD_POST, REMOVE_POST, UPDATE_POST, ADD_COMMENT, REMOVE_COMMENT, VOTE } from "../actions/types";

export default function post(state = {}, action) {
    const {type, payload} = action;

    switch (type) {
        case ADD_POST: // wrong here, needs to add ID
            return {...state, [payload.post.id]: payload.post};    
        case FETCH_POST:
            return {...state, [payload.post.id]: payload.post};
        case UPDATE_POST:
            return {
                ...state,
                [payload.post.id]: {
                    ...payload.post,
                }
            }
        case REMOVE_POST:
            let posts = {...state}
            delete posts[payload.id]
            return posts;
        case ADD_COMMENT:
            return {
                ...state,
                [payload.postId]: {
                    ...state[payload.postId],
                    comments: [...state[payload.postId].comments, payload.comment]
                }
            }
        case REMOVE_COMMENT:
            return {
                ...state,
                [payload.postId]: {
                    ...state[payload.postId],
                    comments: state[payload.postId].comments.filter(comment => {
                        return comment.id !== payload.commentId
                    })
                }
            }
        case VOTE:
            return {
                ...state,
                [payload.postId]: {
                    ...state[payload.postId],
                    votes: payload.votes
                }
            }
        default:
            return state;
    }
}

