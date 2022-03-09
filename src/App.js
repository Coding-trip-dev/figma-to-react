import logo from './logo.svg';
import './App.css';
// import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Components/Home/Home';
import About from "./Components/AboutUs/About";
import Scroll from "./Components/Home/scroltest";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/about" element={<About />} exact={true} />
          <Route path="/Scroll" element={<Scroll />} exact={true} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
