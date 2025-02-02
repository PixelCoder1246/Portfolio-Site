import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./GSAPBG.css";

const GSAPBG = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".whole-area", {
      scrollTrigger: {
        trigger: ".whole-area",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
        onEnter:() => {gsap.set(".whole-area", {backgroundAttachment: "fixed", backgroundSize: "cover"})},
        onLeave :() => {gsap.set(".whole-area", {backgroundAttachment: "fixed", backgroundSize:"cover"})},
        onEnterBack:() => {gsap.set(".whole-area", {backgroundAttachment: "fixed", backgroundSize:"cover"})},
        onLeaveBack:() => {gsap.set(".whole-area", {backgroundAttachment: "scroll", backgroundSize:"contain"})},
      },
      backgroundPosition: "0px -150px",
      ease: "power1.out",
    });

    
  }, []);

  return <div className="whole-area"></div>;
};

export default GSAPBG;