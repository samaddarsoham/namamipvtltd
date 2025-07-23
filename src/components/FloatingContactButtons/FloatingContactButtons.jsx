import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FloatingContactButtons.css'

const FloatingContactButtons = () => {
  const [isOpen, setIsOpen] = useState(false)

  const contactInfo = {
    whatsapp: "+919831275519", // Mr. Vineet Fatehpuria's number
    phone: "+919831275519",
    email: "namamiplyboard09@yahoo.com",
    instagram: "https://www.instagram.com/namamiplyboardpvtltd2009?igsh=MW5tampub3RtZXl3bg==",
    linkedin: "https://linkedin.com/company/namami-plyboard-pvt-ltd"
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in your CenturyPly products. Could you please provide more information?")
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank')
  }

  const handleCall = () => {
    window.open(`tel:${contactInfo.phone}`, '_self')
  }

  const handleEmail = () => {
    const subject = encodeURIComponent("Inquiry about CenturyPly Products")
    const body = encodeURIComponent("Hello,\n\nI'm interested in learning more about your CenturyPly products and services. Please provide me with more information.\n\nThank you!")

    // Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=${subject}&body=${body}`

    // Open Gmail in new tab
    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
  }

  const handleInstagram = () => {
    window.open(contactInfo.instagram, '_blank')
  }

  const handleLinkedIn = () => {
    window.open(contactInfo.linkedin, '_blank')
  }

  const contactButtons = [
    {
      icon: "💬",
      label: "WhatsApp",
      action: handleWhatsApp,
      color: "#25D366",
      delay: 0.1
    },
    {
      icon: "📞",
      label: "Call",
      action: handleCall,
      color: "#007BFF",
      delay: 0.2
    },
    {
      icon: "📧",
      label: "Email",
      action: handleEmail,
      color: "#EA4335",
      delay: 0.3
    },
    {
      icon: "📸",
      label: "Instagram",
      action: handleInstagram,
      color: "#E4405F",
      delay: 0.4
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      action: handleLinkedIn,
      color: "#0077B5",
      delay: 0.5
    }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="floating-contact">
      {/* Individual Contact Buttons */}
      <AnimatePresence>
        {isOpen && (
          <div className="floating-contact__menu">
            {contactButtons.map((button, index) => (
              <motion.button
                key={button.label}
                className="floating-contact__button"
                style={{ '--button-color': button.color }}
                onClick={button.action}
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: button.delay,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
                exit={{ 
                  scale: 0, 
                  opacity: 0, 
                  y: 20,
                  transition: { 
                    delay: (contactButtons.length - index - 1) * 0.05,
                    duration: 0.2
                  }
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: `0 8px 25px ${button.color}40`
                }}
                whileTap={{ scale: 0.95 }}
                title={button.label}
              >
                <span className="floating-contact__icon">{button.icon}</span>
                <span className="floating-contact__label">{button.label}</span>
              </motion.button>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        className={`floating-contact__toggle ${isOpen ? 'floating-contact__toggle--open' : ''}`}
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 1.5
        }}
      >
        <motion.div
          className="floating-contact__toggle-icon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '✕' : '📞'}
        </motion.div>
      </motion.button>
    </div>
  )
}

export default FloatingContactButtons
