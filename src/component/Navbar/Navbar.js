import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <nav>
         <div className='head'>Portfolio</div>
        <ul>
            <Link to="/" className='navitem'> About</Link>
            <Link to="/projects" className='navitem'>Experience</Link>
            <Link to="/about" className='navitem'>Work</Link>
            <Link to="/contact" className='navitem'>Contact</Link>
            <Link to="#" className='navitem'>Resume</Link>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
