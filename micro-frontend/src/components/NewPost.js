import React from 'react';
import PostForm from './PostForm';
import {useDispatch} from 'react-redux';
import { sendPostToAPI } from '../actions/posts';
import { useHistory } from 'react-router-dom';

const NewPost = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const add = newPost => {
        dispatch(sendPostToAPI(newPost));
        history.push('/');
    }

    return (
        <main>
            <h1>New Post</h1>
            <PostForm add={add}/>
        </main>
    )
}

export default NewPost;