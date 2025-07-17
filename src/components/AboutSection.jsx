import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {
  const sectionRef = useRef(null)
  const statsRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats counter animation
      gsap.fromTo('.stat-number', 
        { textContent: 0 },
        {
          textContent: (i, target) => target.getAttribute('data-value'),
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Timeline items animation
      gsap.fromTo('.timeline-item',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
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

  const stats = [
    { number: 15, suffix: '+', label: 'Years of Experience' },
    { number: 500, suffix: '+', label: 'Happy Clients' },
    { number: 50, suffix: '+', label: 'Product Varieties' },
    { number: 100, suffix: '%', label: 'Quality Assurance' }
  ]

  const timeline = [
    {
      year: '2008',
      title: 'Company Established',
      description: 'Founded Namami Plyboard Pvt. Ltd. in Howrah, West Bengal'
    },
    {
      year: '2010',
      title: 'CenturyPly Partnership',
      description: 'Became authorized distributor of CenturyPly products'
    },
    {
      year: '2015',
      title: 'Royal Club Membership',
      description: 'Achieved CenturyPly Royal Club status for top performance'
    },
    {
      year: '2020',
      title: 'Industrial Expansion',
      description: 'Expanded to serve major OEM clients and industrial projects'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Leading distributor in Eastern India with 15+ years expertise'
    }
  ]

  return (
    <section ref={sectionRef} className="about-section py-20 bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">About Namami Plyboard</h2>
            <p className="section-subtitle">
              Your trusted partner in premium plywood and laminates since 2008
            </p>
          </motion.div>

          {/* Company Overview */}
          <motion.div variants={itemVariants} className="about-overview mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="about-content">
                <h3 className="about-heading">Leading CenturyPly Distributor in Eastern India</h3>
                <p className="about-text">
                  Established in 2008, Namami Plyboard Pvt. Ltd. has grown to become one of the most 
                  trusted authorized distributors of CenturyPly in Eastern India. Operating from Howrah, 
                  West Bengal, we have built a reputation for excellence in the plywood and laminates industry.
                </p>
                <p className="about-text">
                  As an official Royal Club member of CenturyPly, we represent the top-performing 
                  distributors recognized for outstanding service and market leadership. Our commitment 
                  to quality and customer satisfaction has made us the preferred choice for OEMs, 
                  industrial clients, and residential contractors.
                </p>
                <div className="about-badges">
                  <div className="badge-item">
                    <span className="badge-icon">🏆</span>
                    <span className="badge-text">CenturyPly Royal Club Member</span>
                  </div>
                  <div className="badge-item">
                    <span className="badge-icon">✅</span>
                    <span className="badge-text">Authorized Distributor</span>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <span className="placeholder-icon">🏢</span>
                    <p>Company Image</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div ref={statsRef} variants={itemVariants} className="stats-section mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card text-center">
                  <div className="stat-number-container">
                    <span className="stat-number" data-value={stat.number}>0</span>
                    <span className="stat-suffix">{stat.suffix}</span>
                  </div>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Company Timeline */}
          <motion.div ref={timelineRef} variants={itemVariants} className="timeline-section">
            <h3 className="timeline-title text-center mb-12">Our Journey</h3>
            <div className="timeline-container">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    {index !== timeline.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h4 className="timeline-event">{item.title}</h4>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
