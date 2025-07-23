import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import './BrandPartnersSection.css'

const BrandPartnersSection = () => {
  const scrollRef = useRef(null)
  
  const brandLogos = [
    {
      name: "CenturyPly",
      logo: "/companylogos/1630622459056-removebg-preview.png",
      description: "Premium Plywood & Laminates"
    },
    {
      name: "Pidilite",
      logo: "/companylogos/Pidilite_logo.svg.png",
      description: "Adhesives & Construction Chemicals"
    },
    {
      name: "Merino",
      logo: "/companylogos/merino-removebg-preview.png",
      description: "Decorative Laminates"
    },
    {
      name: "Royale Touch",
      logo: "/companylogos/royale_touch-removebg-preview.png",
      description: "Premium Laminates"
    },
    {
      name: "Quality Partner",
      logo: "/companylogos/Capture-removebg-preview.png",
      description: "Building Materials"
    },
    {
      name: "Trusted Brand",
      logo: "/companylogos/images-removebg-preview.png",
      description: "Premium Solutions"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollContainer = scrollRef.current
      const scrollWidth = scrollContainer.scrollWidth
      const containerWidth = scrollContainer.offsetWidth

      // Create seamless horizontal scroll animation
      gsap.to(scrollContainer, {
        x: -(scrollWidth - containerWidth),
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % (scrollWidth - containerWidth))
        }
      })
    }, scrollRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="brand-partners-section py-12 bg-gradient-to-r from-gray-50 to-blue-50 mobile-center-all">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our Brand Partners
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Trusted distributor of premium quality brands
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="brand-scroll-container"
        >
          <div className="brand-scroll-track" ref={scrollRef}>
            {[...brandLogos, ...brandLogos].map((brand, index) => (
              <div key={index} className="brand-logo-card">
                <div className="brand-logo-wrapper">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="brand-logo-image"
                    loading="lazy"
                  />
                </div>
                <div className="brand-info">
                  <h4 className="brand-name">{brand.name}</h4>
                  <p className="brand-description">{brand.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="text-xs md:text-sm text-gray-500 italic">
            Authorized distributor ensuring 100% authentic products
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandPartnersSection
