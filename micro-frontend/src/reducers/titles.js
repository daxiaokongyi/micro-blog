import { ADD_POST, FETCH_TITLES, REMOVE_POST, UPDATE_POST, VOTE } from "../actions/types"; 

// function used to create title on homepage based on posts
const createTitleFromPost = ({id, title, description}) => {
    return {
        id,
        title,
        description
    };
}

const sortByVote = (posts) => {
    return posts.sort((a,b) => b.votes - a.votes);
} 

export default function title(state = [], action) {
    const {type, payload} = action;

    switch(type) {
        case FETCH_TITLES:
            return sortByVote([...payload.titles]);
        case ADD_POST: 
            return [...state, createTitleFromPost(payload.post)];
        case UPDATE_POST:
            return state.map(title => title.id === payload.post.id 
                ? createTitleFromPost(payload.post)
                : title    
            );
        case REMOVE_POST:
            return state.filter(title => title.id !== payload.id);
        case VOTE:
            return sortByVote(state.map(title => title.id === payload.postId 
                ? {...title, votes: payload.votes}
                : title));
        default:
            return state;
    }
}