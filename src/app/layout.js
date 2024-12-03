// app/layout.js

'use client'; // Füge diese Zeile hinzu, um die Komponente als Client-Komponente zu kennzeichnen.

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import Preload from './components/Preload/Preload';
import './styles/aboutme-page.css';
import './fonts/fonts.css';
import './styles/cardgrid.css';
import './styles/globals.css';
import './styles/home-page.css';
import './styles/viewsinglecard.css';


export default function Layout({ children, enablePreloader = false }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }

    if (!isAppLoaded) {
      setTimeout(() => setIsAppLoaded(true), 5000);
    }
  }, [isAppLoaded]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newState = !prev;
      localStorage.setItem('darkMode', newState);
      return newState;
    });
  };

  return (
    <html lang="de">
      <body className={isDarkMode ? 'dark-mode' : ''}>
        {enablePreloader && !isAppLoaded && <Preload onLoaded={() => setIsAppLoaded(true)} />}

        <Cursor />
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
