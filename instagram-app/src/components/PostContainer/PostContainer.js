import React from 'react';
import PropTypes from 'prop-types';
import PostUser from './PostUser';
import PostLikes from './PostLikes';
import PostTimeStamp from './PostTimeStamp';
import CommentSection from '../CommentSection/CommentSection'
import './Post.css';

// Each PostContainer component will then pass the array of comments on each post object 
// as a prop to an instance of the CommentSection component.

function PostContainer(props) {
    return (
        <div className="PostContainer">
            <PostUser thumbnail={props.post.thumbnailUrl} username={props.post.username} />

            <img alt="Post" className="postImage" 
                src={props.post.imageUrl} />

            <div className="postContent">
                <PostLikes likes={props.post.likes} />
                <CommentSection comments={props.post.comments} />
                <PostTimeStamp timestamp={props.post.timestamp} />
            </div>
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