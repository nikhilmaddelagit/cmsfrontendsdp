import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await axios.post("https://cmsbackendsdp-production.up.railway.app/", { token, password });
      setMessage(response.data); 
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to reset password. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        {message && <p>{message}</p>} 
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
