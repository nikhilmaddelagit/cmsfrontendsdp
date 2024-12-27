import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './NavBar'; 
import axios from 'axios';
import { message } from 'antd';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import NavBar from './NavBar';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://cmsbackendsdp-production.up.railway.app/user/login', formData);

            if (response.data) {
                message.success("Login Success");
                console.log(response.data);
                localStorage.setItem("user", JSON.stringify(response.data));
                navigate('/dashboard');
            } else {
                message.error("Invalid email or password");
            }
        } catch (error) {
            console.error("Error in login", error);
        }
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
         <NavBar/>
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #00DDFF, #F75990)',
                padding: '20px',
            }}
        >
            {/* Image Section */}
            <div style={{ flex: 1, textAlign: 'center', marginRight: '20px' }}>
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

            <div
                style={{
                    flex: 1,
                    maxWidth: '400px',
                    background: '#fff',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                    animation: 'fadeIn 1s ease-in-out',
                }}
            >
                <h2
                    style={{
                        fontSize: '24px',
                        marginBottom: '20px',
                        color: '#FF1D58',
                        textAlign: 'center',
                    }}
                >
                    Login Page
                </h2>
                <form onSubmit={handleSubmit}>
                    <label style={{ fontWeight: 'bold', marginBottom: '8px', display: 'block' }}>
                        Enter Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder='Ex : John123@gmail.com'
                        style={{
                            width: '100%',
                            padding: '10px',
                            marginBottom: '15px',
                            border: '1px solid #ccc',
                            borderRadius: '6px',
                        }}
                    />

                    <label style={{ fontWeight: 'bold', marginBottom: '8px', display: 'block' }}>
                        Enter Password
                    </label>
                    <div style={{ position: 'relative' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder='Enter Password'
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '6px',
                            }}
                        />
                        <span
                            onClick={togglePassword}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer',
                                color: '#666',
                            }}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <Link to='/userforgotpwd'>Forgot Password</Link>

                    <input
                        type="submit"
                        value="Login"
                        style={{
                            width: '100%',
                            padding: '10px',
                            margin: '10px 0',
                            border: 'none',
                            borderRadius: '6px',
                            background: 'linear-gradient(135deg, #FF1D58, #8458B3)',
                            color: '#fff',
                            cursor: 'pointer',
                        }}
                    />
                    <input
                        type="reset"
                        value="Reset"
                        style={{
                            width: '100%',
                            padding: '10px',
                            margin: '10px 0',
                            border: 'none',
                            borderRadius: '6px',
                            background: '#ccc',
                            color: '#000',
                            cursor: 'pointer',
                        }}
                    />
                </form>
                <p style={{ color: 'black', textAlign: 'center', marginTop: '15px' }}>
                    Don't have an account?{' '}
                    <Link to="/registration" style={{ color: 'black', textDecoration: 'underline' }}>
                        SIGN UP
                    </Link>
                </p>
            </div>
        </div>
        </>
    );
}
