import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const ClientsSection = () => {
  const marqueeRef = useRef(null)
  
  const clients = [
    {
      name: "Jindal Steel & Power",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jindal_Steel_and_Power_logo.svg/320px-Jindal_Steel_and_Power_logo.svg.png",
      fallback: "https://www.jindalsteel.com/images/logo.png"
    },
    {
      name: "IFB Industries",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/IFB_Industries_logo.svg/320px-IFB_Industries_logo.svg.png",
      fallback: "https://www.ifbappliances.com/images/logo.png"
    },
    {
      name: "Crescent Steel",
      logo: "https://crescentsteel.com/wp-content/uploads/2020/01/crescent-logo.png",
      fallback: "https://via.placeholder.com/120x60/8B0000/FFFFFF?text=CRESCENT"
    },
    {
      name: "Patton Group",
      logo: "https://pattongroup.in/images/logo.png",
      fallback: "https://via.placeholder.com/120x60/D4AF37/000000?text=PATTON"
    },
    {
      name: "Shapoorji Pallonji",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shapoorji_Pallonji_Group_logo.svg/320px-Shapoorji_Pallonji_Group_logo.svg.png",
      fallback: "https://www.shapoorjipallonji.com/images/sp-logo.png"
    },
    {
      name: "Siddha Group",
      logo: "https://siddhagroup.com/images/siddha-logo.png",
      fallback: "https://via.placeholder.com/120x60/8B0000/FFFFFF?text=SIDDHA"
    },
    {
      name: "Solaris Chemtech",
      logo: "https://solarischemtech.com/images/logo.png",
      fallback: "https://via.placeholder.com/120x60/D4AF37/000000?text=SOLARIS"
    },
    {
      name: "Alcove Realty",
      logo: "https://alcoverealty.in/images/logo.png",
      fallback: "https://via.placeholder.com/120x60/8B0000/FFFFFF?text=ALCOVE"
    },
    {
      name: "Tata Steel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Tata_Steel_Logo.svg/320px-Tata_Steel_Logo.svg.png",
      fallback: "https://via.placeholder.com/120x60/1F4E79/FFFFFF?text=TATA+STEEL"
    },
    {
      name: "Godrej",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Godrej_logo.svg/320px-Godrej_logo.svg.png",
      fallback: "https://via.placeholder.com/120x60/228B22/FFFFFF?text=GODREJ"
    },
    {
      name: "Mahindra",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Mahindra_Logo.svg/320px-Mahindra_Logo.svg.png",
      fallback: "https://via.placeholder.com/120x60/C41E3A/FFFFFF?text=MAHINDRA"
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
                  onError={(e) => {
                    if (client.fallback && e.target.src !== client.fallback) {
                      e.target.src = client.fallback;
                    } else {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.fontSize = '0.9rem';
                      e.target.nextElementSibling.style.fontWeight = '600';
                      e.target.nextElementSibling.style.color = 'var(--color-deep-red)';
                    }
                  }}
                />
                <span className="client-name">{client.name}</span>
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
            <h3 className="stat-number">500+</h3>
            <p className="stat-label">Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">50+</h3>
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
