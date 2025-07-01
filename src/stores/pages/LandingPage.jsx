import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

// New HeroSection component
const HeroSection = () => (
  <section style={{
    width: '100%',
    minHeight: '340px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(120deg, #a5b4fc 0%, #f3e8ff 100%)',
    color: '#312e81',
    padding: '48px 0 32px 0',
    marginBottom: '2rem',
    borderRadius: '0 0 32px 32px',
    boxShadow: '0 8px 32px rgba(124,58,237,0.08)'
  }}>
    <h1 style={{fontSize: '2.8rem', fontWeight: 900, marginBottom: '18px', letterSpacing: '1px'}}>Welcome to E-Mart</h1>
    <p style={{fontSize: '1.3rem', maxWidth: '600px', textAlign: 'center', marginBottom: '28px', color: '#4f46e5'}}>
      Discover the best deals on electronics, fashion, home essentials, and more. Shop smart, shop cool!
    </p>
    <a href="#products" style={{textDecoration: 'none'}}>
      <button className="button" style={{fontSize: '1.1rem', padding: '14px 36px'}}>Shop Now</button>
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