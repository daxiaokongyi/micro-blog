import React from 'react';
import "./Comment.css";

const Comment = ({text, removeComment, id}) => {
    const handleDelete = () => removeComment(id);

    return (
        <div>
            <p>
                {text}
                <i
                    className="fa fa-times text-danger m-2"
                    onClick={handleDelete}
                />
            </p>
        </div>
    )
}

export default Comment;