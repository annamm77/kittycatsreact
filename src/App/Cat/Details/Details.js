import React, { Component } from 'react';
import './Details.css';

class Details extends Component {
  render() {
    return (
    <div className="detailswrapper">
      <img src={this.props.currentCat["image"]} alt="current cat" className="detailsimg" />

      <p className="generalinfo">
        Name: {this.props.currentCat["name"]}
        Age: {this.props.currentCat["age"]}
        Sex: {this.props.currentCat["sex"]}
        Breed: {this.props.currentCat["breed"]}
      </p>

      <p className="description">
        {this.props.currentCat["description"]}
      </p>

      <p className="contactinfo">
        {this.props.currentCat["address"]}
        {this.props.currentCat["city"]}
        {this.props.currentCat["state"]}
        {this.props.currentCat["zip"]}
        {this.props.currentCat["phone"]}
        {this.props.currentCat["email"]}
      </p>
    </div>
    );
  }
}

export default Details;
