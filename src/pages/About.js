import React from 'react';

function About() {
  return (
    <div className="about-container" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Who We Are</h2>
      <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
        Beauty Brand is dedicated to delivering top-tier cosmetics crafted with premium, natural ingredients. Our mission is to enhance your natural beauty while promoting sustainable and cruelty-free practices.
      </p>
      
      <blockquote style={{ fontStyle: 'italic', background: '#fff0f5', padding: '20px', borderRadius: '8px', margin: '20px 0', borderLeft: '5px solid #ff69b4' }}>
        "Embrace your unique glow, because true elegance springs from within." — MI&I
      </blockquote>

      <p style={{ fontSize: '16px', color: '#777' }}>
        Our products undergo meticulous dermatological testing, and we proudly remain 100% cruelty-free, guaranteeing honesty and premium quality across our entire collection.
      </p>
    </div>
  );
}

export default About;