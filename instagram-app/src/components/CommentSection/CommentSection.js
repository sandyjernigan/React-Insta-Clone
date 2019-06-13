import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput'
import PropTypes from 'prop-types';
import './Comments.css';

function CommentSection(props) {
    return (
        <div className="CommentSection">
            {props.comments.map( (each, i) => {
                return (
                    <Comment comment={each} key={i} />
            );})}
        <CommentInput />
        </div>
    );
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ 
        text: PropTypes.string, 
        username: PropTypes.string })
    )
  };

export default CommentSection;

// The CommentSection component will receive the array of comments as props 
// and render a Comment component with the username of the poster as well as the post's text. 
// Additionally, there should be an input box that allows users to submit a new comment for any post. 
// We'll work on posting new comments tomorrow.