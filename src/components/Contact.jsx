import { useState } from "react";
import NavBar from "./NavBar";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    // This will prevent page refresh
    e.preventDefault();

    // replace this with your own unique endpoint URL
    fetch("https://formcarry.com/s/XXXXXXX", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ email: email, message: message })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>;
  }

  if (submitted) {
    return (
      <p style={{ color: "green", fontWeight: "bold" }}>
        We've received your message, thank you for contacting us!
      </p>
    );
  }

  return (
    <div>
    <NavBar/>
    <form
      onSubmit={submit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        border: "2px solid #eee",
        borderRadius: "10px",
        backgroundColor: "ocean blue",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Contact Us</h2>

      <label htmlFor="email" style={{ fontSize: "16px", fontWeight: "bold" }}>
        Email
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          outline: "none",
          backgroundColor: "ocean blue", // Set background to white
          color: "#333", // Set text color to dark
          transition: "border 0.3s",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
        }}
        onFocus={(e) => (e.target.style.border = "1px solid #4a90e2")}
        onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
      />

      <label htmlFor="message" style={{ fontSize: "16px", fontWeight: "bold" }}>
        Message
      </label>
      <textarea
      
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          outline: "none",
          background: '#d3d0d0',
          color: "white", // Set text color to dark
          height: "100px",
          transition: "border 0.3s",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
        }}
        onFocus={(e) => (e.target.style.border = "1px solid #4a90e2")}
        onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
      />

      <button
        type="submit"
        style={{
          padding: "12px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "#4a90e2",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s",
          marginTop: "10px"
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#357ABD")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#4a90e2")}
      >
        Send
      </button>
    </form>

    <h3 style={{ color: "#4a90e2" }}>Our Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30794.99901611088!2d80.00016184904104!3d15.247338910411909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b0b9193c525ff%3A0x1ad3528ca5d99904!2sSingarayakonda%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1733566148100!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "none", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>

    

  );
}
