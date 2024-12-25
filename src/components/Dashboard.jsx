import React, { useState, useEffect } from 'react';
import './style.css';
import SideBar from './SideBar';

export default function Dashboard() {

  
  const user = JSON.parse(localStorage.getItem("user")) || "{}";
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [certData] = useState({
    totalCertificates: 4,
    expiredCertificates: 1,
    activeCertificates: 3,
    upcomingExpirations: 0,
    expiringThisMonth: 0,
    renewedThisYear: 1,
    recentActivities: [],
    pendingApproval: 0,
  });

  useEffect(() => {
    const fetchProfilePic = async () => {
      try 
      {
        const response = await fetch(`https://cmsbackendsdp-production.up.railway.app/`);
        if (response.ok) 
          {
          const blob = await response.blob();
          setProfilePicUrl(URL.createObjectURL(blob)); 
        } 
        
        else
        {
          console.error("Failed to fetch profile picture");
        }
      }
      catch (error) 
      {
        console.error("Error fetching profile picture:", error);
      }
    };

  
    if (user.id) {
      fetchProfilePic();
    }
  }, [user.id]);

  return (
    <>
      <h2 style={{ textAlign: 'center', color: 'White', fontFamily: 'Poppins, sans-serif' }}>Welcome {user.name}!</h2>

      <SideBar />

      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        {profilePicUrl ? (
          <img
            src={profilePicUrl}
            alt="Profile"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '4px solid #4facfe',
              boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
            }}
          />
        ) : (
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: '#ccc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            No Profile Picture
          </div>
        )}
      </div>

      <div style={{ marginTop: '150px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <div style={{ backgroundColor: '#0077b6', color: 'white', padding: '20px', borderRadius: '8px' }}>
            <h4>Total Certificates</h4>
            <p>{certData.totalCertificates}</p>
          </div>
          <div style={{ backgroundColor: '#ff7f50', color: 'white', padding: '20px', borderRadius: '8px' }}>
            <h4>Expired Certificates</h4>
            <p>{certData.expiredCertificates}</p>
          </div>
          <div style={{ backgroundColor: '#4caf50', color: 'white', padding: '20px', borderRadius: '8px' }}>
            <h4>Active Certificates</h4>
            <p>{certData.activeCertificates}</p>
          </div>
          <div style={{ backgroundColor: '#f4a261', color: 'white', padding: '20px', borderRadius: '8px' }}>
            <h4>Upcoming Expirations</h4>
            <p>{certData.upcomingExpirations}</p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
          <div style={{ backgroundColor: '#00b4d8', color: 'white', padding: '20px', borderRadius: '8px' }}>
            <h4>Expiring This Month</h4>
            <p>{certData.expiringThisMonth}</p>
          </div>
          <div style={{ backgroundColor: '#90be6d', color: 'white', padding: '20px', borderRadius: '8px' }}>
            <h4>Renewed This Year</h4>
            <p>{certData.renewedThisYear}</p>
          </div>
          <div style={{ backgroundColor: '#f1faee', color: 'black', padding: '20px', borderRadius: '8px' }}>
            <h4>Recent Activities</h4>
            <p>{certData.recentActivities.length > 0 ? certData.recentActivities.join(', ') : 'No recent activity'}</p>
          </div>
          <div style={{ backgroundColor: '#d4a5a5', color: 'white', padding: '20px', borderRadius: '8px' }}>
            <h4>Pending Approvals</h4>
            <p>{certData.pendingApproval}</p>
          </div>
        </div>
      </div>
    </>
  );
}
