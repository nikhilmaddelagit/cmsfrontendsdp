import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewCertificate() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`https://cmsbackendsdp-production.up.railway.app/certificate/getcertificate/${id}`, {
          responseType: 'arraybuffer',
        });
        const base64 = btoa(
          new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        setImage(`data:image/jpeg;base64,${base64}`);
      } catch (err) {
        setError('Error fetching image');
      }
    };

    fetchImage();
  }, [id]);

  return (
    <div>
      {/* <AdminNavbar/> */}
      <h3>Certificate ID: {id}</h3>
      {image ? <img src={image} alt={`Certificate ${id}`} /> : <p>{error || 'Loading...'}</p>}
    </div>
  );
}
