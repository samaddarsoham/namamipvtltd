import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const ClientsSection = () => {
  const marqueeRef = useRef(null)
  
  const clients = [
    {
      name: "Jindal Steel & Power",
      logo: "/clients/jindal.png"
    },
    {
      name: "IFB Industries",
      logo: "/clients/ifb.png"
    },
    {
      name: "Crescent Steel",
      logo: "/clients/crescent.png"
    },
    {
      name: "Patton Group",
      logo: "/clients/patton.png"
    },
    {
      name: "Shapoorji Pallonji",
      logo: "/clients/shapoorji.png"
    },
    {
      name: "Siddha Group",
      logo: "/clients/siddha.png"
    },
    {
      name: "Solaris Chemtech",
      logo: "/clients/solaris.jpg"
    },
    {
      name: "Alcove Realty",
      logo: "/clients/alcove.jpg"
    },
    {
      name: "Godrej",
      logo: "/clients/godrej.png"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current
      const marqueeWidth = marquee.scrollWidth
      const containerWidth = marquee.offsetWidth

      gsap.to(marquee, {
        x: -(marqueeWidth - containerWidth),
        duration: 20,
        ease: "none",
        repeat: -1
      })
    }, marqueeRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="clients-section scroll-reveal">
      <div className="clients-section__container">
        <motion.div 
          className="clients-section__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Esteemed Clients</h2>
          <p className="section-subtitle golden-text">OEM Supplier to Leading Industries</p>
        </motion.div>

        <motion.div 
          className="clients-section__marquee-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="clients-marquee" ref={marqueeRef}>
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="client-logo">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo-image"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="clients-section__stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <h3 className="stat-number">15+</h3>
            <p className="stat-label">Years of Excellence</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">5000+</h3>
            <p className="stat-label">Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">150+</h3>
            <p className="stat-label">Industry Partners</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">100%</h3>
            <p className="stat-label">Customer Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsSection
