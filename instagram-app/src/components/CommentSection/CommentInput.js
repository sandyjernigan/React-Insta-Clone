import React from 'react';

function CommentInput(props) {
  return (
    <form>
        <input id="commentInputText" type="text" placeholder="Add a comment..." />
        <input id="commentUsername" type="hidden" value="anonymousUser" />
        <input type="button" value="Submit" />
    </form>
  );
};

export default CommentInput;