import React, { useContext, useState } from 'react';
import NavBar from '../Pages/NavBar/NavBar';
import { AuthContext } from '../Context/AuthContextProvider'; // Import AuthContext

const SignUpForm = () => {
  const { login } = useContext(AuthContext); // Access login function from AuthContext
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Register user and save data to local storage
    // Simulate login after registration (optional)
    login();
    // Redirect user to dashboard or login page
  };

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUpForm;
