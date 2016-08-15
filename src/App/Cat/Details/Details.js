import React, { Component } from 'react';
import './Details.css';

class Details extends Component {
  render() {
    return (
      <div className="Details">
        {this.props.currentCat["id"]}
        {this.props.currentCat["name"]}
        {this.props.currentCat["age"]}
        {this.props.currentCat["sex"]}
        {this.props.currentCat["breed"]}
        {this.props.currentCat["shelterid"]}
        {this.props.currentCat["description"]}
        {this.props.currentCat["image"]}
        {this.props.currentCat["address"]}
        {this.props.currentCat["city"]}
        {this.props.currentCat["state"]}
        {this.props.currentCat["zip"]}
        {this.props.currentCat["phone"]}
        {this.props.currentCat["email"]}
      </div>
    );
  }
}

export default Details;
