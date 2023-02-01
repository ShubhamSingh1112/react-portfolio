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
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ p: 1 }}>
          <Link className="light" to="/">Home</Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link className="light" to="/About">About</Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link className="light" to="/Portfolio">Portfolio</Link>
        </Box>
        <Box sx={{ p: 1 }}>
          <Link className="light" to="/Contact" sx={{ p: 1 }}>Contact</Link>
        </Box>
      </Box>
    )
  }
}


