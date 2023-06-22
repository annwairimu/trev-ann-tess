import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './navbar.css'

function NavBar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button className="contact-button">Lets Connect</button>
        </div>
      </nav>
      <div className="hero">
        <h1>Welcome to TrevAnnTess</h1>
        <p>Company That Delivers</p>
      </div>
    </header>
  )
}

export default NavBar