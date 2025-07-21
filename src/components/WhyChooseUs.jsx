import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WhyChooseUs = () => {
  const sectionRef = useRef(null)
  const featuresRef = useRef(null)

  const features = [
    {
      id: 1,
      icon: '🏆',
      title: 'CenturyPly Royal Club Member',
      description: 'Official recognition as a top-performing distributor with exclusive access to premium products and support.',
      benefits: ['Exclusive Product Access', 'Priority Support', 'Quality Guarantee']
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Prompt Delivery',
      description: 'Efficient logistics and inventory management ensuring timely delivery across Eastern India.',
      benefits: ['Same-Day Dispatch', 'Wide Coverage', 'Real-time Tracking']
    },
    {
      id: 3,
      icon: '🎯',
      title: 'Premium Quality Products',
      description: 'Only authentic CenturyPly products with stringent quality checks and certifications.',
      benefits: ['100% Authentic', 'Quality Certified', 'Warranty Support']
    },
    {
      id: 4,
      icon: '🤝',
      title: 'Trusted Reliability',
      description: '15+ years of consistent service with a proven track record of customer satisfaction.',
      benefits: ['Proven Track Record', 'Customer Trust', 'Long-term Partnerships']
    },
    {
      id: 5,
      icon: '💼',
      title: 'Industry Expertise',
      description: 'Deep understanding of market needs with specialized solutions for different industries.',
      benefits: ['Market Knowledge', 'Custom Solutions', 'Technical Support']
    },
    {
      id: 6,
      icon: '📞',
      title: 'Dedicated Support',
      description: 'Personalized customer service with dedicated account managers for seamless experience.',
      benefits: ['Personal Account Manager', '24/7 Support', 'Quick Response']
    }
  ]

  const achievements = [
    {
      icon: '🥇',
      title: 'Market Leader',
      description: 'Leading CenturyPly distributor in Eastern India'
    },
    {
      icon: '🌟',
      title: 'Royal Club Status',
      description: 'Exclusive membership for top performers'
    },
    {
      icon: '🔒',
      title: 'Quality Assurance',
      description: '100% authentic products with warranty'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Efficient logistics across the region'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Features animation
      gsap.fromTo('.feature-card',
        { y: 50, opacity: 0, rotateY: 15 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Achievement badges animation
      gsap.fromTo('.achievement-badge',
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.achievements-grid',
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
    <section ref={sectionRef} className="why-choose-section py-20 bg-white mobile-center-all">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Why Choose Namami Plyboard?</h2>
            <p className="section-subtitle">
              Your trusted partner for premium quality, reliability, and exceptional service
            </p>
          </motion.div>

          {/* Key Features Grid */}
          <motion.div ref={featuresRef} variants={itemVariants} className="features-grid mb-20">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="feature-card"
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="feature-icon">
                  <span>{feature.icon}</span>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-benefits">
                    {feature.benefits.map((benefit, index) => (
                      <span key={index} className="benefit-tag">
                        ✓ {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants} className="achievements-section mb-16">
            <h3 className="achievements-title text-center mb-12">Our Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-badge"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="achievement-icon">
                    <span>{achievement.icon}</span>
                  </div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div variants={itemVariants} className="value-proposition">
            <div className="value-content">
              <div className="value-text">
                <h3 className="value-title">Experience the Namami Plyboard Difference</h3>
                <p className="value-description">
                  With over 15 years of industry expertise and CenturyPly Royal Club membership, 
                  we deliver unmatched quality and service. Our commitment to excellence has made 
                  us the preferred choice for leading companies across Eastern India.
                </p>
                <div className="value-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">🎯</span>
                    <span className="highlight-text">Customer-Centric Approach</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">⚡</span>
                    <span className="highlight-text">Quick Response Time</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🔧</span>
                    <span className="highlight-text">Technical Expertise</span>
                  </div>
                </div>
              </div>
              <div className="value-image">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <span className="placeholder-icon">🏆</span>
                    <p>Excellence in Service</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="why-choose-cta text-center mt-16">
            <div className="cta-content">
              <h3 className="cta-title">Ready to Experience Excellence?</h3>
              <p className="cta-description">
                Join hundreds of satisfied clients who trust Namami Plyboard for their premium material needs.
              </p>
              <div className="cta-buttons">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cta-button primary"
                >
                  Get Quote Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cta-button secondary"
                >
                  View Products
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
