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

  handleDetails: function () {
    if (this.state.showDetails === false) {
      this.setState({showDetails: true})
    } else {
      this.setState({showDetails: false})
    }
  },

  render() {
    if (!this.state.showDetails){
      return <div className="cat">
        <Profile currentCat={this.state.searchResults[this.state.currentCat]}/>
        <Options onNextClick={this.handleNextCat} onDetailsClick={this.handleDetails} buttonText="Profile View" />
      </div>
    }

    return <div className="cat">
      <Details currentCat={this.state.searchResults[this.state.currentCat]} onDetailsClick={this.handleDetails}/>
      <Options onNextClick={this.handleNextCat} onDetailsClick={this.handleDetails} buttonText="Picture View" />
    </div>
  }
})

export default Cat;
