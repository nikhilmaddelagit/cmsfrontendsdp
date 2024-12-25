import { Card } from 'antd';
import React from 'react';
import NavBar from './NavBar';

export default function AboutUs() {
  return (
    <div style={styles.container}>
      <NavBar/><br></br>
      <h1>About Us</h1><br></br><br></br>
      <div style={styles.cardContainer}>
        <Card style={styles.card}>
          <img
            src="https://i.ibb.co/PGj4w93/Mentor.png"
            alt="Mentor"
            style={styles.image}
          />
          <div style={styles.cardInfo}>
            <h4>Mr. J Surya Kiran</h4>
            <p>Mentor</p>
            <a
              href="www.linkedin.com/in/j-surya-kiran"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.linkedinLink}
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </Card>
        <Card style={styles.card}>
          <img
            src="https://i.ibb.co/g6MV2X6/Nikhil.jpg"
            alt="Nikhil"
            style={styles.image}
          />
          <div style={styles.cardInfo}>
            <h4>Nikhil</h4>
            <p>2200030611</p>
            <a
              href="https://www.linkedin.com/in/nikhil-maddela"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.linkedinLink}
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </Card>
        <Card style={styles.card}>
          <img
            src="https://i.ibb.co/tBHR5F1/curator.jpg"
            alt="Curator"
            style={styles.image}
          />
          <div style={styles.cardInfo}>
            <h4>Lakshman</h4>
            <p>2200030326</p>
            <a
              href="https://www.linkedin.com/in/lakshmana-swamy-49a428255/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.linkedinLink}
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </Card>
        <Card style={styles.card}>
          <img
            src="https://i.ibb.co/m0cZvxF/Sat.png"
            alt="Sat"
            style={styles.image}
          />
          <div style={styles.cardInfo}>
            <h4>Sathvik</h4>
            <p>2200030633</p>
            <a
              href="https://www.linkedin.com/in/kstsathvik/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.linkedinLink}
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',  // Ensure it wraps on smaller screens
    gap: '30px',
  },
  card: {
    width: '250px',
    height: '350px',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  cardInfo: {
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  },
  linkedinLink: {
    textDecoration: 'none',
    color: '#0077B5',
    fontSize: '1rem',
    marginTop: '10px',
    display: 'inline-block',
  },
};
