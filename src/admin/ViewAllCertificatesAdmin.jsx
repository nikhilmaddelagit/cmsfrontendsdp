import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Table, Button, message } from 'antd';
import AdminNavbar from './AdminNavbar';

export default function ViewAllCertificatesAdmin() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchCertificates = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://cmsbackendsdp-production.up.railway.app");
      setCertificates(response.data);
    } catch (err) {
      setError(err.message);
      message.error('Failed to fetch certificates');
    } finally {
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
        <Button type="link" onClick={() => handleViewClick(record.id)}>
          View
        </Button>
      ),
    },
  ];

  return (
    <div>
      <AdminNavbar />
      <h3>View All Certificates</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Table
        dataSource={certificates}
        columns={columns}
        loading={loading}
        rowKey="id"
        bordered
        pagination={{ pageSize: 4 }}
      />
    </div>
  );
}
