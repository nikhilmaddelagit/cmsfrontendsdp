import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import NavBar from './NavBar';
import axios from 'axios';
import { message } from 'antd';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #00DDFF, #F75990)',
        padding: '20px',
    },
    imageContainer: {
        flex: 1,
        textAlign: 'center',
        marginRight: '20px',
    },
    formContainer: {
        flex: 1,
        maxWidth: '400px',
        background: '#fff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
        animation: 'fadeIn 1s ease-in-out',
    },
    heading: {
        fontSize: '24px',
        marginBottom: '20px',
        color: '#FF1D58',
        textAlign: 'center',
    },
    inputField: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '6px',
    },
    submitBtn: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: 'none',
        borderRadius: '6px',
        background: 'linear-gradient(135deg, #FF1D58, #8458B3)',
        color: '#fff',
        cursor: 'pointer',
    },
    resetBtn: {
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
    },
    passwordStrength: {
        textAlign: 'center',
        marginTop: '10px',
    },
    passwordRequirements: {
        fontSize: '12px',
        marginTop: '10px',
        textAlign: 'center',
        color: '#555',
    },
    loginLink: {
        textAlign: 'center',
        marginTop: '15px',
    },
};

export default function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        email: '',
        password: '',
        contact: '',
        profilePic: '',
    });
    const [passwordStrength, setPasswordStrength] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State for password visibility toggle

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        if (id === 'password') {
            evaluatePasswordStrength(value);
        }
    };

    // Handle file input for profile picture
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                profilePic: file
            });
        }
    };

    const evaluatePasswordStrength = (password) => {
        if (password.length === 0) {
            setPasswordStrength('');
        } else if (password.length < 6) {
            setPasswordStrength('Weak');
        } else if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
            setPasswordStrength('Strong');
        } else {
            setPasswordStrength('Moderate');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare FormData to send to the server (for the profile picture)
        const data = new FormData();
        data.append('name', formData.name);
        data.append('gender', formData.gender);
        data.append('email', formData.email);
        data.append('password', formData.password);
        data.append('contact', formData.contact);
        if (formData.profilePic) {
            data.append('profilePic', formData.profilePic);
        }

        try {
            await axios.post('https://cmsbackendsdp-production.up.railway.app/user/register', data);
            message.success("User Registered Successfully");
        } catch (error) {
            message.error("Error in registration");
        }
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <NavBar />
            <div style={styles.container}>
                {/* Image Section */}
                <div style={styles.imageContainer}>
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
                <div style={styles.formContainer}>
                    <h2 style={styles.heading}>Registration Form</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Enter Name</label>
                        <input
                            type='text'
                            id='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={styles.inputField}
                            placeholder='Enter Name'
                        />
                        

                        <label>Select Gender</label>
                        <select
                            id='gender'
                            onChange={handleChange}
                            required
                            style={styles.inputField}
                        >
                            <option value="">---Select---</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>

                        <label>Enter Email</label>
                        <input
                            type='email'
                            id='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={styles.inputField}
                            placeholder='Enter Email'
                        />

                        <label>Enter Password</label>
                        <div className="password-container" style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id='password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={styles.inputField}
                                placeholder='Enter Password'
                            />
                            <span style={styles.eyeIcon} onClick={togglePassword}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <p className={`password-strength ${passwordStrength.toLowerCase()}`} style={styles.passwordStrength}>{passwordStrength}</p>
                        <p className="password-requirements" style={styles.passwordRequirements}>
                            Password must include:
                            <br />
                            • At least 8 characters<br />
                            • An uppercase letter<br />
                            • A lowercase letter<br />
                            • A number<br />
                            • A special character (e.g., @, $, !, %, *)
                        </p>

                        <label>Enter Contact</label>
                        <input
                            type='number'
                            id='contact'
                            value={formData.contact}
                            onChange={handleChange}
                            required
                            style={styles.inputField}
                            placeholder='Enter Contact'
                        />

                        <label>Upload Profile Picture(Image)</label>
                        <input
                            type='file'
                            onChange={handleFileChange}
                            accept="image/*"
                            style={styles.inputField}
                        />

                        <input type="submit" value="Register" style={styles.submitBtn} />
                        <input type="reset" value="Reset" style={styles.resetBtn} />
                    </form>

                    <p style={{ color: 'black', textAlign: 'center', marginTop: '15px' }}>
                        Already have an account? <Link to="/login" style={{ color: 'black', textDecoration: 'underline' }}>Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
