import React from 'react';

function PostUser(props) {
    return (
        <div className="PostUser">
            <img className="thumbnail" alt="thumbnail" src={props.thumbnail} />
            <span className="username">{props.username}</span>
        </div>
    );
}

export default PostUser;