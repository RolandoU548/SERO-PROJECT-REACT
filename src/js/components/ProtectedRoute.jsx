import React, { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export const ProtectedRoute = ({
    children,
    redirectTo = "/login",
    redirectToIfLoggedIn = "/private",
    allowedRoles = ["user", "admin"]
}) => {
    const { store } = useContext(Context);
    const location = useLocation();

    if (store.accessToken) {
        if (allowedRoles.includes(store.user.role)) return children || <Outlet />;
        return <Navigate to={redirectToIfLoggedIn} />;
    }
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
    redirectTo: PropTypes.string,
    redirectToIfLoggedIn: PropTypes.string,
    allowedRoles: PropTypes.array
};
