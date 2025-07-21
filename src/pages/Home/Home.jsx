import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductsPreview from './components/ProductsPreview'
import IndustriesSection from './components/IndustriesSection'
import ClientsSection from './components/ClientsSection'
import './Home.css'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    // Use Intersection Observer for scroll reveals
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
        }
      })
    }, observerOptions)

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal')
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection />
      <AboutSection />
      <ProductsPreview />
      <IndustriesSection />
      <ClientsSection />
    </motion.div>
  )
}

export default Home
