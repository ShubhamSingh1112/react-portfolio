import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';

export default class Navbar extends Component {
  render() {
    return (
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          backgroundColor: 'primary.dark',
          flexGrow: 1,
          display: 'flex'
        }}
      >
        <Box sx={{ p: 1 }}>
          <Link className="" to="/">Home</Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link className="" to="/About">About</Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link className="" to="/Portfolio">Portfolio</Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link className="" to="/Contact" sx={{ p: 1 }}>Contact</Link>
        </Box>
      </Box>
    )
  }
}


