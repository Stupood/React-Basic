import React from 'react'
import { Link } from 'react-router'
import './navbar.css'

export default function Navbar(){
  return (
    <nav className='navbar'>
    <div className='nav container'>
      <p className='nav logo'>Logo</p>
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/report">Report</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}
