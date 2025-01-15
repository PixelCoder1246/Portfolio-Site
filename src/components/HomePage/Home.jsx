import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../Navbar';
import './Home.css';
import TypingEffect from './TypingEffect/TypingEffect';

const Home = () => {

  // const ErrorComponent = () => {
  //   throw new Error("An intentional error!");
  // };

  return (
    <>
    
      <div className="home-container">
        {/* <ErrorComponent /> */}
        <Navbar />
        <div className="home-h1">
          <h1 style={{textAlign : "center"}}>
            <TypingEffect fullText="Hi, My Name is Keshav" typingSpeed={200} />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
