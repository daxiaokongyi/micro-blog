import { combineReducers } from "redux";
import postsReducer from './posts';
import titlesReducer from './titles';

export default combineReducers(
    {
        posts: postsReducer,
        titles: titlesReducer
    }
);
