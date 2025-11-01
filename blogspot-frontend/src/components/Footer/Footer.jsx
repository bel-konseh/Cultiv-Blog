
import './Footer.css'
import { Link } from 'react-router-dom'
import React from 'react'

function Footer() {
  return (
    <div>
      <footer>
        <div className="logo-box">
          <h1 className='cultiv'> Cultiv</h1>
          <p className='copy'>Copyright &copy; 2025</p>
        </div>
        {/* <div className="right-box"> */}
          <div>
            <h2>About</h2>
            <ul className=" ul-footer about">
            
                <li><Link to={"/about"}>About</Link></li>
                <li>Services</li>
                <li>Team</li>
            </ul>
          </div>
          <div>
            <h2>Services</h2>
            <ul className="services ul-footer">
              <li>Help</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h2>Contact</h2>
            <ul className="services ul-footer">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Email</li>
            </ul>
          </div>
        {/* </div> */}
      </footer>
    </div>
  )
}

export default Footer