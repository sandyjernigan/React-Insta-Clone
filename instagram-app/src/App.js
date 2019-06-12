import React, { Component } from 'react';
import { dummyData } from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

// iterate over said data, passing each individual object as a prop to an instance of PostContainer

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
        {data.map( post => {
            return (
            <PostContainer post={post} />
        );})}
      </div>
    );
  }
}

export default App;
