import { useState } from "react";
import axios from "axios";
import { message } from "antd"; 
import SideBar from './SideBar';


export default function AddCertificate() {

  const user=JSON.parse(localStorage.getItem("user"))||"{}";


  const [formData, setFormData] = useState({
    certificationName: "",
    issuedBy: "",
    issueDate: "",
    expiryDate: "",
    status: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        file: files[0],
      }));
    } 
    else 
    {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      const certificateData = {
        certiname: formData.certificationName,
        issuedBy: formData.issuedBy,
        issuedate: formData.issueDate,
        expirydate: formData.expiryDate,
        status: formData.status,
       
      };

      console.log(certificateData);
      data.append("file", formData.file);
      data.append("data", new Blob([JSON.stringify(certificateData)], { type: "application/json" }));

      const response = await axios.post(`https://cmsbackendsdp-production.up.railway.app/certificate/addcertificate/${user.id}`, data);


      setFormData({
        certificationName: "",
        issuedBy: "",
        issueDate: "",
        expiryDate: "",
        status: "",
        file: null,
      });


      message.success("Certificate added successfully!");
    } 
    catch (error) 
    {

      message.error("Error uploading certificate. Please try again.");
      console.error(error);
    }
  };

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      minHeight: "50vh",
      color: "#fff",
      textAlign: "center",
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
      color: "Black",
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
      <h2 style={{ textDecoration: "underline" }}>Add New Certificate</h2>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <label style={styles.label}>Certification Name</label>
        <input
          type="text"
          name="certificationName"
          value={formData.certificationName}
          onChange={handleChange}
          required
          style={styles.input}
          placeholder="Enter Certificate Name"
        />


        <label style={styles.label}>Issued By</label>
        <input
          type="text"
          name="issuedBy"
          value={formData.issuedBy}
          onChange={handleChange}
          required
          style={styles.input}
          placeholder="Enter Issued By"
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

        <label style={styles.label}>Upload Your Certificate (Image) </label>
        <input
          type="file"
          name="file"
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => (e.target.style = { ...styles.button, ...styles.buttonHover })}
          onMouseLeave={(e) => (e.target.style = styles.button)}
        >
          Add Certificate
        </button>
      </form>
    </div>
  );
}
