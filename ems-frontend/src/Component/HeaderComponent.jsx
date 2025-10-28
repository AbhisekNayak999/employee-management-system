// import React from 'react'

// const HeaderComponent = () => {
//   return (
//     <div>
//       <header>
//         <nav className="navbar navbar-expand-lg navbar-dark gradient-navbar shadow-lg">
//           <a className="navbar-brand mx-auto fw-bold fs-4" href='/home'>
//              Employee Management System
//           </a>
//         </nav>
//       </header>
//     </div>
//   )
// }

// export default HeaderComponent

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // 🔒 Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark gradient-navbar shadow-lg px-4 py-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          
          {/* === Left: EMS Logo + Title === */}
          <Link
            to="/home"
            className="navbar-brand fw-bold fs-4 d-flex align-items-center"
            onClick={() => setIsOpen(false)}
          >
            <span className="bg-light text-dark rounded-circle px-3 py-2 me-2 shadow-sm">
              EMS
            </span>
            <span>Employee Management System</span>
          </Link>

          {/* === Right: Hamburger Menu === */}
          <div
            className="menu-toggle position-relative"
            ref={menuRef}
            // onMouseEnter={() => setIsOpen(true)}
            // onMouseLeave={() => setIsOpen(false)}
          >
            <div
              className="hamburger-lines"
              onClick={() => setIsOpen(!isOpen)} // Toggle on click
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>

            {/* Dropdown Menu (visible only when isOpen = true) */}
            {isOpen && (
              <div className="dropdown-menu show shadow rounded-3 mt-2 p-3 bg-white position-absolute end-0">
                <Link
                  to="/home"
                  className="dropdown-item fw-semibold text-dark"
                  onClick={() => setIsOpen(false)}
                >
                  🏠 Home
                </Link>
                <Link
                  to="/employee"
                  className="dropdown-item fw-semibold text-dark"
                  onClick={() => setIsOpen(false)}
                >
                  👥 Employee Directory
                </Link>
                <Link
                  to="/add-employee"
                  className="dropdown-item fw-semibold text-dark"
                  onClick={() => setIsOpen(false)}
                >
                  ➕ Add Employee
                </Link>
                <Link
                  to="/owner"
                  className="dropdown-item fw-semibold text-dark"
                  onClick={() => setIsOpen(false)}
                >
                  👨‍💻 About Developer
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
