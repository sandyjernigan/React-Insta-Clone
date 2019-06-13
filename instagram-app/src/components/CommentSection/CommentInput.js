import React from 'react';

function CommentInput(props) {
  return (
    <form>
        <input type="text" placeholder="Add a comment here." />
        <input type="button" value="Submit" />
    </form>
  );
};

export default CommentInput;