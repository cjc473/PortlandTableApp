import React from "react";
import Logo from "./logo";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa"

const Navbar = ({ currentUser, logout, openModal }) => {

  return (
    <div>
      <div className="grey-top"></div>
      <div className="navbar-container">
        <Logo />
        {currentUser ? (
          <div id="logout-button-container" className="sessionButtons">
            <div id="logout-spacer"><Link to="/profile"><FaUserAlt fontSize="36" id="profile-img"/></Link></div>
            <button id="logout-button" onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="sessionButtons">
            <button id="signup-button" onClick={() => openModal('signup')}>Sign up</button>
            <button id="login-button" onClick={() => openModal('login')}>Sign in</button>
          </div>
        )}
      </div>
    </div>

  )
    
}

export default Navbar;





