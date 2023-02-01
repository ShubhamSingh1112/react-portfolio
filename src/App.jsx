import React from 'react';
// import Button from '@mui/material/Button';
import { Routes, Route } from "react-router-dom";
import Navbar from '../src/components/Navbar';
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Portfolio from "../src/pages/Portfolio";
import Contact from "../src/pages/Contact";


function App() {
  return (
    <div className="App">
      {/* <Button variant="contained">Hello World</Button> */}
      <Navbar variant="contained" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default App
