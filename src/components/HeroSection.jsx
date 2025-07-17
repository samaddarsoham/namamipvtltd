import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const badgeRef = useRef(null)
  const backgroundRef = useRef(null)
  const glassRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Professional entrance sequence
      const tl = gsap.timeline({ delay: 0.5 })

      // Set initial states with more sophisticated positioning
      gsap.set([titleRef.current, subtitleRef.current], {
        y: 80,
        opacity: 0,
        scale: 0.95,
        rotateX: 15
      })

      gsap.set(badgeRef.current, {
        rotateY: -90,
        rotateX: 20,
        opacity: 0,
        scale: 0.8,
        z: -100
      })

      gsap.set(glassRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 30,
        rotateX: 5
      })

      // Sophisticated glass panel entrance
      tl.to(glassRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        ease: 'power4.out'
      })

      // Professional text reveal sequence
      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 1.4,
        ease: 'power4.out',
        transformOrigin: 'center bottom'
      }, '-=0.8')
      .to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 1.2,
        ease: 'power4.out'
      }, '-=1.0')

      // Sophisticated badge 3D entrance
      .to(badgeRef.current, {
        rotateY: 0,
        rotateX: 0,
        opacity: 1,
        scale: 1,
        z: 0,
        duration: 1.8,
        ease: 'power3.out',
        transformOrigin: 'center center'
      }, '-=0.8')

      // Advanced parallax system
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const scale = 1 + (progress * 0.1)
          const rotation = progress * 1
          const opacity = 1 - (progress * 0.3)

          gsap.set(backgroundRef.current, {
            scale,
            rotation,
            opacity
          })

          // Floating elements parallax
          gsap.set('.floating-shape', {
            y: progress * -100,
            rotation: progress * 180,
            stagger: 0.1
          })
        }
      })

      // Sophisticated badge glow animation
      gsap.to(badgeRef.current, {
        filter: 'drop-shadow(0 0 20px rgba(26, 54, 93, 0.4)) drop-shadow(0 0 40px rgba(197, 48, 48, 0.3))',
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // Mobile-friendly animations using matchMedia
      ScrollTrigger.matchMedia({
        "(max-width: 768px)": function() {
          // Simpler animations for mobile
          gsap.set([titleRef.current, subtitleRef.current], {
            y: 50,
            scale: 0.95
          })

          // Reduced badge animation for mobile
          gsap.set(badgeRef.current, {
            rotateY: -90,
            rotateX: 0
          })
        },
        "(min-width: 769px)": function() {
          // Enhanced desktop animations

          // Floating animation for badge
          gsap.to(badgeRef.current, {
            y: -10,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut'
          })

          // Glass panel hover enhancement
          const glassPanel = glassRef.current
          glassPanel.addEventListener('mouseenter', () => {
            gsap.to(glassPanel, {
              scale: 1.02,
              duration: 0.3,
              ease: 'power2.out'
            })
          })

          glassPanel.addEventListener('mouseleave', () => {
            gsap.to(glassPanel, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            })
          })
        }
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  const ctaVariants = {
    hidden: {
      y: 80,
      opacity: 0,
      scale: 0.6,
      rotateX: -90
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        delay: 2,
        duration: 0.8
      }
    }
  }

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: "0 10px 40px rgba(255, 215, 0, 0.4)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 20
      }
    }
  }

  return (
    <section ref={heroRef} className="hero-section">
      {/* Professional background system */}
      <div ref={backgroundRef} className="hero-background">
        <div className="wood-texture"></div>
        <div className="background-overlay"></div>
      </div>

      {/* Floating elements for depth */}
      <div className="hero-floating-elements">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* Glass panel container */}
      <div className="container-custom">
        <div ref={glassRef} className="hero-glass-panel">
          <div className="hero-content">
            {/* Left side - Title and subtitle */}
            <div className="hero-text-section">
              <h1 ref={titleRef} className="hero-title">
                Namami Plyboard
                <span className="hero-title-accent"> Pvt. Ltd.</span>
              </h1>
              
              <p ref={subtitleRef} className="hero-subtitle">
                CenturyPly Royal Club Distributor | Since 2008
              </p>

              {/* CTA Button */}
              <motion.div
                variants={ctaVariants}
                initial="hidden"
                animate="visible"
                className="hero-cta-container"
              >
                <motion.button
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="hero-cta-button"
                  onHoverStart={() => {
                    // Add subtle shake animation on hover
                    gsap.to('.cta-arrow', {
                      x: 4,
                      duration: 0.3,
                      ease: 'power2.out'
                    })
                  }}
                  onHoverEnd={() => {
                    gsap.to('.cta-arrow', {
                      x: 0,
                      duration: 0.3,
                      ease: 'power2.out'
                    })
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.3, duration: 0.5 }}
                  >
                    Explore Our Products
                  </motion.span>
                  <motion.span
                    className="cta-arrow"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right side - CenturyPly badge */}
            <div className="hero-badge-section">
              <div ref={badgeRef} className="century-badge">
                <div className="badge-glow"></div>
                <div className="badge-content">
                  <div className="badge-logo">
                    <span className="badge-text">CenturyPly</span>
                    <span className="badge-subtitle">Royal Club</span>
                  </div>
                  <div className="badge-fire-effect"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
