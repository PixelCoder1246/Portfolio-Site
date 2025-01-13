import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';

const Navbar = () => {
  const [hidden, setHidden] = useState(true);
  const [hideAnimated, setHideAnimated] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    console.log("Navbar Rendered");
  })

  const handleAnimationOpen = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHidden(false);
    setHideAnimated(false);
  };

  const handleAnimationClose = () => {
    setHideAnimated(true);
    timeoutRef.current = setTimeout(() => {
      setHidden(true);
      timeoutRef.current = null;
    }, 200);
  };

  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  }

  

  return (
    <div className="navbar">
      <div className="navbar-logo">
        {/* <img src={logo} alt="website logo" /> */}
        <span>Sanchit</span>
      </div>
      <div className="main-nav">
        <ul className="nav-list">
          <li className="nav-items">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-items">
            <Link to="/about">Contact</Link>
          </li>
          <li className="nav-items">
            <Link to="">Portfolio</Link>
          </li>
          <li className="nav-items">
            <Link to="">Resume</Link>
          </li>
          <li className="nav-items">
            <Link to="">Team</Link>
          </li>
          <li className="nav-items">
            <Link to="">Blog</Link>
          </li>
          <li
            className="nav-items dropdown-container"
            onMouseEnter={handleAnimationOpen}
            onMouseLeave={handleAnimationClose}
          >
            <div className="dropdown-title">
              <Link to="">About</Link>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            {!hidden && (
              <div
                className={`nav-dropdown ${
                  hideAnimated ? 'hideAnimation' : 'showAnimation'
                }`}
              >
                <ul className="nav-dropdown-list">
                  <li className="nav-dropdown-items">Me</li>
                  <li className="nav-dropdown-items">My Team</li>
                </ul>
              </div>
            )}
          </li>
          <li className="nav-items">
            <Link to="">Services</Link>
          </li>
          <li className="nav-items">
            <Link to="">Get Started</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(Navbar);
