import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <img src="https://placekitten.com/g/500/300" />
        <p>Cat Name</p>
      </div>
    );
  }
}

export default Profile;
