import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div className="profilewrapper">
          <img src={this.props.currentCat["image"]} alt="current cat" className="profileimg" />
        </div>
        <p className="catname">{this.props.currentCat["name"]}</p>
      </div>
    );
  }
}

export default Profile;
