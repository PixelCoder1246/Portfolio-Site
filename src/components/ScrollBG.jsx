import React, { useEffect, useState } from 'react';
import "./ScrollBG.css";
import scrollbg from "../../src/assets/scroll-bg.png";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const ScrollBG = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".scroll-img", {
      scrollTrigger:
      {
        trigger: ".scroll-area",
        markers: true,
        toggleActions: "play complete complete complete",
        start: "70px top",
        end: "4140px bottom",
      },
      position: "fixed",
      top: 0,
      left: 0,
    })
  }, [])
  // const [isFixed, setIsFixed] = useState(false);
  // const [pos, setPos] = useState("top");
  // const [scroll, setScroll] = useState("");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     if (scrollY >= 165 && scrollY <= 4140) {
  //       setIsFixed(true);
  //     } else {
  //       setIsFixed(false);
  //     }
  //     if (scrollY > 4140) {
  //       setPos("bottom");
  //     } else if(scrollY < 165){
  //       setPos("top");
  //     }

  // if(scrollY >= 180 && scrollY <= 4100) {
  //   if(scrollY >= 180 && scrollY <= 960) {
  //     setScroll("first");
  //   }
  //   if(scrollY > 960 && scrollY <= 1740) {
  //     setScroll("second");
  //   }
  //   if(scrollY > 1740 && scrollY <= 2520) {
  //     setScroll("third");
  //   }
  //   if(scrollY > 2520 && scrollY <= 3300) {
  //     setScroll("fourth");
  //   }
  //   if(scrollY > 3300 && scrollY <= 4100) {
  //     setScroll("fifth");
  //   }
  // }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="scroll-area">
      <img
        src={scrollbg}
        alt=""
        // className={`scroll-img ${pos} ${isFixed ? "fixed" : ""}`}
        className='scroll-img'
      />
    </div>
  );
};

export default ScrollBG;
