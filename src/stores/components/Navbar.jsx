import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

const Navbar = () => {

  const {cartItems }= useCart()
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-section">
      <div className="navSection" style={{ position: 'relative' }}>
        <Link to='/' className="custom-link">
          <div className="title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '2rem' }}>🛒</span>
            <h2>E-Mart</h2>
          </div>
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="navbar-hamburger"
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '2rem',
            marginLeft: 'auto',
            cursor: 'pointer',
          }}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span role="img" aria-label="menu">☰</span>
        </button>
        {/* Desktop cart only */}
        <div className="navbar-desktop-section">
          <Link to='/cart' className="custom-link">
            <div className="cart" aria-label="Cart">
              <span style={{ fontSize: '1.2rem', marginRight: '4px' }}>🛍️</span>
              Cart
              <span>{cartItems.length}</span>
            </div>
          </Link>
        </div>
      </div>
      {/* Mobile dropdown: cart, submenu */}
      <div
        className="navbar-mobile-dropdown"
        style={{
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          background: 'rgba(255,255,255,0.98)',
          boxShadow: '0 8px 32px rgba(124,58,237,0.08)',
          borderRadius: '0 0 18px 18px',
          padding: '1.2rem 1rem',
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          zIndex: 999,
        }}
      >
        <div className="user" style={{ marginBottom: '1rem', justifyContent: 'flex-start' }}>
          <Link to='/cart' className="custom-link">
            <div className="cart" aria-label="Cart">
              <span style={{ fontSize: '1.2rem', marginRight: '4px' }}>🛍️</span>
              Cart
              <span>{cartItems.length}</span>
            </div>
          </Link>
        </div>
        <div className="subMenu" style={{ background: 'transparent', boxShadow: 'none', marginBottom: 0 }}>
          <ul style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', width: '100%' }}>
            <Link to="/mobiles" className="custom-link"><li>Mobiles</li></Link>
            <Link to="/computers" className="custom-link"><li>Computers</li></Link>
            <Link to="/watch" className="custom-link"><li>Watches</li></Link>
            <Link to="/men" className="custom-link"><li>Mens Wear</li></Link>
            <Link to="/woman" className="custom-link"><li>Woman Wear</li></Link>
            <Link to="/furniture" className="custom-link"><li>Furniture</li></Link>
            <Link to="/kitchen" className="custom-link"><li>Kitchen</li></Link>
            <Link to="/fridge" className="custom-link"><li>Fridge</li></Link>
            <Link to="/" className="custom-link"><li>Books</li></Link>
            <Link to="/" className="custom-link"><li>Speakers</li></Link>
            <Link to="/" className="custom-link"><li>TV's</li></Link>
            <Link to="/ac" className="custom-link"><li>AC</li></Link>
          </ul>
        </div>
      </div>
      {/* Desktop submenu */}
      <div className="subMenu navbar-desktop-section">
        <ul>
          <Link to="/mobiles" className="custom-link"><li>Mobiles</li></Link>
          <Link to="/computers" className="custom-link"><li>Computers</li></Link>
          <Link to="/watch" className="custom-link"><li>Watches</li></Link>
          <Link to="/men" className="custom-link"><li>Mens Wear</li></Link>
          <Link to="/woman" className="custom-link"><li>Woman Wear</li></Link>
          <Link to="/furniture" className="custom-link"><li>Furniture</li></Link>
          <Link to="/kitchen" className="custom-link"><li>Kitchen</li></Link>
          <Link to="/fridge" className="custom-link"><li>Fridge</li></Link>
          <Link to="/" className="custom-link"><li>Books</li></Link>
          <Link to="/" className="custom-link"><li>Speakers</li></Link>
          <Link to="/" className="custom-link"><li>TV's</li></Link>
          <Link to="/ac" className="custom-link"><li>AC</li></Link>
        </ul>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .navbar-hamburger {
            display: block !important;
          }
          .navbar-desktop-section {
            display: none !important;
          }
          .subMenu.navbar-desktop-section {
            display: none !important;
          }
        }
        @media (max-width: 575px) {
          .navSection {
            flex-direction: row;
            align-items: center;
            gap: 0;
            padding: 8px 2px;
          }
          .title h2 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
