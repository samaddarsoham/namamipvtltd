import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  const timelineData = [
    {
      year: "2009",
      image: "/background/company.jpg",
      title: "Company Established",
      description: "Founded with a vision to provide premium wood products to Eastern India"
    },
    {
      year: "2009",
      image: "/background/partner.jpg",
      title: "CenturyPly Partnership",
      description: "Became an authorized distributor of CenturyPly products"
    },
    {
      year: "2012",
      image: "/background/crown.png",
      title: "Royal Club Member",
      description: "Achieved Royal Club Member status with CenturyPly"
    },
    {
      year: "2012",
      image: "/background/leader.jpg",
      title: "Leading Distributor",
      description: "Supplying to top builders: Shapoorji Pallonji, Siddha, Solaris, and Alcove"
    },
    {
      year: "2014",
      image: "/background/fame.jpg",
      title: "Industry Recognition",
      description: "Trusted OEM supplier to major industries including Jindal, IFB, and Crescent"
    }
  ];

  return (
    <div className="about-page">
      <div className="about-page__container">
        <h1 className="about-page__title">
          About Namami Plyboard
        </h1>
        
        <p className="about-page__subtitle">
          Your Trusted Partner in Premium Wood Solutions
        </p>

        <div className="about-page__content">
          <div className="about-timeline">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year timeline-year--image">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="timeline-year__image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="timeline-year__fallback">
                    {item.year}
                  </div>
                </div>

                <div className={`timeline-content timeline-content--golden ${index % 2 === 1 ? 'timeline-content--left-year' : ''}`}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="timeline-content__year">
                    <span className="timeline-content__year-text">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="about-page__cta">
            <h3>Ready to Start Your Project?</h3>
            <p>Partner with us for premium wood solutions and experience the difference of working with Eastern India's trusted distributor.</p>
            <div className="about-cta-buttons">
              <Link to="/products" className="btn btn--primary btn--large">
                Explore Our Products
              </Link>
              <Link to="/contact" className="btn btn--secondary btn--large">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
