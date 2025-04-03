import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export const ProtectedRoute = ({
    children,
    redirectTo = "/login",
    roles = ["user", "admin"]
}) => {
    const { store } = useContext(Context);

    if (store.accessToken && roles.includes(store.user.role)) {
        return children || <Outlet />;
    }
    console.log("Redirección")
    return <Navigate to={redirectTo} />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
    redirectTo: PropTypes.string,
    roles: PropTypes.array
};
