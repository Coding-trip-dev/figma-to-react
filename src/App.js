import logo from "./logo.svg";
import "./App.css";
// import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/About";
import Scroll from "./Components/Home/scroltest";

import "bootstrap/dist/css/bootstrap.min.css";

import SanityMuxPlayer from "sanity-mux-player";
import sanityClient from "./sanity/client";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "videoBlogPost"]{
          title,
      video{
        asset{
          _ref,
        }
      },
    }`
      )
      .then((data) => console.log(data))
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h3>Some Heading</h3>
      {/* <SanityMuxPlayer
        assetDocument={videoDoc}
        autoload={true}
        autoplay={false}
        showControls={true}
      /> */}
    </div>
  );
}

export default App;
