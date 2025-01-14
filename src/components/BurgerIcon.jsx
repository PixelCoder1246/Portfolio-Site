import React, { useState, useRef } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import "./BurgerIcon.css";

const BurgerIcon = () => {
    const [Burgerhidden, setBurgerHidden] = useState(false);
    const [Crosshidden, setCrossHidden] = useState(true);
    const [cross, setCross] = useState(false);
    const burgerRef = useRef(null);
    const crossRef = useRef(null);

    const handleBurgerClick = () => {
        if (burgerRef.current) {
            burgerRef.current.classList.add("burgerCloseAnimation");
            burgerRef.current.addEventListener("animationend", () => {
                burgerRef.current.classList.remove("burgerCloseAnimation");
                setCrossHidden(!Crosshidden);
                setBurgerHidden(!Burgerhidden);
                crossRef.current.classList.add("crossOpenAnimation");
            }, { once: true });
        }
    };
    const handleCrossClick = () => {
        if (crossRef.current) {
            crossRef.current.classList.add("crossOpenAnimation");
            crossRef.current.addEventListener("animationend", () => {
                crossRef.current.classList.remove("crossOpenAnimation");
                setCrossHidden(!Crosshidden);
                setBurgerHidden(!Burgerhidden);
                burgerRef.current.classList.add("burgerCloseAnimation");
            }, { once: true });
        }
    };
    return (
        <div>
            {!Burgerhidden && (
                <div ref={burgerRef} style={{display : 'flex', justifyContent : 'center', alignItems : 'center', backgroundColor : "transparent"}} className='burger' onClick={handleBurgerClick}>
                    <RxHamburgerMenu  />
                </div>
            )}
            {!Crosshidden && (
                <div ref={crossRef} style={{display : 'flex', justifyContent : 'center', alignItems : 'center', backgroundColor : "transparent"}} className="cross" onClick={handleCrossClick}>
                    <IoCloseOutline />
                </div>
            )}
        </div>
    );
};

export default BurgerIcon;