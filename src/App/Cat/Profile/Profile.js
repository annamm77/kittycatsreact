import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        {this.props.image}
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Profile;
