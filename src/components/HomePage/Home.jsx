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
          <h1>
            <TypingEffect fullText="I am a Full Stack Web Developer" typingSpeed={100} />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
