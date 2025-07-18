import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const overlayRef = useRef(null)
  const rotatingTextRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down video playback
    }
  }, []);

  // Rotating text state
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const rotatingWords = [
    'Interiors',
    'Furniture',
    'Infrastructure',
    'Industrial Projects',
    'OEM Supplies',
    'B2B Solutions'
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo(textRef.current.children,
        {
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
          delay: 0.5
        }
      )

      // Golden overlay animation
      gsap.fromTo(overlayRef.current,
        {
          opacity: 0,
          scale: 1.2
        },
        {
          opacity: 0.8,
          scale: 1,
          duration: 2,
          ease: "power2.out",
          delay: 1
        }
      )

      // Floating animation for overlay
      gsap.to(overlayRef.current, {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Rotating text animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (rotatingTextRef.current) {
        // Animate out current word
        gsap.to(rotatingTextRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            // Change to next word
            setCurrentWordIndex((prevIndex) =>
              (prevIndex + 1) % rotatingWords.length
            )

            // Animate in new word
            gsap.fromTo(rotatingTextRef.current,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
              }
            )
          }
        })
      }
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [rotatingWords.length])

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-section__video-container">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="hero-section__video"
        >
          <source src="/public/background/video.mp4" type="video/mp4" />
        </video>
        <div className="hero-section__video-overlay"></div>
      </div>
      <div className="hero-section__container">
        <div className="hero-section__content">
          <div ref={textRef} className="hero-section__text">
            <motion.h1 className="hero-section__title">
              Powering East India's{' '}
              <span
                ref={rotatingTextRef}
                className="hero-section__rotating-text"
              >
                {rotatingWords[currentWordIndex]}
              </span>
            </motion.h1>
            <motion.h2 className="hero-section__subtitle">
              with CenturyPly
            </motion.h2>
            <motion.p className="hero-section__description">
              Premium wood products and solutions from your trusted Royal Club Member distributor
            </motion.p>
            <motion.div className="hero-section__cta">
              <Link to="/products" className="btn btn--primary">Explore Products</Link>
              <Link to="/contact" className="btn btn--secondary">Contact Us</Link>
            </motion.div>
          </div>

          <div className="hero-section__visual">
            <div ref={overlayRef} className="hero-section__overlay">
              <div className="wood-texture-overlay"></div>
              <div className="golden-glow"></div>
              <div className="fire-effect"></div>
            </div>
          </div>
        </div>

        <div className="hero-section__scroll-indicator">
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Scroll to explore</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
