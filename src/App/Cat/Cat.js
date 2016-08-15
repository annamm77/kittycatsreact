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
      searchResults: "loading",
      showDetails: false
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

  seeDetails: function () {
    this.setState({showDetails: true})
  },

  render() {
    // return (
      if (!this.state.showDetails){
        return <div className="cat">
          <Profile
            name={this.state.searchResults[this.state.currentCat]["name"]}
            image={<img src={this.state.searchResults[this.state.currentCat]["image"]} alt="current cat" />}
          />
          <Options onNextClick={this.handleNextCat} />

          <button onClick={this.seeDetails}>hi</button>
        </div>
      }
      // loaded, you can use this.state.data here
        return <div className="cat">
          <Details currentCat={this.state.searchResults[this.state.currentCat]}/>
        </div>
      }
})

export default Cat;
