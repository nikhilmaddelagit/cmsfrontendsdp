import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

export default function ViewAllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://cmsbackendsdp-production.up.railway.app")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this User Permanently?")) {
      try {
        await axios.delete(`http://cmsbackendsdp-production.up.railway.app`);
        alert("User deleted successfully!");
        setUsers(users.filter((user) => user.id !== id));
      }
       catch (err) 
       {
        console.error("Error deleting User:", err);
        alert("Failed to delete User.");
      }
    }
  };

  return (
    <div style={styles.mainContent}>
      <AdminNavbar/>
        <h3 style={styles.pageTitle}>Delete Users</h3>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.headerCell}>ID</th>
              <th style={styles.headerCell}>NAME</th>
              <th style={styles.headerCell}>GENDER</th>
              <th style={styles.headerCell}>EMAIL</th>
              <th style={styles.headerCell}>CONTACT</th>
              <th style={styles.headerCell}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={styles.row}>
                <td style={styles.cell}>{user.id}</td>
                <td style={styles.cell}>{user.name}</td>
                <td style={styles.cell}>{user.gender}</td>
                <td style={styles.cell}>{user.email}</td>
                <td style={styles.cell}>{user.contact}</td>
                <td style={styles.cell}>
                  <button
                    onClick={() => handleDelete(user.id)}
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  mainContent: {
    padding: "20px",
    minHeight: "100vh",
  },
  tableContainer: {
    margin: "0 auto",
    maxWidth: "800px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "white",
  },
  pageTitle: {
    textAlign: "center",
    margin: "20px 0",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  headerCell: {
    backgroundColor: "green",
    color: "white",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  row: {
    borderBottom: "1px solid #ddd",
    transition: "background-color 0.3s ease",
  },
  cell: {
    padding: "10px",
    fontSize: "14px",
    color: "#555",
  },
  deleteButton: {
    backgroundColor: "#ff4d4f",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};
