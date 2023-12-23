import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Spinner } from 'flowbite-react';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-spinner loading-lg h-screen flex items-center justify-center mx-auto text-[#00d9de]"><Spinner aria-label="Loading..." /></span>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;