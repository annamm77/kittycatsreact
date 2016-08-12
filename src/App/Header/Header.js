import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="headertitle">Seattle Shelter Cats</h1>
        <a href="/signup">Sign Up/Log In</a>
        <a href="/favorites">My Favorites</a>
      </div>
    );
  }
}

export default Header;
