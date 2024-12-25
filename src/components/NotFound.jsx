import {useNavigate } from 'react-router-dom';
import PageNotFound from './Page Not Found.webp';

export default function NotFound() {

    const navigate = useNavigate();


    const handleNavigate = () => {
        navigate('/');
    }

  return (
    <div>
      <button onClick={handleNavigate}>Bring Me Back To Home Page</button><br></br><br></br>

      <img src={PageNotFound} alt="Image Error" style={styles.image} />
    </div>
  );
}

const styles = {

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};
