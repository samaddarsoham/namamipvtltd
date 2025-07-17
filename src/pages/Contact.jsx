import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const formRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form animation
      gsap.fromTo(
        '.form-field',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Contact cards animation
      gsap.fromTo(
        '.contact-card',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, formRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const contactInfo = [
    {
      title: 'Primary Contact',
      value: 'Mr. Vineet Fatehpuria',
      phone: '+91 9831275519',
      icon: '📞',
    },
    {
      title: 'Secondary Contact',
      value: 'Mr. Suresh Aggarwal',
      phone: '+91 9830968432',
      icon: '📞',
    },
    {
      title: 'Additional Contact',
      value: 'Akash',
      phone: '+91 9330410543',
      icon: '📞',
    },
    {
      title: 'Email',
      value: 'namamiplyboard09@yahoo.com',
      secondary: 'namamiplyboardsprivatelimited@gmail.com',
      icon: '📧',
    },
    {
      title: 'Address',
      value: 'Choudhary Towers, 42 Andul Road',
      secondary: 'Hanskali Pool, Bakultala, Howrah – 711009',
      icon: '📍',
    },
    {
      title: 'LinkedIn',
      value: 'Namami Plyboard Pvt Ltd',
      link: 'https://www.linkedin.com/company/namami-plyboard-pvt-ltd/posts/?feedView=all',
      icon: '💼',
    },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="section-title">Get In Touch</h1>
            <p className="section-subtitle">
              Ready to partner with Eastern India's leading CenturyPly distributor?
              Contact us for premium quality materials and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section ref={cardsRef} className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="contact-card"
              >
                <div className="contact-card-icon">{info.icon}</div>
                <h3 className="contact-card-title">{info.title}</h3>
                <div className="contact-card-content">
                  <p className="contact-card-value">{info.value}</p>
                  {info.phone && (
                    <p className="contact-phone">
                      <a href={`tel:${info.phone}`} className="phone-link">
                        {info.phone}
                      </a>
                    </p>
                  )}
                  {info.secondary && (
                    <p className="contact-secondary">{info.secondary}</p>
                  )}
                  {info.link && (
                    <p className="contact-link">
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="external-link">
                        Visit Profile →
                      </a>
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  variants={itemVariants}
                  className="form-field"
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="form-field"
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                variants={itemVariants}
                className="form-field mb-6"
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Your message..."
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="form-field"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary text-lg py-4"
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
