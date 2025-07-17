import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProductsPreview = () => {
  const featuredProducts = [
    {
      name: "Premium Plywood",
      description: "BWR, MR, and BWP grades for all applications",
      image: "/images/Plywood.jpg",
      features: ["Water Resistant", "Termite Proof", "High Strength"]
    },
    {
      name: "Designer Laminates",
      description: "Glossy, matte, and textured finishes",
      image: "/images/Laminates.jpg",
      features: ["Scratch Resistant", "Easy Maintenance", "Vibrant Colors"]
    },
    {
      name: "Teak Wood Products",
      description: "Authentic teak for luxury applications",
      image: "/images/TeakWoodProducts,jpg.jpeg",
      features: ["Natural Beauty", "Durable", "Premium Quality"]
    }
  ]

  return (
    <section className="products-preview scroll-reveal">
      <div className="products-preview__container">
        <motion.div 
          className="products-preview__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Premium Products</h2>
          <p className="section-subtitle">Discover our comprehensive range of CenturyPly products</p>
        </motion.div>

        <div className="products-preview__grid">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              className="product-preview-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="product-preview-card__image">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, var(--color-gray-light), var(--color-gray-medium))';
                  }}
                />
                <div className="product-preview-card__overlay">
                  <Link to="/products" className="product-preview-card__cta">
                    View Details
                  </Link>
                </div>
              </div>

              <div className="product-preview-card__content">
                <h3 className="product-preview-card__title">{product.name}</h3>
                <p className="product-preview-card__description">{product.description}</p>
                
                <ul className="product-preview-card__features">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="products-preview__cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/products" className="btn btn--primary btn--large">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsPreview
