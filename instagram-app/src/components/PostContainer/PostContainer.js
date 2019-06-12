import React from 'react';

// Each PostContainer component will then pass the array of comments on each post object as a prop to an instance of the CommentSection component

function PostContainer(props) {
    return (
        <div className="PostContainer">
            <CommentSection comments={props.comments} />
        </div>
    );
}

export default PostContainer;