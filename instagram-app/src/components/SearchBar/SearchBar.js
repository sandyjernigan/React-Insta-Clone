import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: ''
        };
    }
  
    changeHandler = event => {
        console.log("change search: " + event.target.value );
        this.setState({ search: event.target.value });
    };
  
    submitHandler = event => {
        event.preventDefault();
        console.log("submit: " + this.state.search );
        this.props.addNewComment(this.state.search);
        this.setState({ search: '' });
    };
  
    noChange = event => {
        event.preventDefault();
    };
  
    render() {
        return (
            <div className="Search">
                <div className="logo">
                    <i className="fab fa-instagram"></i>
                    <span className="logoText">Instagram</span>
                </div>
                <div className="SearchBar">
                    <form onSubmit={this.state.search !== '' ? this.submitHandler : this.noChange} >
                        <input type="text" placeholder="Search" />
                    </form>
                </div>
                <div className="SearchIcons">
                    <i className="fa fa-compass"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-user-circle"></i>
                </div>
            </div>
        );
    }
};

export default SearchBar;