import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import './fontawesome/css/all.css';

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  // In app.js use componentDidMount() to set your data to the component's state. 
  componentDidMount() {
    this.setState({data: dummyData});
  }

  // The root App component of your application should import the dummy data from the dummy-data.js file and 
  // iterate over said data, passing each individual object as a prop to an instance of PostContainer.
  // Use the state object to pass data to your PostContainer component.
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map( (post, i) => {
            return (
            <PostContainer post={post} key={i} />
        );})}
      </div>
    );
  }
}

export default App;