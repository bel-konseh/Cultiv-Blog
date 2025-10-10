import {Link, NavLink} from 'react-router-dom'
import './Header.css'

import React from 'react'

function Header() {
  return (
    <div className="header-container">
      <div className="logo-box"> 
        <span><span className='span'>Cultiv</span> Reads</span>
        <p>ARTICLES THAT RESONATE WITH YOU</p>
      </div>
      <hr />
      <nav>
        
          <ul>
            <li><NavLink className={({ isActive }) => isActive ? 'active-tab' : 'nav-link'} to="/">HOME</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'active-tab' : 'nav-link'} to={"/contact"}> CONTACT </NavLink> </li>
            <li> <NavLink className={({ isActive }) => isActive ? 'active-tab' : 'nav-link'} to={"/about"}> ABOUT </NavLink></li>

            <li> <NavLink className={({ isActive }) => isActive ? 'active-tab' : 'nav-link'} to={"/profile"}> PROFILE</NavLink></li>
            <li> <NavLink className={({ isActive }) => isActive ? 'active-tab' : 'nav-link'} to={"/login"}> LOGIN</NavLink></li>
            <li> <NavLink className={({ isActive }) => isActive ? 'active-tab' : 'nav-link'} to={"/signup"}> SIGNUP</NavLink></li>
          </ul>
          
      </nav>
      <hr />
    </div>
  )
}

export default Header