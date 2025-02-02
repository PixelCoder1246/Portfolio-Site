import React from 'react'
import Navbar from '../Navbar'
import Background from '../Background'

const About = ({bg = 1}) => {
  return (
    <div>
      <Background bg = {bg}/>
      <Navbar/>
    </div>
  )
}

export default About
