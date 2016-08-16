import React, { Component } from 'react';
import './Options.css';

class Options extends Component {
  render() {
    return (
      <div className="options">
        <button className="btn" onClick={this.props.onPreviousClick}>Previous</button>
        <button className="btn" onClick={this.props.onDetailsClick}>{this.props.buttonText}</button>
        <button className="btn" onClick={this.props.onNextClick}>Next</button>
      </div>
    );
  }
}

export default Options;
