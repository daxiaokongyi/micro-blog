import React, {useState} from 'react';

const CommentForm = ({addComment}) => {
    const [commentData, setCommentData] = useState("");

    const handleSubmit = evt => {
        evt.preventDefault();
        addComment(commentData);
        setCommentData("");
    }

    const handleChange = evt => {
        setCommentData(evt.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        onChange={handleChange}
                        className="form-control"
                        type="text"
                        id="commentform-text"
                        name="text"
                        value={commentData}
                        placeholder="New Comment"
                        size="50"
                    />   
                </div>
                <button className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}

export default CommentForm;