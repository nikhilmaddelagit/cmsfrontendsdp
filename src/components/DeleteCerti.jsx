import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import { Table, Button, message, Spin, Popconfirm } from 'antd';

export default function DeleteCerti() 
{
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCertificates = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://cmsbackendsdp-production.up.railway.app`);
      setCertificates(response.data);
    } 
    catch (error) 
    {
      message.error('Failed to load certificates. Please try again later.');
    }
    finally 
    {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const handleViewClick = (id) => {
    navigate(`/certificate/${id}`);
  };

  const handleDeleteClick = async (id) => {
    try {
        await axios.delete(`http://cmsbackendsdp-production.up.railway.app`);
        message.success('Certificate deleted successfully.');
        setCertificates(certificates.filter((cert) => cert.id !== id));
    } catch (error) {
        message.error('Failed to delete the certificate. Please try again.');
    }
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
        <>
          <Button type="primary" onClick={() => handleViewClick(record.id)} style={{ marginRight: '10px' }}>
            View
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this certificate?"
            onConfirm={() => handleDeleteClick(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div>
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
