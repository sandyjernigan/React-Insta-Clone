import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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
        {this.state.data.map( (post, i) => {
            return (
            <PostContainer post={post} key={i} />
        );})}
      </div>
    );
  }
}

export default App;

// The root App component of your application should import the dummy data from the dummy-data.js file and 
// iterate over said data, passing each individual object as a prop to an instance of PostContainer.

// Be sure to check the Types of the data you are passing around as props in the components 
// that will be using props to present data as DOM elements. 
// This should be linked to your Comment component that Comment Section will render and 
// potentially to your Post component that Post Container will render.