import React from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";


export default function AdminSettings() 
{
  
  const navigate = useNavigate();

  const handleChangePassword = () =>
  {
    navigate("/changepassword")
  }


  return (
    <>
    <h1 className="settings-heading">Settings</h1>
    <div className="settings-page">
      <AdminNavbar/>
      <div className="settings-card-container">
        <div className="settings-card">
          <h2 className="settings-card-title">Password Settings</h2>
          <p className="settings-card-description">
            Change your Password Here Easily!!.
          </p>
          <button className="settings-button" onClick={handleChangePassword}>Change Password</button>
        </div>
        <div className="settings-card">
          <h2 className="settings-card-title">Notification Settings</h2>
          <p className="settings-card-description">
            Manage your email and push notification preferences.
          </p>
          <button className="settings-button">Manage Notifications</button>
        </div>
        <div className="settings-card">
          <h2 className="settings-card-title">Privacy Settings</h2>
          <p className="settings-card-description">
            Control who can see your profile and activities.
          </p>
          <button className="settings-button">Update Privacy</button>
        </div>
      </div>
    </div>
    </>
  );
}
