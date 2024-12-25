import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import { Table, Button, message, Spin } from 'antd';

export default function ViewAllCertificates() {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCertificates = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://cmsbackendsdp-production.up.railway.app/certificate/viewall/${user.id}`);
      setCertificates(response.data);
    } 
    catch (error) 
    {
      message.error('Failed to load certificates. Please try again later.');
    }
     finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const handleViewClick = (id) => {
    navigate(`/certificate/${id}`);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Certificate Name',
      dataIndex: 'certiname',
      key: 'certiname',
    },
    {
      title: 'Issued By',
      dataIndex: 'issuedBy',
      key: 'issuedBy',
    },
    {
      title: 'Issue Date',
      dataIndex: 'issuedate',
      key: 'issuedate',
    },
    {
      title: 'Expiry Date',
      dataIndex: 'expirydate',
      key: 'expirydate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button type="primary" onClick={() => handleViewClick(record.id)}>
          View
        </Button>
      ),
    },
  ];

  return (
    <div >
      <SideBar />
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>View All Certificates</h3>
      {loading ? (
        <Spin tip="Loading certificates..." style={{ display: 'block', margin: '0 auto' }} />
      ) : (
        <Table
          columns={columns}
          dataSource={certificates}
          rowKey={(record) => record.id}
          bordered
          pagination={{ pageSize: 5 }}
        />
      )}
    </div>
  );
}
