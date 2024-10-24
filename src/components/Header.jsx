import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="header-title">Sentimail</div>
      <nav className="header-nav">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/dashboard"}>Dashboard</Link></li>
          <li><Link to={"/profile"}>Profile</Link></li>
          <li><Link to={"/help"}>Help</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
