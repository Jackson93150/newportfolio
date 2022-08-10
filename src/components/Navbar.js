import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <a href='#' >Home</a>
            <a href='#' >About Me</a>
            <a href='#' >Project</a>
            <a href='#' >Contact Me</a>
            <div className='animation start-home'></div>
        </nav>
    </>
  )
}
export default Navbar