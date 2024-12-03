// src/app/components/HamburgerMenu.jsx

'use client'; // Damit wird sichergestellt, dass diese Komponente im Client gerendert wird

import React, { useState } from 'react';
// import styles from './xxxxxxx.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className={`hamburger-btn ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
