import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { InputLabel } from '@mui/material';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v8r55el', 'template_h1eu8jd', form.current, 'hThoRugJLEbVPDfY-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <InputLabel>Name</InputLabel>
      <TextField margin="normal" fullWidth id="name" label="Enter Name" variant="outlined" name="user_name" required />
      <InputLabel>Email</InputLabel>
      <TextField margin="normal" fullWidth id="email" label="Enter Email" variant="outlined" type="email" name="user_email" required />
      <InputLabel>Message</InputLabel>
      <TextField margin="normal" rows={4} multiline fullWidth id="message" label="Message" variant="outlined" name="message" required />
      <Button variant="contained" type="submit">Send</Button>
    </form>
  );
};

export default ContactUs