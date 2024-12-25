import React from 'react';
import Navbar from './NavBar.jsx';

const Home = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          fontFamily: 'Poppins, sans-serif',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5',
          color: '#333',
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            background: 'linear-gradient(to right, #4e73df, #1cc88a)',
            color: '#fff',
            textAlign: 'center',
            padding: '0 50px',
          }}
        >
          <div>
            <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px' }}>
              Certification Management Made Easy
            </h1>
            <p style={{ fontSize: '1.2rem', fontWeight: '300', marginBottom: '40px' }}>
              Manage and track your certifications effortlessly with our intuitive platform.
            </p>
            <a
              href="#features"
              style={{
                backgroundColor: '#fff',
                color: '#1cc88a',
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: '500',
                textDecoration: 'none',
                borderRadius: '25px',
                transition: 'background-color 0.3s',
              }}
             
            >
              Explore Features
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          style={{
            padding: '80px 0',
            backgroundColor: '#fff',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Our Features</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                backgroundColor: '#f9f9f9',
                padding: '40px 30px',
                width: '300px',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              <i
                className="fas fa-certificate"
                style={{ fontSize: '3rem', color: '#1cc88a', marginBottom: '20px' }}
              ></i>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Track Certifications</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '300' }}>
                Keep all your certification details organized and stay on top of expiration dates.
              </p>
            </div>
            <div
              style={{
                backgroundColor: '#f9f9f9',
                padding: '40px 30px',
                width: '300px',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              <i
                className="fas fa-calendar-check"
                style={{ fontSize: '3rem', color: '#4e73df', marginBottom: '20px' }}
              ></i>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Expiration Alerts</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '300' }}>
                Receive notifications when your certifications are about to expire, so you never miss a deadline.
              </p>
            </div>
            <div
              style={{
                backgroundColor: '#f9f9f9',
                padding: '40px 30px',
                width: '300px',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            >
              <i
                className="fas fa-cloud-upload-alt"
                style={{ fontSize: '3rem', color: '#ff6f61', marginBottom: '20px' }}
              ></i>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Cloud Storage</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '300' }}>
                Safely store your certificates in the cloud and access them from anywhere, anytime.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          style={{
            padding: '80px 0',
            backgroundColor: '#f5f5f5',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>How It Works</h2>
          <p style={{ fontSize: '1.2rem', fontWeight: '300', marginBottom: '40px' }}>
            Getting started is easy! Simply create an account, add your certifications, and let our platform handle the rest.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '50px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ width: '250px' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>1. Sign Up</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '300' }}>
                Register for a free account to start managing your certifications.
              </p>
            </div>
            <div style={{ width: '250px' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>2. Add Certifications</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '300' }}>
                Easily upload and organize all your certification information.
              </p>
            </div>
            <div style={{ width: '250px' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>3. Get Alerts</h3>
              <p style={{ fontSize: '1.1rem', fontWeight: '300' }}>
                Receive timely alerts about upcoming expiration dates.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          style={{
            padding: '80px 0',
            backgroundColor: '#1cc88a',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Get in Touch</h2>
          <p style={{ fontSize: '1.2rem', fontWeight: '300', marginBottom: '40px' }}>
            Have questions? Reach out to us, and we'll be happy to help.
          </p>
          <a
            href="mailto:support@certification.com"
            style={{
              backgroundColor: '#fff',
              color: '#1cc88a',
              padding: '15px 30px',
              fontSize: '1.1rem',
              fontWeight: '500',
              textDecoration: 'none',
              borderRadius: '25px',
              transition: 'background-color 0.3s',
            }}
            
          >
            Contact Us
          </a>
        </section>

        {/* Footer */}
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

export default Home;
