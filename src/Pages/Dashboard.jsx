import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider'; // Import AuthContext
import NavBar from '../Pages/NavBar/NavBar';
import Home from "./Home";

const Dashboard = () => {
  const { logout } = useContext(AuthContext); // Access logout function from AuthContext

  const handleLogout = () => {
    logout(); // Call logout function from AuthContext
    // Redirect user to login page or homepage after logout
  };

  return (
    <>
      <Home />
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Dashboard;
