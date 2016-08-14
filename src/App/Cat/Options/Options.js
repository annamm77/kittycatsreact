import React, { Component } from 'react';
import './Options.css';

class Options extends Component {
  render() {
    return (
      <div className="Options">
        <button onClick={this.props.onNextClick}>Next</button>
      </div>
    );
  }
}

export default Options;
