import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faAward, faChartBar, faCog } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

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
          fontFamily: "Poppins, sans-serif",
          transition: "all 0.3s ease-in-out",
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
            <Link
              to="/admindashboard"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
                transition: "all 0.3s ease-in-out",
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
            </Link>
          </li>

          <li
            style={{
              marginBottom: "10px",
              position: "relative",
            }}
            onClick={toggleUserMenu}
          >
            <Link
              to="#"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
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
            </Link>

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
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <li>
                  <Link
                    to="/admindeleteuser"
                    style={{
                      display: "block",
                      padding: "10px 20px",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Delete User
                  </Link>
                </li>
                <li>
                  <Link
                    to="/updateuser"
                    style={{
                      display: "block",
                      padding: "10px 20px",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Update User
                  </Link>
                </li>
                <li>
                  <Link
                    to="/viewallusers"
                    style={{
                      display: "block",
                      padding: "10px 20px",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    View All Users
                  </Link>
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
            <Link
              to="#"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
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
            </Link>

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
                <li>
                  <Link
                    to="/admin/adminviewcerti"
                    style={{
                      display: "block",
                      padding: "10px 20px",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    View All Certificates
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li style={{ marginBottom: "10px" }}>
            <Link
              to="/analytics"
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
            </Link>
          </li>

          <li style={{ marginBottom: "10px" }}>
            <Link
              to="/adminsettings"
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
            </Link>
          </li>

          <li>
            <Link
              to="/"
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
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
