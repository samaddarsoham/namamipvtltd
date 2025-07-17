import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  const contactPersons = [
    {
      name: "Mr. Vineet Fatehpuria",
      phone: "+91 9831275519",
      role: "Director"
    },
    {
      name: "Mr. Suresh Aggarwal",
      phone: "+91 9830968432",
      role: "Manager"
    },
    {
      name: "Akash",
      phone: "+91 9330410543",
      role: "Sales Executive"
    }
  ]

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-page__container">
        <motion.div 
          className="contact-page__header"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="contact-page__title">Contact Us</h1>
          <p className="contact-page__subtitle">Get in Touch with Our Expert Team</p>
        </motion.div>

        <div className="contact-page__content">
          <div className="contact-info">
            <motion.div 
              className="contact-section"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3>Our Team</h3>
              <div className="contact-persons">
                {contactPersons.map((person, index) => (
                  <motion.div 
                    key={index}
                    className="contact-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    <h4>{person.name}</h4>
                    <p className="contact-role">{person.role}</p>
                    <a href={`tel:${person.phone}`} className="contact-phone">{person.phone}</a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="contact-section"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h3>Contact Information</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <h4>Email</h4>
                  <p><a href="mailto:namamiplyboard09@yahoo.com">namamiplyboard09@yahoo.com</a></p>
                  <p><a href="mailto:namamiplyboardsprivatelimited@gmail.com">namamiplyboardsprivatelimited@gmail.com</a></p>
                </div>

                <div className="contact-item">
                  <h4>Address</h4>
                  <p>Choudhary Towers, 42 Andul Road</p>
                  <p>Hanskali Pool, Bakultala</p>
                  <p>Howrah – 711009</p>
                  <p>West Bengal, India</p>
                </div>

                <div className="contact-item">
                  <h4>Social Media</h4>
                  <p>
                    <a href="https://linkedin.com/company/namami-plyboard-pvt-ltd" target="_blank" rel="noopener noreferrer">
                      LinkedIn: Namami Plyboard Pvt. Ltd.
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="contact-map"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3>Find Us</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1234567890123!2d88.2876543210987!3d22.6123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM2JzQ0LjQiTiA4OMKwMTcnMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Namami Plyboard Location"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            className="contact-page__cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <h3>Ready to Start Your Project?</h3>
            <p>Explore our premium CenturyPly products and find the perfect solution for your needs.</p>
            <div className="contact-cta-buttons">
              <Link to="/products" className="btn btn--primary btn--large">
                View Our Products
              </Link>
              <Link to="/about" className="btn btn--secondary btn--large">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
