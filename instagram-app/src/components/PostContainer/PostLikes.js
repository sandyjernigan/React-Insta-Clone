import React from 'react';

class PostLikes extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          likes: props.likes
      };
  }

  heartClicked = event => {
      event.preventDefault();
      this.setState({ likes: this.state.likes + 1 });   
  };

  commentClicked = event => {
      event.preventDefault();
      // I'd like to add an on click event that moves cursor to the comment input      
      console.log("work in progress: this should move cursor to the comment input");
  }

  render() {
    return (
      <div className="PostLikes">
        <div className="likesIcons">
            <i className="far fa-heart" onClick={this.heartClicked} />
            <i className="far fa-comment" onClick={this.commentClicked} />
        </div>
        <div id="likes-container">{this.state.likes} likes</div>
      </div>
    );
  }
};

export default PostLikes;