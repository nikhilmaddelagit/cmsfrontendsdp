import React from 'react';
import AdminNavbar from './AdminNavbar'; 
import './AdminDashboard.css'; 
import { Card, Row, Col } from 'antd'; 

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <div className="main-content">
        <h1>Welcome to Admin Dashboard</h1>
        <p className="dashboard-subtitle">Manage your data and track performance efficiently.</p>
        <Row gutter={16} className="dashboard-cards">
          <Col xs={24} sm={12} md={8}>
            <Card
              className="dashboard-card"
              title="Total Users"
              bordered={false}
            >
              <p className="card-value">10</p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              className="dashboard-card"
              title="Active Certificates"
              bordered={false}
            >
              <p className="card-value">3</p>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              className="dashboard-card"
              title="Pending Approvals"
              bordered={false}
            >
              <p className="card-value">5</p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
