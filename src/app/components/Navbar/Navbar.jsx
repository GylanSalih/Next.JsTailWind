'use client'; // Diese Direktive stellt sicher, dass die Datei als Client-Komponente behandelt wird.

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';  // Verwende `next/navigation` für den App-Router
import Link from 'next/link';
import styles from './Navbar.css';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const router = useRouter();  // Verwende den `useRouter` Hook von `next/navigation`

  const handleScroll = () => {
    if (window.scrollY > 35) {
      setIsSticky(true);
      if (!hasScrolled) {
        setHasScrolled(true);
      }
    } else {
      setIsSticky(false);
      setHasScrolled(false);
    }
  };

  const handleDarkModeToggle = () => {
    toggleDarkMode();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (path) => {
    document.documentElement.scrollTop = 0;
  };

  const logo = isDarkMode ? '/assets/img/logo/logo_white.png' : '/assets/img/logo/logo_black.png';

  return (
    <header
      className={`navbar 
                  ${isSticky ? 'sticky' : ''} 
                  ${isSticky && isDarkMode ? 'dark-mode' : ''} 
                  ${isSticky && !isDarkMode ? 'light-mode' : ''} 
                  ${hasScrolled ? '' : 'no-transition'}
                  `}
    >
      <div className="navbar-container">
        <div className="logo">
          <Link href="/" passHref>
            <img
              src={logo}
              alt={isDarkMode ? 'Dark Mode Logo' : 'Light Mode Logo'}
            />
          </Link>
        </div>

        <nav className="nav-links">
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" passHref>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div className="darkmode-toggle">
          <button onClick={handleDarkModeToggle}>
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
