import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-page__container">
        <motion.h1 
          className="about-page__title"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About Namami Plyboard
        </motion.h1>
        
        <motion.p 
          className="about-page__subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Your Trusted Partner in Premium Wood Solutions
        </motion.p>

        <div className="about-page__content">
          <motion.div 
            className="about-timeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="timeline-item">
              <div className="timeline-year">2008</div>
              <div className="timeline-content">
                <h3>Company Established</h3>
                <p>Founded with a vision to provide premium wood products to Eastern India</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h3>CenturyPly Partnership</h3>
                <p>Became an authorized distributor of CenturyPly products</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Royal Club Member</h3>
                <p>Achieved Royal Club Member status with CenturyPly</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Industry Recognition</h3>
                <p>Trusted OEM supplier to major industries including Jindal, IFB, and Crescent</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Leading Distributor</h3>
                <p>Supplying to top builders: Shapoorji Pallonji, Siddha, Solaris, and Alcove</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-page__cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link to="/products" className="btn btn--primary btn--large">
              Explore Our Products
            </Link>
            <Link to="/contact" className="btn btn--secondary btn--large">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
