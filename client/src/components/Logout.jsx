import { useContext, useEffect } from "react";

import * as authServices from '../services/authService'
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/authContext";

export default function  Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext)

    useEffect(() => {
        authServices.logout()
            .then(() => {
                console.log("Logout successful");
                logoutHandler()
            })
            .catch((error) => {
                console.error("Logout failed:", error.message);
                navigate('/');
            });
    }, []);

    return null;
}