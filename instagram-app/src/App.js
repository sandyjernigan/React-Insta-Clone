import React, { Component } from 'react';
import { dummyData } from 'dummy-data';
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
        {data.map( post => {
            return (
            <PostContainer post={post} />
        );})}
      </div>
    );
  }
}

export default App;
