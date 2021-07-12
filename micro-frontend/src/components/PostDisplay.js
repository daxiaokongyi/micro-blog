import React from 'react';
import "./PostDisplay.css";

const PostDisplay = ({post, toggleEdit, removePost, vote}) => {
    const {title, description, body, votes} = post;
    return (
        <div className="PostDisplay">
            <div>
                <h2>Title: {title}</h2>
                <p>Description: {description}</p>
                <div>Body: {body}</div>
            </div>
            <div className="PostDisplay-right">
                <div className="PostDisplay-edit-area">
                    <i 
                        className="fas fa-edit text-primary"
                        onClick={toggleEdit}
                    ></i>
                    <i 
                        className="fas fa-times text-danger"
                        onClick={removePost}
                    ></i>
                </div>
                <div className="PostDisplay-votes">
                    <b>{votes} votes:</b>

                    <i className="fas fa-thumbs-up text-success"
                        onClick={() => vote("up")} />
                    <i className="fas fa-thumbs-down text-danger"
                        onClick={() => vote("down")} />
                </div>
            </div>
        </div>
    )
}

export default PostDisplay;