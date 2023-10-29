import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export const ProtectedRoute = ({ children, redirectTo = "/login" }) => {
    const { store } = useContext(Context);
    // Deberia decir store.token en lugar del localStorage
    if (!localStorage.getItem("token")) {
        return <Navigate to={redirectTo} />;
    }
    return children || <Outlet />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
    redirectTo: PropTypes.string
};
