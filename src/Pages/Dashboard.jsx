import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

function Dashboard() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            {isAuthenticated ? (
                <div>
                    <h2> Welcome to the Dashboard </h2>
                    {/* comment */}
                </div>
            ) : (
                <div>
                    <h2>Access Denied</h2>
                    <p>Please login to Access the Dashboard.</p>
                </div>

            )};
        </>
    );
};

export default Dashboard;