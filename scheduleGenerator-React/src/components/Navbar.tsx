import React from 'react';
//import { Home, Calendar, Info } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/api/placeholder/40/40" alt="Logo" className="logo-image" />
          <span className="company-name">MyCompany</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              {/**<Home className="nav-icon" size={18} />**/}
              Home
            </a>
          </li>
          <li>
            <a href="/schedule" className="nav-link">
              {/**<Calendar className="nav-icon" size={18} />**/}
              Schedule
            </a>
          </li>
          <li>
            <a href="/about" className="nav-link">
              {/**<Info className="nav-icon" size={18} />**/}
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;