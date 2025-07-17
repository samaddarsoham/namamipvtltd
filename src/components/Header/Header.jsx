import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.header 
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header__container">
        <Link to="/" className="header__logo">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="logo__text">Namami Plyboard</h1>
            <span className="logo__subtitle">Premium CenturyPly Distributor</span>
          </motion.div>
        </Link>

        <nav className="header__nav">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.name} className="nav__item">
                <Link 
                  to={item.path} 
                  className={`nav__link ${location.pathname === item.path ? 'nav__link--active' : ''}`}
                >
                  {item.name}
                  <span className="nav__link-underline"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'mobile-menu-toggle--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
          <ul className="mobile-nav__list">
            {navItems.map((item) => (
              <li key={item.name} className="mobile-nav__item">
                <Link 
                  to={item.path} 
                  className="mobile-nav__link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
