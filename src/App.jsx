import React, { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Products from './pages/Products/Products'
import Contact from './pages/Contact/Contact'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import './styles/global.css'

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
    // Use native smooth scrolling instead of Locomotive Scroll for better navigation
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
