import axios from 'axios';

import {FETCH_POST, ADD_POST, REMOVE_POST, UPDATE_POST, ADD_COMMENT, REMOVE_COMMENT, VOTE} from './types';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

// action creators

// fetch post
export const getPostFromAPI = (postId) => {
    return async (dispatch) => {
        const result = await axios.get(`${API_URL}/${postId}`);
        return dispatch(getPost(result.data));
    }
}

const getPost = (post) => {
    return {
        type: FETCH_POST,
        payload: {
            post
        } 
    }
}

// add post
export const sendPostToAPI = (newPost) => {
    return async (dispatch) => {
        const result = await axios.post(`${API_URL}`, newPost);
        return dispatch(addPost(result.data));
    }
}

const addPost = newPost => {
    return {
        type: ADD_POST,
        payload: {
            post: newPost
        }
    }
}

// remove post
export const removePostFromAPI = (id) => {
    return async (dispatch) => {
        await axios.delete(`${API_URL}/${id}`);
        return dispatch(removePost(id));
    }
}

export const removePost = id => {
    return {
        type: REMOVE_POST,
        payload: {
            id
        }
    }
}

// update post
export const updatePostFromAPI = (id, title, description, body) => {
    return async (dispatch) => {
        const result = await axios.put(`${API_URL}/${id}`, {
            title,
            description,
            body
        });
        return dispatch(updatePost(result.data));
    }
} 

export const updatePost = post => {
    return {
        type: UPDATE_POST,
        payload: {
            post
        } 
    }
}

// add comments
export const sendCommentToAPI = (postId, text) => {
    return async (dispatch) => {
        const result = await axios.post(`${API_URL}/${postId}/comments/`, {text});
        return dispatch(addComment(postId, result.data));
    }
}

const addComment = (postId, comment) => {
    return {
        type: ADD_COMMENT,
        payload: {
            postId,
            comment
        }
    }
}

// remove comments
export const removeCommentFromAPI = (postId, commentId) => {
    return async (dispatch) => {
        await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
        return dispatch(removeComment(postId, commentId));
    }
}

const removeComment = (postId, commentId) => {
    return {
        type: REMOVE_COMMENT,
        payload: {
            postId,
            commentId
        }
    }
}

// do the vote 
export const sendVoteToAPI = (id, direction) => {
    return async (dispatch) => {
        const result = await axios.post(`${API_URL}/${id}/vote/${direction}`);
        return dispatch(vote(id, result.data.votes));
    }
}

const vote = (postId, votes) => {
    return {
        type: VOTE,
        payload: {
            postId,
            votes
        } 
    }
}