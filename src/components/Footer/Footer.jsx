import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer mobile-center-all">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">Namami Plyboard Pvt. Ltd.</h3>
            <p className="footer__description">
              Leading CenturyPly distributor in Eastern India, trusted by leading builders and industries since 2009.
            </p>
            <div className="footer__social">
              <a href="https://linkedin.com/company/namami-plyboard-pvt-ltd" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/about" className="footer__link">About Us</Link></li>
              <li><Link to="/products" className="footer__link">Products</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Contact Info</h4>
            <div className="footer__contact">
              <p>Choudhary Towers, 42 Andul Road</p>
              <p>Hanskhali Pool, Bakultala</p>
              <p>Howrah – 711109</p>
              <div className="footer__contact-group">
                <p className="footer__phone">+91 9831275519</p>
                <p className="footer__phone">+91 9830968432</p>
              </div>
              <div className="footer__contact-group">
                <p className="footer__email">namamiplyboard09@yahoo.com</p>
              </div>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Our Clients</h4>
            <div className="footer__clients">
              <span>Jindal</span>
              <span>IFB</span>
              <span>Shapoorji Pallonji</span>
              <span>Siddha Group</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © 2024 Namami Plyboard Pvt. Ltd. All rights reserved.
            </p>
            <p className="footer__tagline">
              Royal Club Member of CenturyPly
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
