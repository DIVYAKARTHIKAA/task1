// Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; 
import Navbar from './Navbar';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = { ...errors };

    newErrors.username = formData.username.trim() === '' ? 'Username is required' : '';
    newErrors.email = /^\S+@\S+\.\S+$/.test(formData.email) ? '' : 'Invalid email address';
    newErrors.password = formData.password.length >= 8 ? '' : 'Password must be at least 8 characters';

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSignup = () => {
    if (validateForm()) {
      console.log('Signup clicked:', formData);
     
      window.location.href = '/login';
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          {errors.username && <span className="error">{errors.username}</span>}
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
          
          <button type="button" onClick={handleSignup}>
            Signup
          </button>
        </form>
        <p className="have-account">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Signup;
