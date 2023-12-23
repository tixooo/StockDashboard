import React, { createContext,useContext ,useState} from "react";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const login = async (username, password) => {
        try {
            // Making a request to the backend to validate the credentials
            const response = await fetch('https://smd-backend-nu2a.onrender.com/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password})
            })


            if (response.ok) {
                // If successful, setting user in the state
                const userData = await response.json();
                setUser(userData);
                console.log(userData)
                // Optionally, store user information in local storage or a cookie
                // localStorage.setItem('authUser', JSON.stringify(userData));
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error.message);
        }
    };

    const logout = () => {
        // clearing user state
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}