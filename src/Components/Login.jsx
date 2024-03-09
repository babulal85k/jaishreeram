import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider'; // Import AuthContext

const Login = () => {
  const { login } = useContext(AuthContext); // Access login function from AuthContext
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login logic (e.g., check credentials)
    // In a real application, you would send the login request to your backend
    // and handle the response accordingly
    if (formData.username === 'example' && formData.password === 'password') {
      login(); // Call login function from AuthContext
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
