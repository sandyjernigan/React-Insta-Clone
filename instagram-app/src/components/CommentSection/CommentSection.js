import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput'
import PropTypes from 'prop-types';
import './Comments.css';

// The CommentSection component will receive the array of comments as props 
// and render a Comment component with the username of the poster as well as the post's text. 
// Additionally, there should be an input box that allows users to submit a new comment for any post. 

// Lets divide up the data that we've been working with this far by separating the comments array onto a new component's state. 
// Pass down the comments through each post to the CommentSection component. 
// Be sure that you set the incoming comments props data on the state of the CommentSection component.

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }

    // Create a function in CommentSection.js called addNewComment that takes in an event and an index number. 
    // The function will add the comment that is on the event object to the post that is at that index number.
    // Pass the addNewComment function down the component tree to where ever you have your 'Add a comment...' input.
    addNewComment = (commentUsername, commentInputText) => {
        const newComment = {
            id: this.state.comments.length, 
            username: commentUsername, 
            text: commentInputText
          } 
          console.log(newComment);

        this.setState({
            comments: [...this.state.comments, newComment] });
    }

    render() {
        return (
            <div className="CommentSection">
                {this.state.comments.map( (each, i) => {
                    return (
                        <Comment comment={each} key={i} />
                );})}
            <CommentInput addNewComment={this.addNewComment} />
            </div>
        );
    }
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