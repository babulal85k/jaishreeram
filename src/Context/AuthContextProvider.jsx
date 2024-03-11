import React, { createContext, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('isAuthenticated') === 'true'
    );

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', 'false');
    };

    const AuthContextValue = {
        isAuthenticated,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={AuthContextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };
