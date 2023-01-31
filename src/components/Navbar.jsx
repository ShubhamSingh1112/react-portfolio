import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';

export default class Navbar extends Component {
  render() {
    return (
        <Box
      sx={{
        width: '100%',
        height: 'auo',
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <Link className="" to="/">Home</Link>
        <Link className="" to="/About">About</Link>
        <Link className="" to="/Portfolio">Portfolio</Link>
        <Link className="" to="/Contact">Contact</Link>
      </Box>
    )
  }
}


