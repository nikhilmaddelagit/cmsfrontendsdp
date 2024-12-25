import { Card } from 'antd';
import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';


export default function Profile() 
{
  const user=JSON.parse(localStorage.getItem("user"))||"{}";

  const [profilePicUrl, setProfilePicUrl] = useState('');

  useEffect(() => {
    const fetchProfilePic = async () => {
      try 
      {
        const response = await fetch(`https://cmsbackendsdp-production.up.railway.app`);
        if (response.ok) 
          {
          const blob = await response.blob();
          setProfilePicUrl(URL.createObjectURL(blob)); // Create a URL for the image blob
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

    if (user.id) 
      {
      fetchProfilePic();
    }
  }, [user.id]);

  return (
    <div>
      <SideBar/>
<Card>
      
  <h3>Name:{user.name}</h3>
  <h3>Email:{user.email}</h3>
  <h3>Gender:{user.gender}</h3>
  <h3>Contact:{user.contact}</h3>


</Card>
<div style={{ position: 'absolute', top: '20px', right: '20px' }}>
  {profilePicUrl ? (
    <img
      src={profilePicUrl}
      alt="Profile"
      style={{
        width: '120px', // Increased size
        height: '120px', // Increased size
        borderRadius: '50%',
      }}
    />
  ) : (
    <div
      style={{
        width: '120px', // Increased size
        height: '120px', // Increased size
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
    </div>
  );
}