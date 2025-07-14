import { Navigate, useLocation } from "react-router-dom";

const RouteAccess = ({ children, allowedRole }) => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("UserRole");
    const location = useLocation();
    if (!token || userRole !== allowedRole) {
        const from = location?.state?.from || "/";
        return <Navigate to={from} replace />;

    };
    return children;
};

export default RouteAccess;
