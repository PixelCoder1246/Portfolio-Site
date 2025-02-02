import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [dropdownHidden, setdropdownHidden] = useState(true);
  const [hideAnimated, setHideAnimated] = useState(true);
  const timeoutRef = useRef(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("Navbar Rendered");
  })

  const handleAnimationOpen = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setdropdownHidden(false);
    setHideAnimated(false);
  };

  const handleAnimationClose = () => {
    setHideAnimated(true);
    timeoutRef.current = setTimeout(() => {
      setdropdownHidden(true);
      timeoutRef.current = null;
    }, 200);
  };

  const handleNavClick = () => {
    setOpen(!open);
  }


  return (
    <div className="navbar">
      <div className="navbar-logo">
        {/* <img src={logo} alt="website logo" /> */}
        <span>KESHAV</span>
      </div>
      <div className="main-nav">
        <ul className={`nav-list ${open ? "" : ""} ${open ? "active" : ""} `}>
          <li className="nav-items">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-items">
            <Link to="/about">Contact</Link>
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
            {!dropdownHidden && (
              <div
                className={`nav-dropdown ${hideAnimated ? 'hideAnimation' : 'showAnimation'
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
      <div className={`burgerIcon ${open? "rotate": ""}`} onClick={handleNavClick}>
        {open ? <IoCloseOutline /> : <RxHamburgerMenu />}
      </div>
    </div>
  );
};

export default memo(Navbar);
