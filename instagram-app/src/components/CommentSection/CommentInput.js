import React from 'react';

class CommentInput extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          comment: '',
          username: 'anonymousUser'
      };
  }
  
  changeHandler = event => {
      console.log("change comment: " + event.target.value );
      this.setState({ comment: event.target.value });
  };

  submitHandler = event => {
      event.preventDefault();
      console.log("submit: " + this.state.comment );
      this.props.addNewComment(this.state.comment);
      this.setState({ comment: '' });
  };

  noChange = event => {
      event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.state.comment !== '' ? this.submitHandler : this.noChange} >
          <input id="commentInputText" type="text"
            placeholder="Add a comment..."         
            value={this.state.comment}
            onChange={this.changeHandler} />
          <input id="commentUsername" type="hidden" value="anonymousUser" />
          <input type="submit" value="Submit" />
      </form>
    );
  }
};

export default CommentInput;