import React, { Component } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Contactus from './Contactus'

export default class Contactform extends Component {
  render() {
    return (
      <>
      <Container maxWidth="sm">
        <Box>
          <h2>Contact Me</h2>
          <Contactus />
        </Box>
      </Container>
      </>
    )
  }
}
