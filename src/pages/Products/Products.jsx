import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Products.css'

const Products = () => {
  // Optimized Intersection Observer for scroll reveals
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          // Stop observing once revealed for better performance
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Use setTimeout to ensure DOM is ready
    const timer = setTimeout(() => {
      const scrollElements = document.querySelectorAll('.products-page .scroll-reveal')
      scrollElements.forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const products = [
    {
      id: 1,
      name: "Plywood",
      types: ["BWR (Boiling Water Resistant)", "MR (Moisture Resistant)", "BWP (Boiling Water Proof)"],
      description: "Premium quality plywood for all construction and furniture needs",
      image: "/images/Plywood.jpg"
    },
    {
      id: 2,
      name: "Laminates",
      types: ["Glossy Finish", "Matte Finish", "Textured Surface"],
      description: "High-quality decorative laminates for modern interiors",
      image: "/images/Laminates.jpg"
    },
    {
      id: 3,
      name: "Teak Wood Products",
      types: ["Natural Teak", "Engineered Teak", "Teak Veneers"],
      description: "Authentic teak wood products for luxury applications",
      image: "/images/TeakWoodProducts,jpg.jpeg"
    },
    {
      id: 4,
      name: "Block Boards",
      types: ["Standard Grade", "Premium Grade", "Marine Grade"],
      description: "Sturdy block boards for heavy-duty construction",
      image: "/images/BlockBoards.jpg"
    },
    {
      id: 5,
      name: "Flush Doors",
      types: ["Solid Core", "Hollow Core", "Fire Resistant"],
      description: "Durable and elegant flush doors for residential and commercial use",
      image: "/images/FlushDoors.jpg"
    },
    {
      id: 6,
      name: "Veneers",
      types: ["Natural Wood", "Engineered", "Exotic Species"],
      description: "Premium wood veneers for sophisticated finishing",
      image: "/images/Veneers.jpg"
    },
    {
      id: 7,
      name: "WPC Panels",
      types: ["Interior Panels", "Exterior Panels", "Decorative Panels"],
      description: "Wood Plastic Composite panels for modern applications",
      image: "/images/WPCPanel.jpg"
    },
    {
      id: 8,
      name: "WPC Boards",
      types: ["Standard Boards", "Fire Retardant", "Waterproof"],
      description: "Versatile WPC boards for various construction needs",
      image: "/images/WPCBoards.jpg"
    }
  ]

  return (
    <motion.div 
      className="products-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="products-page__container">
        <motion.div 
          className="products-page__header"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="products-page__title">Our Products</h1>
          <p className="products-page__subtitle">Premium CenturyPly Products for Every Need</p>
        </motion.div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-card__image">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, var(--color-gray-light), var(--color-gray-medium))';
                  }}
                />
                <div className="product-card__overlay">
                  <Link to="/contact" className="product-card__cta">Get Quote</Link>
                </div>
              </div>
              
              <div className="product-card__content">
                <h3 className="product-card__title">{product.name}</h3>
                <p className="product-card__description">{product.description}</p>
                
                <div className="product-card__types">
                  <h4>Available Types:</h4>
                  <ul>
                    {product.types.map((type, typeIndex) => (
                      <li key={typeIndex}>{type}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="products-page__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3>Need a Custom Quote?</h3>
          <p>Contact our experts to discuss your specific requirements and get the best pricing for your project.</p>
          <div className="products-cta-buttons">
            <Link to="/contact" className="btn btn--primary btn--large">
              Get Quote Now
            </Link>
            <Link to="/about" className="btn btn--secondary btn--large">
              Why Choose Us
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Products
