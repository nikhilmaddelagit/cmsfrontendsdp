import React from 'react';
import Navbar from './NavBar.jsx';

const LandingPage = () => {
  return (
    <>
          <Navbar/>

  
    <div style={{ fontFamily: 'Poppins, sans-serif', margin: 0, padding: 0, boxSizing: 'border-box', backgroundColor: '#f5f5f5', color: '#333' }}>


      <section
        style={{
          background: 'linear-gradient(to right, #4e73df, #1cc88a)',
          color: '#fff',
          padding: '150px 100px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ zIndex: 1 }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px' }}>
            Certification Management System
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', fontWeight: '300' }}>
            Streamline your professional certifications, track expiration dates, and manage renewals all in one place.
          </p>
          <a
            href="/registration"
            style={{
              backgroundColor: '#ff6f61',
              color: '#fff',
              padding: '12px 30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '5px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#e05a50')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff6f61')}
          >
            Get Started
          </a>
        </div>
      </section>

      <section style={{ padding: '50px 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Features</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              width: '300px',
            }}
          >
            <i
              className="fas fa-certificate"
              style={{ fontSize: '3rem', color: '#1cc88a', marginBottom: '15px' }}
            ></i>
            <h3 style={{ marginBottom: '15px' }}>Track Certifications</h3>
            <p>Easily record and manage all your certifications with expiration date tracking.</p>
          </div>
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              width: '300px',
            }}
          >
            <i
              className="fas fa-calendar-check"
              style={{ fontSize: '3rem', color: '#ff6f61', marginBottom: '15px' }}
            ></i>
            <h3 style={{ marginBottom: '15px' }}>View Certificates</h3>
            <p>View your certificates any time any where easily</p>
          </div>
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              width: '300px',
            }}
          >
            <i
              className="fas fa-cloud-upload-alt"
              style={{ fontSize: '3rem', color: '#4e73df', marginBottom: '15px' }}
            ></i>
            <h3 style={{ marginBottom: '15px' }}>Secure Cloud Storage</h3>
            <p>Store and access your certificates securely anytime, anywhere.</p>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: '#1cc88a',
          color: '#fff',
          padding: '60px 0',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Ready to take control of your certifications?
        </h2>
        <a
          href="/registration"
          style={{
            backgroundColor: '#ff6f61',
            color: '#fff',
            padding: '12px 30px',
            fontSize: '1.2rem',
            fontWeight: '600',
            borderRadius: '5px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#e05a50')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff6f61')}
        >
          Join Now
        </a>
      </section>

      <footer
        style={{
          backgroundColor: '#333',
          color: '#fff',
          textAlign: 'center',
          padding: '20px 0',
          marginTop: 'auto',
        }}
      >
        <p>&copy; 2024 Certification Management System. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default LandingPage;
