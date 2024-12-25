import React, { useState } from "react";
import axios from "axios";

export default function UserForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://cmsbackendsdp-production.up.railway.app", { email });
      alert(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again."); 
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label>Enter Your Registered Email</label>
        <input
          type="email"
          id="forgotpassword"
          placeholder="EX: John123@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
