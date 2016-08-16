import React, { Component } from 'react';
import './Details.css';

class Details extends Component {
  render() {
    return (
    <div className="detailswrapper">
      <img src={this.props.currentCat["image"]} alt="current cat" className="detailsimg" />

      <ul className="generalinfo">
        <li className="bigname">Name: {this.props.currentCat["name"]}</li>
        <li>Age: {this.props.currentCat["age"]}</li>
        <li>Sex: {this.props.currentCat["sex"]}</li>
        <li>Breed: {this.props.currentCat["breed"]}</li>
      </ul>

      <p className="description">
        {this.props.currentCat["description"]}
      </p>

      <ul className="contactinfo">
        <li>{this.props.currentCat["address"]}, {this.props.currentCat["city"]}, {this.props.currentCat["state"]} {this.props.currentCat["zip"]}</li>
        <li>{this.props.currentCat["phone"]} or {this.props.currentCat["email"]}</li>
      </ul>
    </div>
    );
  }
}

export default Details;
