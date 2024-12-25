import axios from 'axios';
import React, { useState } from 'react'

export default function ChangePassword() 
{

    const user=JSON.parse(localStorage.getItem("user"))||"{}";

    const [email, SetEmail] = useState('');
    const [oldPassword, SetOldPassword] = useState('');
    const [newPassword, SetNewPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const params = new URLSearchParams();
        params.append('email', user.email);
        params.append('oldPwd', oldPassword);
        params.append('newPwd', newPassword);
    
        try {
            const response = await axios.post(
                'https://cmsbackendsdp-production.up.railway.app/user/changepassword' + params.toString(),
                null, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            alert(response.data || 'Password changed successfully!');
        } 
        catch (error) 
        {
            console.error('Error:', error);
            alert(error.response?.data?.message || 'An error occurred while changing the password.');
        }
    };


  return (
    <div>
      <h1>Change Password</h1><br></br>

      <form onSubmit={handleSubmit}>

        <label>Enter Old Password</label>
        <input type="text"  value={oldPassword} onChange={(e) => SetOldPassword(e.target.value)}></input>

        <label>Enter New Password</label>
        <input type="text" value={newPassword} onChange={(e) => SetNewPassword(e.target.value)}></input>

        <button type="submit">Submit</button>



      </form>
    </div>
  )
}
