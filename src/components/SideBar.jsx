import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlusCircle, faList, faTrashAlt, faGear, faPen, faTrain, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { FaSignOutAlt } from 'react-icons/fa';

export default function SideBar() {
  const navigate = useNavigate(); // For navigation on logout

  const sidebarStyle = {
    width: '300px',
    height: '100vh',
    background: '#0077b6',
    padding: '20px',
    boxShadow: '2px 0 10px rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    left: '0', // Positioned to the extreme left
    top: '0', // Positioned at the top of the viewport
    zIndex: '1000', // Ensures it stays above other elements
    fontFamily: 'Poppins, sans-serif',
  };

  const titleStyle = {
    color: 'white',
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '20px',
    letterSpacing: '1px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  };

  const itemStyle = {
    marginBottom: '15px',
    transition: 'transform 0.3s ease-in-out',
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '10px',
    color: 'white',
    fontSize: '18px',
    borderRadius: '8px',
    transition: 'all 0.3s ease-in-out',
  };

  const linkHoverStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.05)',
  };

  const iconStyle = {
    marginRight: '10px',
    fontSize: '22px',
    transition: 'transform 0.3s ease-in-out',
  };

  const iconHoverStyle = {
    transform: 'rotate(20deg)',
  };

  const textHoverStyle = {
    fontWeight: 'bold',
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={titleStyle}>Dashboard</h2>
      <ul style={listStyle}>
        {[{ to: '/profile', icon: faUser, label: 'Profile' },
          { to: '/add', icon: faPlusCircle, label: 'Add Certificate' },
          { to: '/viewall', icon: faList, label: 'View All Certificates' },
          { to: '/delete', icon: faTrashAlt, label: 'Delete Certificates' },
          { to: '/update', icon: faPen, label: 'Update Certificates' },
          { to: '/training', icon: faChalkboardTeacher , label: 'Training' },
          { to: '/settings', icon: faGear, label: 'Settings' }]
          .map((item, index) => (
            <li
              key={index}
              style={itemStyle}
              onMouseEnter={(e) => {
                e.currentTarget.firstChild.style.backgroundColor = linkHoverStyle.backgroundColor;
                e.currentTarget.firstChild.style.transform = linkHoverStyle.transform;
                e.currentTarget.firstChild.firstChild.style.transform = iconHoverStyle.transform;
                e.currentTarget.firstChild.lastChild.style.fontWeight = textHoverStyle.fontWeight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.firstChild.style.backgroundColor = 'transparent';
                e.currentTarget.firstChild.style.transform = 'none';
                e.currentTarget.firstChild.firstChild.style.transform = 'none';
                e.currentTarget.firstChild.lastChild.style.fontWeight = 'normal';
              }}
            >
              <Link to={item.to} style={linkStyle}>
                <FontAwesomeIcon icon={item.icon} style={iconStyle} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        <li
          style={itemStyle}
          className='flex gap-1 mr-0 hover:cursor-pointer'
          onClick={() => {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            navigate('/login');
          }}
        >
          <Link to='/login' style={linkStyle}>
            <FaSignOutAlt style={iconStyle} />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
