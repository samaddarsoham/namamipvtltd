import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ProductCatalog = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  const products = [
    {
      id: 1,
      name: 'BWR Plywood',
      category: 'plywood',
      description: 'Boiling Water Resistant plywood for moisture-prone areas',
      features: ['Water Resistant', 'Termite Proof', 'High Durability'],
      image: '🪵'
    },
    {
      id: 2,
      name: 'MR Plywood',
      category: 'plywood',
      description: 'Moisture Resistant plywood for interior applications',
      features: ['Moisture Resistant', 'Smooth Finish', 'Cost Effective'],
      image: '🪵'
    },
    {
      id: 3,
      name: 'BWP Plywood',
      category: 'plywood',
      description: 'Boiling Water Proof marine grade plywood',
      features: ['100% Waterproof', 'Marine Grade', 'Premium Quality'],
      image: '🪵'
    },
    {
      id: 4,
      name: 'Glossy Laminates',
      category: 'laminates',
      description: 'High-gloss decorative laminates for modern interiors',
      features: ['High Gloss', 'Scratch Resistant', 'Easy to Clean'],
      image: '✨'
    },
    {
      id: 5,
      name: 'Matte Laminates',
      category: 'laminates',
      description: 'Elegant matte finish laminates for sophisticated looks',
      features: ['Matte Finish', 'Fingerprint Resistant', 'Premium Look'],
      image: '🎨'
    },
    {
      id: 6,
      name: 'Textured Laminates',
      category: 'laminates',
      description: 'Textured surface laminates for unique design appeal',
      features: ['Textured Surface', 'Natural Feel', 'Design Variety'],
      image: '🏗️'
    },
    {
      id: 7,
      name: 'Teak Wood',
      category: 'wood',
      description: 'Premium teak wood products for luxury applications',
      features: ['Natural Teak', 'Premium Grade', 'Long Lasting'],
      image: '🌳'
    },
    {
      id: 8,
      name: 'Block Boards',
      category: 'boards',
      description: 'High-quality block boards for furniture making',
      features: ['Strong Core', 'Lightweight', 'Easy to Work'],
      image: '📋'
    },
    {
      id: 9,
      name: 'Flush Doors',
      category: 'doors',
      description: 'Ready-to-install flush doors for modern homes',
      features: ['Ready to Install', 'Smooth Finish', 'Various Sizes'],
      image: '🚪'
    },
    {
      id: 10,
      name: 'Natural Veneers',
      category: 'veneers',
      description: 'Premium natural wood veneers for elegant finishes',
      features: ['Natural Wood', 'Premium Quality', 'Rich Grain'],
      image: '🍃'
    },
    {
      id: 11,
      name: 'WPC Panels',
      category: 'wpc',
      description: 'Wood Plastic Composite panels for modern applications',
      features: ['Eco-Friendly', 'Water Resistant', 'Low Maintenance'],
      image: '♻️'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', icon: '📦' },
    { id: 'plywood', name: 'Plywood', icon: '🪵' },
    { id: 'laminates', name: 'Laminates', icon: '✨' },
    { id: 'wood', name: 'Teak Wood', icon: '🌳' },
    { id: 'boards', name: 'Block Boards', icon: '📋' },
    { id: 'doors', name: 'Flush Doors', icon: '🚪' },
    { id: 'veneers', name: 'Veneers', icon: '🍃' },
    { id: 'wpc', name: 'WPC Products', icon: '♻️' }
  ]

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.product-card',
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section ref={sectionRef} className="products-section py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Our Product Catalog</h2>
            <p className="section-subtitle">
              Premium quality plywood, laminates, and building materials from CenturyPly
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="filter-container mb-12">
            <div className="filter-buttons">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                >
                  <span className="filter-icon">{category.icon}</span>
                  <span className="filter-text">{category.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div ref={cardsRef} className="products-grid">
            <AnimatePresence mode="wait">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="product-card"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="product-image">
                    <span className="product-emoji">{product.image}</span>
                  </div>
                  <div className="product-content">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-features">
                      {product.features.map((feature, index) => (
                        <span key={index} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="product-btn"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductCatalog
