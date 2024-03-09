import React,{ useContext } from "react";
import { Route, redirect } from 'react-router-dom';
import { AuthContext } from "../Context/AuthContextProvider";

function PrivateRoute({ component : Component, ...rest }) {
    const { isAuthenticated } = useContext(AuthContext);

    return(
        <Route
            { ...rest }
            render={(props) => 
                isAuthenticated ? (
                    <Component { ...props } />
                ) : (
                    <redirect to="/login" />
                )
            }
        
        />
    );
};

export default PrivateRoute;