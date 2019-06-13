import React from 'react';
import PostUser from './PostUser';
import CommentSection from '../CommentSection/CommentSection'
import './Post.css';

function PostContainer(props) {
    return (
        <div className="PostContainer">
            <PostUser thumbnail={props.post.thumbnailUrl} username={props.post.username} />

            <img alt="Post" className="postImage" 
                src={props.post.imageUrl} />

            <CommentSection comments={props.post.comments} />
            
            <span className="timestamp">{props.post.timestamp}</span>
        </div>
    );
}

export default PostContainer;

// Each PostContainer component will then pass the array of comments on each post object 
// as a prop to an instance of the CommentSection component.