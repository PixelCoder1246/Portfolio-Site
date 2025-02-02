import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../Navbar';
import './Home.css';
import TypingEffect from './TypingEffect/TypingEffect';
import Background from '../Background';
import ScrollBG from '../ScrollBG';
import GSAPBG from "../../components/HomePage/gsapEffects/GSAPBG"



const Home = ({ bg = 0 }) => {

  // const ErrorComponent = () => {
  //   throw new Error("An intentional error!");
  // };

  return (
    <>
      {/* <Background  bg = {bg} /> */}
        <div className="home-container">
          {/* <ErrorComponent /> */}
          <Navbar />
          <div className="home-h1">
            <h1 style={{ textAlign: "center" }}>
              <TypingEffect fullText="Hi, My Name is Keshav" typingSpeed={200} />
            </h1>
          </div>
          {/* <ScrollBG /> */}
          <GSAPBG />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
          <Navbar />
        </div>
    </>
  );
};

export default Home;
