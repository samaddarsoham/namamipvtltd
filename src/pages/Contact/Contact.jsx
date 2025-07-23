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
      role: "Director"
    },
    {
      name: "Akash",
      phone: "+91 9330410543",
      role: "Sales Executive"
    }
  ]

  return (
    <motion.div
      className="contact-page mobile-center-all"
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
                </div>

                <div className="contact-item">
                  <h4>Address</h4>
                  <p>Choudhary Towers, 42 Andul Road</p>
                  <p>Hanskhali Pool, Bakultala</p>
                  <p>Howrah – 711109</p>
                  <p>West Bengal, India</p>
                </div>

                <div className="contact-item">
                  <h4>Social Media</h4>
                  <div className="social-links">
                    <p>
                      <a href="https://linkedin.com/company/namami-plyboard-pvt-ltd" target="_blank" rel="noopener noreferrer">
                        LinkedIn: Namami Plyboard Pvt. Ltd.
                      </a>
                    </p>
                    <p>
                      <a href="https://www.instagram.com/namamiplyboardpvtltd2009?igsh=MW5tampub3RtZXl3bg==" target="_blank" rel="noopener noreferrer">
                        Instagram: Namami Plyboard Pvt. Ltd.
                      </a>
                    </p>
                  </div>
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
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Namami%20Plyboard%20Pvt%20Ltd%20Choudhary%20Towers%2042%20Andul%20Road%20Hanskhali%20Pool%20Bakultala%20Howrah%20711109&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Namami Plyboard Pvt Ltd - Choudhary Towers, 42 Andul Road, Hanskhali Pool, Bakultala, Howrah - 711109"
              ></iframe>
              <div className="map-link">
                <a
                  href="https://maps.app.goo.gl/BePc2Et64Ecys2eE8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-directions-btn"
                >
                  📍 Get Directions to Our Office
                </a>
              </div>
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
