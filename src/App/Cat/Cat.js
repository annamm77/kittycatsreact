import React from 'react';
import './Cat.css';
import Profile from './Profile/Profile'
import Options from './Options/Options'

var Cat = React.createClass ({
  getInitialState: function() {
    return {currentCat: 0};
  },

  handleNextCat: function() {
    var nextCat = this.state.currentCat + 1
    this.setState({currentCat: nextCat});
  },

  render() {
    return (
      <div className="Cat">
        <h1>I am the cat container.</h1>
        <Profile />
        <Options />
        <button onClick={this.handleNextCat}>Change the cat</button>
        {this.state.currentCat}
      </div>
    );
  }
})

export default Cat;
