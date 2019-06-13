import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

function PostContainer(props) {
    return (
        <div className="PostContainer">
            <CommentSection comments={props.post.comments} />
        </div>
    );
}

export default PostContainer;

// Each PostContainer component will then pass the array of comments on each post object 
// as a prop to an instance of the CommentSection component.