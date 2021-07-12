import React, {useState} from 'react';

const PostForm = ({add, post, cancel}) => {
    const INITIAL_STATE = {
        title: post.title,
        description: post.description,
        body: post.body
    }

    const [postData, setPostData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const {name, value} = evt.target;
        setPostData({...postData, [name]: value});
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        add(postData);
        setPostData(INITIAL_STATE);
    }

    return (
        <form className="mb-4" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="postform-title">Title: </label>
                <input 
                    onChange={handleChange}
                    type="text" 
                    id="postform-title"
                    name="title"
                    className="form-control"
                    value={postData.title}
                />
            </div>
            <div className="form-group">
                <label htmlFor="postform-description">Description: </label>
                <input 
                    onChange={handleChange}
                    type="text" 
                    id="postform-description"
                    name="description"
                    className="form-control"
                    value={postData.description}
                />
            </div>            
            <div className="form-group">
                <label htmlFor="postform-body">Body: </label>
                <textarea 
                    onChange={handleChange}
                    name="body" 
                    id="postform-body" 
                    rows="10"
                    className="form-control"
                    value={postData.body}
                />
            </div>
            <div>
                <button 
                    className="btn btn-primary m-2"
                >Save</button>
                <button 
                    onClick={cancel}
                    className="btn btn-secondary mr-2"
                >Cancel</button>
            </div>
        </form>
    )
}

// set a default prop for post form
PostForm.defaultProps = {
    post : {
        title: "",
        description: "",
        body: ""
    }
}

export default PostForm;