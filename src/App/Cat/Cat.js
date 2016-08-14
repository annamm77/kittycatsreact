import React from 'react';
import './Cat.css';
import Profile from './Profile/Profile'
import Options from './Options/Options'

var Cat = React.createClass ({
  getInitialState: function() {
    return {
      currentCat: 0,
      searchResults: []
    };
  },

  handleNextCat: function() {
    var nextCat = this.state.currentCat + 1
    this.setState({currentCat: nextCat});
  },

  getCats: function(){
      $.ajax({
          type: "GET",
          dataType: 'jsonp',
          url: "http://localhost:1337/cats",
          success: function(response){
              this.showResults(response);
          }.bind(this)
      });
  },

  showResults: function(response){
    console.log(response)
    this.setState({
        searchResults: response.results
    })
  },

  componentDidMount(){
   this.getCats();
  },

  render() {
    return (
      <div className="Cat">
        <h1>I am the cat container.</h1>
        <Profile />
        <Options onNextClick={this.handleNextCat} />
        Current Cat = {this.state.currentCat}
      </div>
    );
  }
})

export default Cat;
