

import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import React, { useEffect, useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  useEffect(()=>{
    
  },[token])
  return (
    <div className="header-container">
      <div className="logo-box">
        <span>
          <span className="span">Cultiv</span> Reads
        </span>
        <p className="head-subtitle">Articles that resonate with you.</p>
      </div>
      <hr />

      {/* Hamburger Button */}
      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "nav-open" : ""}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-tab" : "nav-link")}
              to="/"
              onClick={closeMenu}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-tab" : "nav-link")}
              to="/contact"
              onClick={closeMenu}
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-tab" : "nav-link")}
              to="/about"
              onClick={closeMenu}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-tab" : "nav-link")}
              to="/profile"
              onClick={closeMenu}
            >
              PROFILE
            </NavLink>
          </li>
          {!token &&(
            <>
            <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-tab" : "nav-link")}
              to="/login"
              onClick={closeMenu}
            >
              LOGIN
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-tab" : "nav-link")}
              to="/signup"
              onClick={closeMenu}
            >
              SIGNUP
            </NavLink>
          </li>
            </>
          )}
          <li>
            {token &&(
              <NavLink
              className={({ isActive }) => (isActive ? "active-tab" : "nav-link")}
              to="/signup"
              onClick={()=>{
                closeMenu();
                localStorage.removeItem("token");
                navigate("/signup");
              }}
            >
              LOGOUT
            </NavLink>
            )}
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default Header;
