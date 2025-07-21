import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const IndustriesSection = () => {
  const sectionRef = useRef(null)
  const [hoveredIndustry, setHoveredIndustry] = useState(null)
  const [selectedIndustry, setSelectedIndustry] = useState(null)

  const industries = [
    {
      id: 1,
      name: "Residential",
      category: "Luxury Homes",
      icon: "🏠",
      description: "Premium materials for luxury homes and residential projects",
      color: "from-amber-50 to-amber-100",
      accent: "#D4AF37",
      projects: "2,500+ Projects",
      specialty: "Premium Materials"
    },
    {
      id: 2,
      name: "Industrial",
      category: "Heavy Manufacturing",
      icon: "🏭",
      description: "Heavy-duty materials for industrial applications",
      color: "from-gray-50 to-gray-100",
      accent: "#374151",
      projects: "500+ Facilities",
      specialty: "Heavy Duty Solutions"
    },
    {
      id: 3,
      name: "Commercial",
      category: "Business Spaces",
      icon: "🏢",
      description: "Professional-grade solutions for commercial spaces",
      color: "from-green-50 to-green-100",
      accent: "#059669",
      projects: "1,200+ Offices",
      specialty: "Corporate Design"
    },
    {
      id: 4,
      name: "Defence",
      category: "Military & Security",
      icon: "🛡️",
      description: "High-security materials for defense applications",
      color: "from-red-50 to-red-100",
      accent: "#DC2626",
      projects: "50+ Contracts",
      specialty: "Security Grade"
    },
    {
      id: 5,
      name: "Science Museum",
      category: "Educational Institutions",
      icon: "🔬",
      description: "Specialized materials for educational institutions",
      color: "from-purple-50 to-purple-100",
      accent: "#7C3AED",
      projects: "75+ Institutions",
      specialty: "Educational Spaces"
    },
    {
      id: 6,
      name: "Navy",
      category: "Maritime Operations",
      icon: "⚓",
      description: "Marine-grade materials for naval operations",
      color: "from-cyan-50 to-cyan-100",
      accent: "#0891B2",
      projects: "25+ Naval Projects",
      specialty: "Marine Grade"
    }
  ]

  const handleIndustryClick = (industry) => {
    setSelectedIndustry(selectedIndustry?.id === industry.id ? null : industry)
  }

  const closeDetails = () => {
    setSelectedIndustry(null)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hexagonal tiles with sophisticated stagger
      gsap.fromTo('.industry-hexagon',
        {
          y: 80,
          opacity: 0,
          scale: 0.8,
          rotation: 15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          stagger: {
            amount: 0.8,
            from: "center",
            grid: "auto"
          },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="industries-professional-section">
      <div className="industries-professional-container">
        {/* Professional Header */}
        <motion.div
          className="industries-professional-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">Trusted Partner Across Diverse Sectors</p>
        </motion.div>

        {/* Professional Industry Grid */}
        <div className="industries-professional-grid">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              className={`industry-professional-card ${selectedIndustry?.id === industry.id ? 'active' : ''}`}
              onClick={() => handleIndustryClick(industry)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -3,
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-icon">{industry.icon}</div>
              <div className="card-content">
                <h3 className="card-title">{industry.name}</h3>
                <p className="card-category">{industry.category}</p>
              </div>
              <div className="card-arrow">→</div>
            </motion.div>
          ))}
        </div>

        {/* Professional Details Panel */}
        <AnimatePresence>
          {selectedIndustry && (
            <motion.div
              className="industry-professional-details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="details-wrapper">
                <button className="details-close-btn" onClick={closeDetails}>×</button>
                <div className="details-grid">
                  <div className="details-left">
                    <div className="details-icon-section">
                      <span className="details-icon-pro">{selectedIndustry.icon}</span>
                      <div>
                        <h3 className="details-title-pro">{selectedIndustry.name}</h3>
                        <p className="details-category-pro">{selectedIndustry.category}</p>
                      </div>
                    </div>
                  </div>
                  <div className="details-right">
                    <p className="details-description-pro">{selectedIndustry.description}</p>
                    <div className="details-stats-pro">
                      <span className="stat-badge">{selectedIndustry.projects}</span>
                      <span className="specialty-badge">{selectedIndustry.specialty}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>




      </div>
    </section>
  )
}

export default IndustriesSection
