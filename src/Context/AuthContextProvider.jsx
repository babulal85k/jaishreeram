import React, { createContext, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    const AuthContextValue = {
        isAuthenticated,
        login,
        logout
    }



    return (
        <AuthContext.Provider value={AuthContextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };