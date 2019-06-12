import React from 'react';

function PostContainer(props) {
    return (
        <div className="CommentSection">
            <CommentSection comments={props.comments} />
        </div>
    );
}

export default PostContainer;

// The CommentSection component will receive the array of comments as props 
// and render a Comment component with the username of the poster as well as the post's text. 
// Additionally, there should be an input box that allows users to submit a new comment for any post. 
// We'll work on posting new comments tomorrow.