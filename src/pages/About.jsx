import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const timelineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline animation
      gsap.fromTo(
        '.timeline-item',
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const technologies = [
    { name: 'React', level: 95 },
    { name: 'Vite', level: 90 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'GSAP', level: 85 },
    { name: 'Framer Motion', level: 88 },
  ]

  const timelineItems = [
    {
      year: '2024',
      title: 'Modern React Setup',
      description: 'Created with the latest React 18 features and modern tooling',
    },
    {
      year: '2024',
      title: 'Performance Optimized',
      description: 'Built with Vite for lightning-fast development and builds',
    },
    {
      year: '2024',
      title: 'Animation Ready',
      description: 'Integrated GSAP and Framer Motion for smooth animations',
    },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About This Project
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A showcase of modern web development technologies working together to create
              a high-performance, responsive, and beautifully animated web application.
            </p>
          </motion.div>

          {/* Technology Stack */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <h3 className="font-semibold text-gray-900 mb-3">{tech.name}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-sm text-gray-600">{tech.level}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 bg-white">
        <div className="container-custom">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-900 mb-16"
          >
            Development Timeline
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {timelineItems.map((item, index) => (
              <div key={index} className="timeline-item flex items-start mb-12">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-lg font-bold text-blue-600">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-8 relative">
                  {index !== timelineItems.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-blue-200" />
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-900 mb-16"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Mobile-First Design',
                description: 'Responsive design that works perfectly on all devices',
                icon: '📱',
              },
              {
                title: 'High Performance',
                description: 'Optimized for speed with modern build tools',
                icon: '🚀',
              },
              {
                title: 'Smooth Animations',
                description: 'Beautiful animations powered by GSAP and Framer Motion',
                icon: '✨',
              },
              {
                title: 'Modern Routing',
                description: 'Client-side routing with React Router DOM',
                icon: '🛣️',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
