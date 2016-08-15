import React, { Component } from 'react';
import './Options.css';

class Options extends Component {
  render() {
    return (
      <div className="options">
        <button onClick={this.props.onNextClick}>Next</button>
        <button onClick={this.props.onDetailsClick}>Details</button>
      </div>
    );
  }
}

export default Options;
