import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
  const achievements = [
    {
      year: "2009",
      title: "Established",
      description: "Founded with a vision to serve Eastern India"
    },
    {
      year: "2012",
      title: "Royal Club Member",
      description: "Achieved prestigious status with CenturyPly"
    },
    {
      year: "2020",
      title: "Industry Trust",
      description: "Trusted by Jindal, IFB, Crescent, Patton"
    },
    {
      year: "2024",
      title: "Leading Supplier",
      description: "Supplying Shapoorji, Siddha, Solaris, Alcove"
    }
  ]

  return (
    <section className="about-section scroll-reveal">
      <div className="about-section__container">
        <motion.div 
          className="about-section__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Your Trusted Partner in Premium Wood Solutions</p>
        </motion.div>

        <div className="about-section__content">
          <motion.div 
            className="about-section__text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Excellence Since 2008</h3>
            <p>
              As a Royal Club Member of CenturyPly, we have been serving Eastern India with 
              premium wood products and unmatched quality. Our commitment to excellence has 
              made us the preferred choice for leading industries and builders.
            </p>
            <p>
              From residential projects to large-scale commercial developments, we provide 
              comprehensive solutions that meet the highest standards of quality and durability.
            </p>
          </motion.div>

          <div className="about-section__achievements">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="achievement-card__year">{achievement.year}</div>
                <h4 className="achievement-card__title">{achievement.title}</h4>
                <p className="achievement-card__description">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
