import React from 'react';

function Comment(props) {
  return (
    <div className="comment">
      <span className="username"> {props.comment.username}</span>:
      <span className="text"> {props.comment.text} </span>
    </div>
  );
};

export default Comment;