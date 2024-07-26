import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../contexts/authContext";
import { useContext } from "react";


export default function AuthGuard() {
    const { isAuthenticated } = useContext(AuthContext)

    if (!isAuthenticated) {
        return <Navigate to="/" />
    }

    return <Outlet />

}