import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import NavBar from '../components/NavBar';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #00DDFF, #F75990)',
        padding: '20px',
    },
    imageSection: {
        flex: 1,
        textAlign: 'center',
        marginRight: '20px',
    },
    formSection: {
        flex: 1,
        maxWidth: '400px',
        background: '#fff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
        animation: 'fadeIn 1s ease-in-out',
    },
    formHeading: {
        fontSize: '24px',
        marginBottom: '20px',
        color: '#FF1D58',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '6px',
    },
    button: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: 'none',
        borderRadius: '6px',
        background: 'linear-gradient(135deg, #FF1D58, #8458B3)',
        color: '#fff',
        cursor: 'pointer',
    },
    resetButton: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: 'none',
        borderRadius: '6px',
        background: '#ccc',
        color: '#000',
        cursor: 'pointer',
    },
    eyeIcon: {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: '#666',
    }
};

export default function AdminLogin() {

    const [formData, setFormData] = useState({
        uname: '',
        pwd: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try 
        {
            const response = await axios.post("https://cmsbackendsdp-production.up.railway.app/admin/adminlogin", formData);

            if (response.status === 200) 
                {
                message.success("Login Successful");
                navigate('/admindashboard');
            } 
            else 
            {
                message.error("Login Failed");
            }
        } 
        catch (error) 
        {
            console.log("Error in Login", error);
        }
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <NavBar/>
            <div style={styles.container}>
                <div style={styles.imageSection}>
                    <img
                        src="https://images.unsplash.com/photo-1658235081483-8f06aa0882cf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Background"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                        }}
                    />
                </div>

                {/* Form Section */}
                <div style={styles.formSection}>
                    <h2 style={styles.formHeading}>Admin Login</h2>
                    <form onSubmit={handleSubmit}>
                        <label style={{ fontWeight: 'bold', marginBottom: '8px', display: 'block' }}>
                            Enter Username
                        </label>
                        <input
                            type='text'
                            id='uname'
                            value={formData.uname}
                            onChange={handleChange}
                            required
                            style={styles.input}
                            placeholder='Ex:admin'
                        />

                        <label style={{ fontWeight: 'bold', marginBottom: '8px', display: 'block' }}>
                            Enter Password
                        </label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id='pwd'
                                value={formData.pwd}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder='Enter Password'
                            />
                            <span
                                onClick={togglePassword}
                                style={styles.eyeIcon}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <input
                            type="submit"
                            value="Login"
                            style={styles.button}
                        />
                        <input
                            type="reset"
                            value="Reset"
                            style={styles.resetButton}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
