import React from "react";
import { acData } from "../data/ac";
import { Link } from "react-router-dom";

const AC = () => {
  const firstFiveImages = acData.slice(0, 5);

  return (
    <>
      <div className="proTitle">
        <h2>Air Condition</h2>
      </div>
      <div className='proSection' style={{gap: '2rem', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
        {firstFiveImages.map((item, idx) => (
          <div
            className='imgBox responsive-card'
            style={{
              background: '#fff',
              borderRadius: '18px',
              boxShadow: '0 4px 24px rgba(80,80,180,0.10)',
              padding: '18px',
              margin: '12px 0',
              transition: 'transform 0.2s, box-shadow 0.2s',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.04)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(124,58,237,0.18)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(80,80,180,0.10)';
            }}
          >
            {idx === 0 && (
              <span style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: 'linear-gradient(90deg,#7c3aed,#4f46e5)',
                color: 'white',
                fontSize: '0.85rem',
                fontWeight: 700,
                borderRadius: '12px',
                padding: '4px 12px',
                letterSpacing: '1px',
                zIndex: 2
              }}>Best Seller</span>
            )}
            <Link to='/ac'>
              <img className='proImage' src={item.image} alt={item.name || ''} style={{borderRadius: '12px', width: '100%', marginBottom: '12px'}} />
            </Link>
            <div style={{width: '100%', textAlign: 'center'}}>
              <h3 style={{fontSize: '1.1rem', fontWeight: 700, color: '#4f46e5', margin: '8px 0 4px 0'}}>{item.name || 'AC'}</h3>
              <div style={{color: '#a21caf', fontWeight: 600, marginBottom: '6px'}}>${item.price || '---'}</div>
              <div style={{marginBottom: '10px'}}>
                <span style={{color: '#fbbf24', fontSize: '1.1rem'}}>★ ★ ★ ★ ☆</span>
                <span style={{color: '#a0aec0', fontSize: '0.9rem', marginLeft: '4px'}}>(32)</span>
              </div>
              <button className="button" style={{width: '100%', fontWeight: 600}}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AC;
