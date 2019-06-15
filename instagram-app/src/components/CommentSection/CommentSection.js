import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput'
import PropTypes from 'prop-types';
import './Comments.css';

// The CommentSection component will receive the array of comments as props 
// and render a Comment component with the username of the poster as well as the post's text. 
// Additionally, there should be an input box that allows users to submit a new comment for any post. 

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

// Be sure to check the Types of the data you are passing around as props in the components 
// that will be using props to present data as DOM elements. 
// This should be linked to your Comment component that Comment Section will render and 
// potentially to your Post component that Post Container will render.

CommentSection.propTypes = {
    comments: PropTypes.arrayOf (
      PropTypes.shape({ 
        id: PropTypes.number,
        text: PropTypes.string, 
        username: PropTypes.string })
    )
};

export default CommentSection;