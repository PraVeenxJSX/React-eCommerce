import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

// New HeroSection component
const HeroSection = () => (
  <section className="hero-section">
    <h1>Welcome to E-Mart</h1>
    <p>
      Discover the best deals on electronics, fashion, home essentials, and more. Shop smart, shop cool!
    </p>
    <a href="#products" style={{textDecoration: 'none'}}>
      <button className="button">Shop Now</button>
    </a>
  </section>
)

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <Products />
    </div>
  )
}

export default LandingPage