import { useContext, useEffect } from "react";

import * as authServices from '../../services/authService'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import { notifyError, notifySuccess } from "../../toastConfigs/toastConfig";

export default function  Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext)

    useEffect(() => {
        authServices.logout()
            .then(() => {
                logoutHandler()
                notifySuccess('Logout successful!')
                console.log("Logout successful");
            })
            .catch((error) => {
                navigate('/');
                notifyError('Logout failed:', error.message)
                console.error("Logout failed:", error.message);
            });
    }, [logoutHandler]);

    return null;
}