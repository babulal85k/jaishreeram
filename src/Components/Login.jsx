import React, { useContext, useState } from 'react';
import NavBar from '../Pages/NavBar/NavBar';
import { AuthContext } from '../Context/AuthContextProvider'; // Import AuthContext

const Login = () => {
  const { login } = useContext(AuthContext); // Access login function from AuthContext
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username === formData.username && user.password === formData.password) {
      login(); // Call login function from AuthContext
      // Redirect user to dashboard or protected route
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;