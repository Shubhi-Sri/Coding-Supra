import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='Nav-Bar'>
            <div>
            <p>Coding Supra</p>
            </div>
            <div className='nav-right'>
          <ul className='Navigation'>
            <li><a href="/">Home</a></li>
            <li><a href="/learn">Learn</a></li>
            <li><a href="/placement">Placement-Prep</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/about">About</a></li>
          </ul>
          </div>
        </div>
    )
}

export default NavBar;