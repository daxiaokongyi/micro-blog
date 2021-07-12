import React, {useState, useEffect} from 'react';
import PostForm from './PostForm';
import PostDisplay from './PostDisplay';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {getPostFromAPI, removePostFromAPI, updatePostFromAPI, sendCommentToAPI, removeCommentFromAPI, sendVoteToAPI} from '../actions/posts';
import './Post.css';

const Post = () => {
    const [isEditing, setIsEditing] = useState(false);
    // get post's ID
    const postId = Number(useParams().postId);

    const history = useHistory();
    const dispatch = useDispatch();

    // get post state
    const post = useSelector(state => state.posts[postId]);

    useEffect(() => {
        const getPost = async () => {
            dispatch(getPostFromAPI(postId));
        }
        if(!post) getPost();    
    }, [dispatch, postId, post]);

    if (!post) {
        return (
            <p>Loading...</p>
        )
    }

    const toggleEdit = () => {
        setIsEditing(edit => !edit);
    }

    const editPost = ({title, description, body}) => {
        dispatch(updatePostFromAPI(postId, title, description, body));
        toggleEdit();
    }

    const removePost = () => {
        dispatch(removePostFromAPI(postId));
        history.push('./');
    }

    const addComment = (commentText) => {
        dispatch(sendCommentToAPI(postId, commentText));
    }

    const removeComment = (commentId) => {
        dispatch(removeCommentFromAPI(postId, commentId));
    }

    const vote = (direction) => {
        dispatch(sendVoteToAPI(postId, direction));
    }

    return (
        <div>
            {isEditing 
                ? <PostForm post={post} add={editPost} cancel={toggleEdit}/>
                : <PostDisplay 
                    post={post} 
                    toggleEdit={toggleEdit}
                    removePost={removePost}
                    vote={vote}
                />
            }
            <section className="Post-comments mb-4">
                <h4>Comments</h4>
                <CommentList
                    comments={post.comments}
                    removeComment={removeComment}
                />
                <CommentForm
                    addComment={addComment}
                />
            </section>
        </div>
    )
}

export default Post;