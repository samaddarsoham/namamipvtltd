import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Products.css'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Brand catalogue mapping
  const brandCatalogues = {
    "CenturyPly": "https://drive.google.com/file/d/1DmwcLavvCwL69dfvoacPC-ES3tUR_4zp/view",
    "Intim": "https://drive.google.com/file/d/1ebTj8OJFDhz_E5feeGrhaauY-ht3biLa/view",
    "MarinoLam": "https://drive.google.com/file/d/1PeNJdh2R79TAbu8prXNVxLlYjQmiI9a6/view",
    "New Mika by Greenlam Industries": "https://drive.google.com/file/d/1AIU2DhpQmiRKCKwf2JOjpGlB3IDqrI0y/view",
    "Royal Touche": "https://drive.google.com/file/d/1gQ8eFj6z-zvLrKz4myqOzDOLWvcKwuJb/view"
  };

  // Function to handle brand catalogue opening (only for Laminates)
  const handleBrandClick = (brandName, productName) => {
    // Only allow catalogue opening for Laminates product
    if (productName !== "Laminates") return;

    const catalogueUrl = brandCatalogues[brandName];
    if (catalogueUrl) {
      window.open(catalogueUrl, '_blank', 'noopener,noreferrer');
    }
  };

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
  }, []);

  const products = [
    {
      id: 1,
      name: "Plywood",
      types: ["BWR (Boiling Water Resistant)", "MR (Moisture Resistant)", "BWP (Boiling Water Proof)"],
      description: "Premium quality plywood for all construction and furniture needs",
      image: "/images/Plywood.png",
      brands: ["CenturyPly", "Rhyno Tuff", "Glacier Gold", "Adhunik Ultra", "Bell Ply"]
    },
    {
      id: 2,
      name: "Laminates",
      types: ["Glossy Finish", "Matte Finish", "Textured Surface"],
      description: "High-quality decorative laminates for modern interiors",
      image: "/images/Laminates.jpg",
      brands: ["New Mika by Greenlam Industries", "Royal Touche", "CenturyPly", "MarinoLam", "Intim"]
    },
    {
      id: 3,
      name: "Teak Wood Products",
      types: ["Natural Teak", "Engineered Teak", "Teak Veneers"],
      description: "Authentic teak wood products for luxury applications",
      image: "/images/TeakWoodProducts,jpg.png",
      brands: ["Century Ply"]
    },
    {
      id: 4,
      name: "Block Boards",
      types: ["Standard Grade", "Premium Grade", "Marine Grade"],
      description: "Sturdy block boards for heavy-duty construction",
      image: "/images/BlockBoards.jpg",
      brands: ["CenturyPly", "Rhyno Tuff", "Glacier Gold", "Adhunik Ultra", "Bell Ply", "Rhyno Tuff - 30/710"]
    },
    {
      id: 5,
      name: "Flush Doors",
      types: ["Solid Core", "Hollow Core", "Fire Resistant"],
      description: "Durable and elegant flush doors for residential and commercial use",
      image: "/images/FlushDoors.jpg",
      brands: ["CenturyPly", "Rhyno Tuff (Full Pine)"]
    },
    {
      id: 6,
      name: "Veneers",
      types: ["Natural Wood", "Engineered", "Exotic Species"],
      description: "Premium wood veneers for sophisticated finishing",
      image: "/images/Veneers.png",
      brands: ["Century Ply"]
    },
    {
      id: 7,
      name: "MDF / HDHMR",
      types: ["Standard MDF", "Moisture Resistant HDHMR", "Fire Retardant MDF"],
      description: "High-density fiberboard and HDHMR for premium furniture and interiors",
      image: "/images/mdf.jpg",
      brands: ["Century Ply", "GreenPly"]
    },
    {
      id: 8,
      name: "WPC Ply & PVC Laminates",
      types: ["WPC Plywood", "PVC Decorative Laminates", "High Gloss Laminates"],
      description: "Modern WPC plywood and PVC laminates for contemporary designs",
      image: "/images/wpc.png",
      brands: ["Trend", "Advance", "Acrylic", "Ellena"]
    }
  ]

  return (
    <motion.div
      className="products-page mobile-center-all"
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
          <p className="company-brands-tagline">Your One-Stop Destination for Premium Ply & Laminate Brands</p>
          <div className="company-brands">
            {[
              "CenturyPly",
              "Rhyno Tuff",
              "Glacier Gold",
              "Adhunik Ultra",
              "Bell Ply",
              "Greenlam Industries",
              "Royal Touche",
              "MarinoLam",
              "Intim",
              "GreenPly",
              "Trend",
              "Advance",
              "Acrylic",
              "Ellena"
            ].map((company, index) => (
              <motion.div
                key={index}
                className="company-brand-box"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
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
                <button 
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="product-card__cta"
                >
                  View Brands
                </button>
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

      {selectedProduct && (
        <div 
          className="product-dialog-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="product-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button"
              className="product-dialog__close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close dialog"
            >
              ×
            </button>
            <h2>Available Brands for {selectedProduct.name}</h2>
            <div className="product-dialog__brands">
              {selectedProduct.brands && selectedProduct.brands.map((brand, index) => {
                // Only show catalogues for Laminates product
                const isLaminatesProduct = selectedProduct.name === "Laminates";
                const hasCatalogue = isLaminatesProduct && brandCatalogues[brand];

                return (
                  <div
                    key={index}
                    className={`product-dialog__brand ${hasCatalogue ? 'product-dialog__brand--clickable' : ''}`}
                    onClick={() => hasCatalogue && handleBrandClick(brand, selectedProduct.name)}
                    title={hasCatalogue ? `View ${brand} Catalogue` : brand}
                  >
                    {brand}
                    {hasCatalogue && <span className="catalogue-icon">📄</span>}
                  </div>
                );
              })}
            </div>
            {selectedProduct.name === "Laminates" && (
              <p className="catalogue-hint">
                💡 Click on brands with 📄 icon to view their catalogues
              </p>
            )}
            <div className="product-dialog__actions">
              <Link 
                to="/contact" 
                className="btn btn--primary"
                onClick={() => setSelectedProduct(null)}
              >
                Contact for Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default Products
