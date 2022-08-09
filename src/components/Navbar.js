import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <ul className='navbar-container'>
                <li className='items'>Home</li>
                <li className='items'>About Me</li>
                <li className='items'>Project</li>
                <li className='items'>Contact</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar