import React from 'react';
import './Cat.css';
import Profile from './Profile/Profile'
import Options from './Options/Options'
import Details from './Details/Details'
import $ from 'jquery';

var Cat = React.createClass ({
  getInitialState: function() {
    return {
      currentCat: 0,
      searchResults: "cats go here"
    };
  },

  componentDidMount(){
   this.getCats();
  },

  getCats: function(){
    $.ajax({
      type: "GET",
      url: "http://localhost:1337/cats",
      success: function(response){
        this.updateState(response);
      }.bind(this)
    });
  },

  updateState: function(response){
    this.setState({
        searchResults: response
    })
  },

  handleNextCat: function() {
    var nextCat = this.state.currentCat + 1
    this.setState({currentCat: nextCat});
  },

  render() {
    return (
      <div className="Cat">
        <Profile
          name={this.state.searchResults[this.state.currentCat]["name"]}
          image={<img src={this.state.searchResults[this.state.currentCat]["image"]} alt="current cat" />}
          />
        <Options
          onNextClick={this.handleNextCat} />
      </div>
    );
  }
})

export default Cat;
