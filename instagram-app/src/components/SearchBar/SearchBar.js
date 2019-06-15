import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return (
        <div className="Search">
            <div className="logo">
                <i className="fab fa-instagram"></i>
                <span className="logoText">Instagram</span>
            </div>
            <div className="SearchBar">
                <form>
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
};

export default SearchBar;