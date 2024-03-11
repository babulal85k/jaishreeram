// AllRoutes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Login from '../Components/Login';
import { AuthContextProvider } from '../Context/AuthContextProvider'; // Import AuthContextProvider
import Dashboard from "./Dashboard";
import PrivateRoute from "../Components/PrivateRoute";
import SignUpForm from "../Components/SignUpForm";

function AllRoutes() {
    return (
        <AuthContextProvider> {/* Wrap AllRoutes component with AuthContextProvider */}
            <Router>
                <Routes>
                    <Route path="*" element={ <Dashboard />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUpForm />} />
                </Routes>
            </Router>
        </AuthContextProvider>
    );
}

export default AllRoutes;