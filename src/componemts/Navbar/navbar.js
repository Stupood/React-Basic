import React from 'react'
import { Link } from 'react-router'
import './navbar.css'
import { useDataContext } from '../context/context'

export default function Navbar(){
  const {dispatch} = useDataContext()
  return (
    <nav className='navbar'>
    <div className='nav container'>
      <p className='nav logo'>Logo</p>
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          {/* <Link to="/report" onClick={()=>dispatch({type:"NAVIGATE"})}>Report</Link> */}
          <Link to="/report">Report</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}
