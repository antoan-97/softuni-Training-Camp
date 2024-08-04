import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from '../toastConfigs/toastConfig'

import * as authServices from '../services/authService'

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [auth, setAuth] = useState(() => {
        const token = localStorage.getItem('accessToken');
        const userId = localStorage.getItem('userId');
        if (token && userId) {
            return { accessToken: token, _id: userId }
        }
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');


        return {};
    })

    const loginSubmitHandler = async (values) => {
        // Basic validation
        if (!values.email || !values.password) {
            notifyError('Please enter both email and password.');
            return;
        }

        // Simple email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(values.email)) {
            notifyError('Please enter a valid email address.');
            return;
        }

        try {
            const result = await authServices.login(values.email, values.password);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken)
            localStorage.setItem('userId', result._id);
            navigate('/');
            notifySuccess('Successful login!')
        } catch (error) {
            setAuth({});
            console.error('Login failed:', error.message);
            notifyError('Login failed: ' + error.message);
        }
    };


    const registerSubmitHandler = async (values) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(values.email)) {
            notifyError('Please enter a valid email address.');
            return;
        }
        // Basic validation
        if (!values.email || !values.password || !values.repeatPassword) {
            notifyError('Please enter all fields.');
            return;
        }

        //Email min length validation
        if (values.email.length < 3) {
            notifyError('Email should be at least 3 characters long!');
            return;
        }

        //Password min length value
        if (values.password.length < 6) {
            notifyError('Passwords must be at least 6 characters long!');
            return;
        }

        // Password match validation
        if (values.password !== values.repeatPassword) {
            notifyError('Passwords do not match.');
            return;
        }

        // Call register service function
        try {
            const result = await authServices.register(values.email, values.password)

            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken)
            localStorage.setItem('userId', result._id);

            navigate('/');
            notifySuccess('Successful registration!')

            console.log('Registration successful:', result);
        } catch (error) {
            console.error('Registration failed:', error.message);
            notifyError('Registration failed: ' + error.message);
        }
    };

    const logoutHandler = () => {
        setAuth({});
        console.log('Token before logout:', localStorage.getItem('accessToken'));
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');

        navigate('/')
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        email: auth ? auth.email : null,
        userId: auth ? auth._id : null,
        isAuthenticated: !!auth.accessToken,
    };
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;