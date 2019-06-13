import React from 'react';

function Comment(props) {
  return (
    <div>
      <span className="comment">{props.comment.text}</span>
      <span className="username">{props.comment.username}</span>
    </div>
  );
};

export default Comment;