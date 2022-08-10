import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <ul className='navbar-container'>
                <li className='items' id='h'>Home</li>
                <li className='items' id='a'>About Me</li>
                <li className='items' id='p'>Project</li>
                <li className='items' id='c'>Contact Me</li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar