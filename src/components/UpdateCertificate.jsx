import { useState } from "react";
import axios from "axios";
import { message } from "antd";
import SideBar from './SideBar';


export default function UpdateCertificate()
{
  const [formData, setFormData] = useState({
    id:"",
    certificationName: "",
    issuedBy: "",
    issueDate: "",
    expiryDate: "",
    status: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put("https://cmsbackendsdp-production.up.railway.app/", formData);

        setFormData({
          certificationName: "",
          issuedBy: "",
          issueDate: "",
          expiryDate: "",
          status: "",
        });
        message.success("Certificate Updated Successfully!!")
      }
    catch (error) 
    {

     message.error("Error updating certificate. Please try again.")
     console.error(error);

    }
  };

  const [isHovering, setIsHovering] = useState(false);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      minHeight: "50vh",
      color: "#fff",
    },
    formContainer: {
      maxWidth: "900px",
      margin: "20px auto",
      padding: "100px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "1rem",
      color: "black",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    select: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    button: {
      background: "#4CAF50",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "transform 0.2s ease, background 0.3s ease",
    },
    buttonHover: {
      background: "#45a049",
      transform: "scale(1.1)",
    },
  };

  return (
    <div style={styles.container}>
      <SideBar/>
      <h2 style={{ textDecoration: "underline" }}>Update Certificate</h2>
      <form onSubmit={handleSubmit} style={styles.formContainer}>

      <label>ID</label>
      <input type="number" name="id" value={formData.id} onChange={handleChange} required />


        <label style={styles.label}>Certification Name</label>
        <input
          type="text"
          name="certificationName"
          value={formData.certificationName}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Issued By</label>
        <input
          type="text"
          name="issuedBy"
          value={formData.issuedBy}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Issue Date</label>
        <input
          type="date"
          name="issueDate"
          value={formData.issueDate}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Expiry Date</label>
        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
          style={styles.select}
        >
          <option value="">---Select---</option>
          <option value="Active">Active</option>
          <option value="Expired">Expired</option>
        </select>

        <button
          type="submit"
          style={isHovering ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          Update Certificate
        </button>
      </form>
    </div>
  );
}
