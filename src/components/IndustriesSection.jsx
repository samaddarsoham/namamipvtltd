import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const IndustriesSection = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  const industries = [
    {
      id: 1,
      title: 'Residential',
      subtitle: 'Home & Interior Solutions',
      description: 'Premium plywood and laminates for modern homes, apartments, and residential interior projects.',
      icon: '🏠',
      features: ['Interior Design', 'Furniture Making', 'Home Renovation', 'Custom Solutions'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'OEM Manufacturing',
      subtitle: 'Industrial Partners',
      description: 'Trusted supplier to leading OEM manufacturers for large-scale production requirements.',
      icon: '🏭',
      features: ['Bulk Supply', 'Quality Assurance', 'Timely Delivery', 'Custom Specifications'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Commercial',
      subtitle: 'Business Spaces',
      description: 'Professional-grade materials for offices, retail spaces, hotels, and commercial establishments.',
      icon: '🏢',
      features: ['Office Interiors', 'Retail Spaces', 'Hotels & Restaurants', 'Corporate Projects'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Industrial',
      subtitle: 'Heavy-Duty Applications',
      description: 'Robust materials for industrial applications, factories, and heavy-duty construction projects.',
      icon: '⚙️',
      features: ['Factory Setup', 'Industrial Furniture', 'Heavy-Duty Applications', 'Custom Solutions'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: 'Government',
      subtitle: 'Public Sector Projects',
      description: 'Reliable partner for government projects including defense, science museums, and naval applications.',
      icon: '🏛️',
      features: ['Defense Projects', 'Science Museums', 'Naval Applications', 'Public Infrastructure'],
      color: 'from-red-500 to-red-600'
    },
    {
      id: 6,
      title: 'Infrastructure',
      subtitle: 'Large-Scale Projects',
      description: 'Supporting major infrastructure developments and construction projects across Eastern India.',
      icon: '🏗️',
      features: ['Construction Projects', 'Infrastructure Development', 'Large-Scale Supply', 'Project Management'],
      color: 'from-teal-500 to-teal-600'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.industry-card',
        { y: 60, opacity: 0, rotateX: 15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
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
    <section ref={sectionRef} className="industries-section py-20 bg-white mobile-center-all">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Trusted partner across diverse sectors with 15+ years of industry expertise
            </p>
          </motion.div>

          {/* Industries Grid */}
          <motion.div ref={cardsRef} className="industries-grid">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                variants={itemVariants}
                className="industry-card"
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className={`industry-header bg-gradient-to-r ${industry.color}`}>
                  <div className="industry-icon">
                    <span>{industry.icon}</span>
                  </div>
                  <div className="industry-title-section">
                    <h3 className="industry-title">{industry.title}</h3>
                    <p className="industry-subtitle">{industry.subtitle}</p>
                  </div>
                </div>
                
                <div className="industry-content">
                  <p className="industry-description">{industry.description}</p>
                  
                  <div className="industry-features">
                    <h4 className="features-title">Key Services:</h4>
                    <ul className="features-list">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">
                          <span className="feature-bullet">•</span>
                          <span className="feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="industry-btn"
                  >
                    Learn More
                    <span className="btn-arrow">→</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="industries-cta text-center mt-16">
            <div className="cta-content">
              <h3 className="cta-title">Ready to Partner With Us?</h3>
              <p className="cta-description">
                Join hundreds of satisfied clients across various industries. 
                Let's discuss your specific requirements.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button"
              >
                Get Quote Now
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default IndustriesSection
