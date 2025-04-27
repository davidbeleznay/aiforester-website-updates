import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll event to change header style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return router.pathname === path ? styles.active : '';
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <a className={styles.logo}>
              AI Forester
            </a>
          </Link>
        </div>

        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.navigation} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li>
              <Link href="/">
                <a className={isActive('/')}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={isActive('/about')}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className={isActive('/services')}>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className={isActive('/projects')}>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className={isActive('/blog')}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={isActive('/contact')}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}