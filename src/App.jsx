import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import LandingPage from './stores/pages/LandingPage'
import Kitchen from './stores/components/Kitchen'
import MobilePage from './stores/pages/MobilePage'
import CompPage from './stores/pages/CompPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import FurniturePage from './stores/pages/FurniturePage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import MobileSingle from './stores/singles/MobileSingle'
import UserCart from './stores/UserCart'
import FridgePage from './stores/pages/FridgePage'
import ComputerSingle from './stores/singles/ComputerSingle'
import FurnitureSingle from './stores/singles/FurnitureSingle'
import KitchenSingle from './stores/singles/KitchenSingle'
import AcSingle from './stores/singles/AcSingle'
import MenSingle from './stores/singles/MenSingle'
import WatchSingle from './stores/singles/WatchSingle'
import WomanSingle from './stores/singles/WomanSingle'
import FridgeSingle from './stores/singles/FridgeSingle'

// Modern Footer component
const Footer = () => (
  <footer style={{
    width: '100%',
    background: 'linear-gradient(90deg, #7c3aed 0%, #4f46e5 100%)',
    color: 'white',
    padding: '32px 0 18px 0',
    marginTop: '3rem',
    borderRadius: '32px 32px 0 0',
    boxShadow: '0 -4px 24px rgba(80,80,180,0.08)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '18px',
  }}>
    <div style={{display: 'flex', gap: '2.5rem', fontSize: '1.1rem', fontWeight: 500}}>
      <a href="#" style={{color: 'white', textDecoration: 'none'}}>Home</a>
      <a href="#" style={{color: 'white', textDecoration: 'none'}}>Shop</a>
      <a href="#" style={{color: 'white', textDecoration: 'none'}}>About</a>
      <a href="#" style={{color: 'white', textDecoration: 'none'}}>Contact</a>
    </div>
    <div style={{display: 'flex', gap: '1.5rem', fontSize: '1.6rem'}}>
      <a href="#" aria-label="Instagram" style={{color: 'white'}}><span role="img" aria-label="Instagram">📸</span></a>
      <a href="#" aria-label="Twitter" style={{color: 'white'}}><span role="img" aria-label="Twitter">🐦</span></a>
      <a href="#" aria-label="Facebook" style={{color: 'white'}}><span role="img" aria-label="Facebook">📘</span></a>
      <a href="#" aria-label="YouTube" style={{color: 'white'}}><span role="img" aria-label="YouTube">▶️</span></a>
    </div>
    <div style={{fontSize: '1rem', color: '#e0e7ff', marginTop: '8px'}}>
      &copy; {new Date().getFullYear()} E-Mart. All rights reserved.
    </div>
  </footer>
)

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <LandingPage />}/>
        <Route path= '/kitchen' element = {<KitchenPage />} />
        <Route path='/mobiles' element= {<MobilePage />} />
        <Route path='/computers' element= {<CompPage />} />
        <Route path='/watch' element= {<WatchPage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/men' element= {<MenPage />} /> 
        <Route path='/woman' element= {<WomanPage />} />             
        <Route path='/furniture' element= {<FurniturePage />} />             
        <Route path='/ac' element= {<AcPage />} />             
           <Route path='/mobiles/:id' element = {<MobileSingle />} />
      <Route path='/cart' element = {<UserCart />} />
      <Route path='/ac/:id' element = {<AcSingle />} />
      <Route path='/computers/:id' element = {<ComputerSingle />} />
      <Route path='/furniture/:id' element = {<FurnitureSingle />} />
      <Route path='/kitchen/:id' element = {<KitchenSingle />} />
      <Route path='/men/:id' element = {<MenSingle />} />
      <Route path='/watch/:id' element = {<WatchSingle />} />
      <Route path='/woman/:id' element = {<WomanSingle />} />
      <Route path='/fridge/:id' element = {<FridgeSingle />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App