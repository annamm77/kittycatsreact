import React, { Component } from 'react';
import './Cat.css';
import Profile from './Profile/Profile'
import Options from './Options/Options'

class Cat extends Component {
  render() {
    return (
      <div className="Cat">
        <h1>I am the cat container.</h1>
        <Profile />
        <Options />
      </div>
    );
  }
}

export default Cat;
