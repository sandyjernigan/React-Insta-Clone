import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import './fontawesome/css/all.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      data: [],
      filteredData: []
    };
  }

  // In app.js use componentDidMount() to set your data to the component's state. 
  componentDidMount() {
    this.setState({data: dummyData});
  }
  
  searchPosts = phrase => {
    console.log("Search for Phrase: " + phrase );
    var testSearch ="philz";
    // Filter out any post whose username doesn't match the search term passed in, then update the state with the resulting data.
    const searchResults = this.state.data.filter( post => {
      if (post.username.includes(testSearch)) { 
        console.log(testSearch);
        return post;  }
      else { return null; }
    })

    console.log("Search for Test: " + testSearch );
    console.log(searchResults.length > 0);
    this.setState({data: (searchResults.length > 0) ? searchResults : dummyData});

    // if (this.state.filteredData.length > 0) {
    //   this.setState({data: searchResults});
    //   console.log("If filteredData: " + this.state.data);
    // } else {
    //   this.setState({filteredData: searchResults});
    //   console.log("Else filteredData: " + this.state.filteredData);
    // }

    // this.setState({filteredData: searchResults});
  }

  // The root App component of your application should import the dummy data from the dummy-data.js file and 
  // iterate over said data, passing each individual object as a prop to an instance of PostContainer.
  // Use the state object to pass data to your PostContainer component.
  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchPosts} />
        {this.state.data.map( (post, i) => {
            return (
            <PostContainer post={post} key={i} />
        );})}
      </div>
    );
  }
}

export default App;