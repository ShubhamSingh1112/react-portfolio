import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="">
        <Link className="" to="/">Home</Link>
        <Link className="" to="/About">About</Link>
        <Link className="" to="/Portfolio">Portfolio</Link>
        <Link className="" to="/Contact">Contact</Link>
      </div>
    )
  }
}
