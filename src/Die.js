import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numWords : ["one", "two", "three", "four", "five", "six"],
    val : 5
  };

  render() {
    let {numWords, val, locked, disabled, rolling} = this.props;

    let classes = `Die fas fa-dice-${numWords[val - 1]} fa-5x `;
    if(locked) classes += 'Die-locked';
    if(rolling) classes += 'Die-rolling';

    return (
      <i
        className={classes}
        onClick={() => this.props.handleClick(this.props.idx)}
        disabled = {disabled}
      />
    );
  }
}

export default Die;
