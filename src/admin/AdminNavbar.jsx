import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faAward, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function AdminNavbar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCertMenuOpen, setIsCertMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };


  const toggleCertMenu = () => {
    setIsCertMenuOpen(!isCertMenuOpen);
  };

  return (
    <div>
      <aside
        style={{
          width: "250px",
          height: "100vh",
          backgroundColor: "#343a40",
          color: "#fff",
          position: "fixed",
          top: "0",
          left: "0",
          display: "flex",
          flexDirection: "column",
          padding: "10px 0",
          fontFamily: 'Poppins, sans-serif',
          transition: 'all 0.3s ease-in-out', // Smooth transition
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            borderBottom: "1px solid #4a4a4a",
            marginBottom: "20px",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <i className="fas fa-layer-group" style={{ fontSize: "24px" }}></i>
          </div>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            Admin Dashboard
          </span>
        </div>

        <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
          <li style={{ marginBottom: "10px" }}>
            <a
              href="/admindashboard"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#007bff";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <FontAwesomeIcon icon={faHome} style={{ marginRight: "10px", fontSize: "18px" }} />
              Dashboard
            </a>
          </li>

          <li
            style={{
              marginBottom: "10px",
              position: "relative",
            }}
            onClick={toggleUserMenu}
          >
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
                cursor: "pointer",
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#007bff";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <FontAwesomeIcon icon={faUsers} style={{ marginRight: "10px", fontSize: "18px" }} />
              User Management
            </a>

            {isUserMenuOpen && (
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  margin: "0",
                  backgroundColor: "#23272b",
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  width: "100%",
                  zIndex: "10",
                  transition: 'all 0.3s ease-in-out', // Smooth transition for dropdown
                }}
              >
                <li>
                  <a
                    href="/admindeleteuser"
                    style={{
                      display: "block",
                      padding: "10px 20px",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Delete User
                  </a>
                </li>
                <li>
                  <a
                    href="/updateuser"
                    style={{
                      display: "block",
                      padding: "10px 20px",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Update User
                  </a>
                </li>
                <li>
                  <a
                    href="/viewallusers"
                    style={{
                      display: "block",
                      padding: "10px 20px",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    View All Users
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li
            style={{
              marginBottom: "10px",
              position: "relative",
            }}
            onClick={toggleCertMenu}
          >
            <a
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
                cursor: "pointer",
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#007bff";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <FontAwesomeIcon icon={faAward} style={{ marginRight: "10px", fontSize: "18px" }} />
              Certification Management
            </a>

            {isCertMenuOpen && (
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  margin: "0",
                  backgroundColor: "#23272b",
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  width: "100%",
                  zIndex: "10",
                }}
              >
                {/* <li>
                  <a
                    href="/admindeltecerti"
                    style={{
                      display: "block",
                      padding: "10px 20px",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Delete Certificate
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="/updatecerti"
                    style={{
                      display: "block",
                      padding: "10px 20px",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Update Certificate
                  </a>
                </li> */}
                <li>
                  <a
                    href="/adminviewcerti"
                    style={{
                      display: "block",
                      padding: "10px 20px",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    
                    View All Certificates
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li style={{ marginBottom: "10px" }}>
            <a
              href="/analytics"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              <FontAwesomeIcon icon={faChartBar} style={{ marginRight: "10px", fontSize: "18px" }} />
              Analytics
            </a>
          </li>

          <li style={{ marginBottom: "10px" }}>
            <a
              href="/adminsettings"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              <FontAwesomeIcon icon={faCog} style={{ marginRight: "10px", fontSize: "18px" }} />
              Settings
            </a>
          </li>

          <li>
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "10px", fontSize: "18px" }} />
              Logout
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
