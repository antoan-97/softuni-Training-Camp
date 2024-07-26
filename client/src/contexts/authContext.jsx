import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as authServices from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        const token = localStorage.getItem('accessToken');
        return token ? { accessToken: token } : {};
    });

    useEffect(() => {
        // Sync localStorage with state changes
        if (auth.accessToken) {
            localStorage.setItem('accessToken', auth.accessToken);
        } else {
            localStorage.removeItem('accessToken');
        }
    }, [auth]);

    const loginSubmitHandler = async (values) => {
        if (!values.email || !values.password) {
            alert('Please enter both email and password.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(values.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        try {
            const result = await authServices.login(values.email, values.password);
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error.message);
            alert('Login failed: ' + error.message);
        }
    };

    const registerSubmitHandler = async (values) => {
        if (!values.email || !values.password || !values.repeatPassword) {
            alert('Please enter all fields.');
            return;
        }

        if (values.password !== values.repeatPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const result = await authServices.register(values.email, values.password);
            setAuth(result);
            navigate('/');
            console.log('Registration successful:', result);
        } catch (error) {
            console.error('Registration failed:', error.message);
            alert('Registration failed: ' + error.message);
        }
    };

    const logoutHandler = () => {
        setAuth({});
        navigate('/');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        email: auth.email || null,
        userId: auth._id || null,
        isAuthenticated: !!auth.accessToken
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
