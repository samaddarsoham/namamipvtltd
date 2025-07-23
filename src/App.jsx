import React, { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Products from './pages/Products/Products'
import Contact from './pages/Contact/Contact'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import FloatingContactButtons from './components/FloatingContactButtons/FloatingContactButtons'
import './styles/global.css'
import './styles/responsive.css'
import Team from './pages/Team/Team'

// Component to handle scroll reset on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Reset scroll position to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })

    // Also reset document scroll
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // Small delay to ensure the page has rendered
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }, [pathname])

  return null
}

function App() {
  useEffect(() => {
    // Always start from top on page load/reload
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      })

      // Also reset document scroll
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // Immediate scroll to top
    scrollToTop()

    // Handle page refresh/reload
    const handleBeforeUnload = () => {
      scrollToTop()
    }

    // Handle page load
    const handleLoad = () => {
      scrollToTop()
    }

    // Use native smooth scrolling instead of Locomotive Scroll for better navigation
    document.documentElement.style.scrollBehavior = 'smooth'

    // Prevent scroll restoration by browser
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('load', handleLoad)

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <LoadingScreen />
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all route for 404 - redirects to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContactButtons />
      </div>
    </Router>
  )
}

export default App
