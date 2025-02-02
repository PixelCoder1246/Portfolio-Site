import React from 'react'
import "./Background.css"
import { useState } from 'react'
import bg1 from "/src/assets/website-bg.gif"
import bg2 from "/src/assets/website-bg2.gif"

const Background = ({ bg }) => {


    return (
        <div >{bg == 0 && <img className='web-bg' src={bg1} alt="background 1" />
            ||
            bg == 1 && <img className='web-bg' src={bg2} alt="background 1" />
        }
        </div>
    )
}

export default Background
