import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ClienteleSection = () => {
  const sectionRef = useRef(null)
  const logosRef = useRef(null)

  const clients = [
    {
      id: 1,
      name: 'Jindal',
      category: 'Industrial',
      description: 'Leading steel and power company',
      logo: '🏭',
      partnership: '5+ Years'
    },
    {
      id: 2,
      name: 'IFB',
      category: 'Home Appliances',
      description: 'Premium home appliances manufacturer',
      logo: '🏠',
      partnership: '7+ Years'
    },
    {
      id: 3,
      name: 'Crescent',
      category: 'Manufacturing',
      description: 'Industrial manufacturing solutions',
      logo: '⚙️',
      partnership: '4+ Years'
    },
    {
      id: 4,
      name: 'Patton',
      category: 'Engineering',
      description: 'Engineering and construction services',
      logo: '🔧',
      partnership: '6+ Years'
    },
    {
      id: 5,
      name: 'Saapurji Pallonji',
      category: 'Construction',
      description: 'Leading construction and infrastructure',
      logo: '🏗️',
      partnership: '3+ Years'
    },
    {
      id: 6,
      name: 'Siddha',
      category: 'Real Estate',
      description: 'Premium real estate developer',
      logo: '🏢',
      partnership: '4+ Years'
    },
    {
      id: 7,
      name: 'Solaris',
      category: 'Infrastructure',
      description: 'Infrastructure development company',
      logo: '🌟',
      partnership: '2+ Years'
    },
    {
      id: 8,
      name: 'Alcove',
      category: 'Interior Design',
      description: 'Premium interior design solutions',
      logo: '🎨',
      partnership: '3+ Years'
    }
  ]

  const testimonials = [
    {
      id: 1,
      text: "Namami Plyboard has been our trusted partner for premium quality materials. Their reliability and prompt delivery have been exceptional.",
      client: "Project Manager",
      company: "Jindal Group"
    },
    {
      id: 2,
      text: "The quality of CenturyPly products supplied by Namami Plyboard consistently meets our high standards for manufacturing excellence.",
      client: "Procurement Head",
      company: "IFB Industries"
    },
    {
      id: 3,
      text: "Their expertise in the plywood industry and commitment to customer service makes them our preferred supplier for all projects.",
      client: "Construction Manager",
      company: "Saapurji Pallonji"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Client logos animation
      gsap.fromTo('.client-card',
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: logosRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Testimonials animation
      gsap.fromTo('.testimonial-card',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section ref={sectionRef} className="clientele-section py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Our Valued Clientele</h2>
            <p className="section-subtitle">
              Trusted by leading companies across industries for over 15 years
            </p>
          </motion.div>

          {/* Client Logos Grid */}
          <motion.div ref={logosRef} variants={itemVariants} className="clients-grid mb-20">
            {clients.map((client) => (
              <motion.div
                key={client.id}
                className="client-card"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="client-logo">
                  <span className="logo-icon">{client.logo}</span>
                </div>
                <div className="client-info">
                  <h3 className="client-name">{client.name}</h3>
                  <p className="client-category">{client.category}</p>
                  <p className="client-description">{client.description}</p>
                  <div className="partnership-badge">
                    <span className="partnership-text">{client.partnership}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials Section */}
          <motion.div variants={itemVariants} className="testimonials-section">
            <h3 className="testimonials-title text-center mb-12">What Our Clients Say</h3>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="testimonial-card"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="testimonial-content">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <p className="author-name">{testimonial.client}</p>
                      <p className="author-company">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="trust-section mt-16">
            <div className="trust-stats">
              <div className="trust-stat">
                <div className="stat-icon">🤝</div>
                <div className="stat-content">
                  <h4 className="stat-number">500+</h4>
                  <p className="stat-label">Happy Clients</p>
                </div>
              </div>
              <div className="trust-stat">
                <div className="stat-icon">🏆</div>
                <div className="stat-content">
                  <h4 className="stat-number">15+</h4>
                  <p className="stat-label">Years Experience</p>
                </div>
              </div>
              <div className="trust-stat">
                <div className="stat-icon">📦</div>
                <div className="stat-content">
                  <h4 className="stat-number">10,000+</h4>
                  <p className="stat-label">Projects Delivered</p>
                </div>
              </div>
              <div className="trust-stat">
                <div className="stat-icon">⭐</div>
                <div className="stat-content">
                  <h4 className="stat-number">99%</h4>
                  <p className="stat-label">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="clientele-cta text-center mt-16">
            <div className="cta-content">
              <h3 className="cta-title">Join Our Growing Family of Satisfied Clients</h3>
              <p className="cta-description">
                Experience the same quality and reliability that our clients have trusted for over 15 years.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button"
              >
                Become Our Partner
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClienteleSection
