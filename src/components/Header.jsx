import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="header-title">Sentimail</div>
      <nav className="header-nav">
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
          <li><NavLink to={"/profile"}>Profile</NavLink></li>
          <li><NavLink to={"/feedback"}>Feedback</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
