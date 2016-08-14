import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <img src={this.props.pic} alt="current cat" />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Profile;
