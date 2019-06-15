import React from 'react';
import PropTypes from 'prop-types';
import PostUser from './PostUser';
import PostTimeStamp from './PostTimeStamp';
import CommentSection from '../CommentSection/CommentSection'
import './Post.css';

function PostContainer(props) {
    return (
        <div className="PostContainer">
            <PostUser thumbnail={props.post.thumbnailUrl} username={props.post.username} />

            <img alt="Post" className="postImage" 
                src={props.post.imageUrl} />

            <CommentSection comments={props.post.comments} />
            
            <PostTimeStamp timestamp={props.post.timestamp} />
        </div>
    );
}

PostContainer.propTypes = {
    post: PropTypes.shape({ 
        id: PropTypes.string, 
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string, 
        imageUrl: PropTypes.string, 
        likes: PropTypes.number, 
        timestamp: PropTypes.string, 
        comments: PropTypes.array
    })
};

export default PostContainer;

// Each PostContainer component will then pass the array of comments on each post object 
// as a prop to an instance of the CommentSection component.