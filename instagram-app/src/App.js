import React, { Component } from 'react';
// import { render } from 'react-dom';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.data.map( post => {
            return (
            <PostContainer post={post} />
        );})}
      </div>
    );
  }
}

export default App;

// The root App component of your application should import the dummy data from the dummy-data.js file and 
// iterate over said data, passing each individual object as a prop to an instance of PostContainer.