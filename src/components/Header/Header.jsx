import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)
  const location = useLocation()
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 20)
    }

    const handleClickOutside = (event) => {
      const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
      const mobileMenu = mobileMenuRef.current

      // Don't close if clicking on the toggle button (let the button handle it)
      if (mobileMenuToggle && mobileMenuToggle.contains(event.target)) {
        return
      }

      // Close if clicking outside the mobile menu
      if (mobileMenu && !mobileMenu.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  // Toggle mobile menu function
  const toggleMobileMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsMobileMenuOpen(prev => !prev)
  }

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '📋' },
    { name: 'Products', path: '/products', icon: '📦' },
    { name: 'Team', path: '/team', icon: '👥' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ]

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }

  const navItemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3 + (index * 0.1),
        ease: "easeOut"
      }
    }),
    hover: {
      y: -2,
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.header
      className={`header ${isScrolled ? 'header--scrolled' : ''} ${isMobileMenuOpen ? 'header--menu-open' : ''}`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="header__container">
        <Link
          to="/"
          className="header__logo"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <motion.div
            className="logo__container"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <div className="logo__image-wrapper">
              <img
                src="/background/logo.png"
                alt="Namami Plyboard Logo"
                className="logo__image"
              />
              <motion.div
                className="logo__glow"
                animate={{
                  opacity: isLogoHovered ? 1 : 0,
                  scale: isLogoHovered ? 1.2 : 1
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="logo__text-container">
              <motion.h1
                className="logo__text"
                animate={{
                  color: isLogoHovered ? 'var(--color-royal-gold)' : 'var(--color-deep-red)'
                }}
                transition={{ duration: 0.3 }}
              >
                Namami Plyboard
              </motion.h1>
              <span className="logo__subtitle">Leading CenturyPly Distributor</span>
            </div>
          </motion.div>
        </Link>

        <nav className="header__nav">
          <ul className="nav__list">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path
              return (
                <motion.li
                  key={item.name}
                  className="nav__item"
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  custom={index}
                >
                  <Link
                    to={item.path}
                    className={`nav__link ${isActive ? 'nav__link--active' : ''}`}
                  >
                    <span className="nav__link-text">{item.name}</span>
                    <motion.span
                      className="nav__link-underline"
                      initial={{ width: 0 }}
                      animate={{
                        width: isActive ? '100%' : '0%',
                        opacity: isActive ? 1 : 0
                      }}
                      whileHover={{
                        width: '100%',
                        opacity: 1
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="nav__link-bg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{
                        scale: 1,
                        opacity: 1,
                        transition: { duration: 0.2 }
                      }}
                    />
                  </Link>
                </motion.li>
              )
            })}
          </ul>
        </nav>

        <motion.button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'mobile-menu-toggle--open' : ''}`}
          onClick={toggleMobileMenu}
          onTouchEnd={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMobileMenuOpen}
          whileHover={{
            scale: 1.08,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
          whileTap={{
            scale: 0.92,
            transition: { duration: 0.1, ease: "easeInOut" }
          }}
        >
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 7 : 0,
              scaleX: isMobileMenuOpen ? 1.1 : 1
            }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
          />
          <motion.span
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1,
              x: isMobileMenuOpen ? -15 : 0,
              scaleX: isMobileMenuOpen ? 0.8 : 1
            }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: isMobileMenuOpen ? 0 : 0.1
            }}
          />
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -7 : 0,
              scaleX: isMobileMenuOpen ? 1.1 : 1
            }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
          />
        </motion.button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              className="mobile-menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.95,
                transition: { duration: 0.2 }
              }}
            >
              <div className="mobile-menu__backdrop" />
              <ul className="mobile-nav__list">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path
                  return (
                    <motion.li
                      key={item.name}
                      className="mobile-nav__item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.3,
                          delay: index * 0.1
                        }
                      }}
                      exit={{
                        opacity: 0,
                        x: -20,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Link
                        to={item.path}
                        className={`mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="mobile-nav__icon">{item.icon}</span>
                        <span className="mobile-nav__text">{item.name}</span>
                        {isActive && (
                          <motion.div
                            className="mobile-nav__indicator"
                            layoutId="mobile-indicator"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
