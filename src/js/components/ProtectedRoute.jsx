import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export const ProtectedRoute = ({
    children,
    redirectTo = "/login",
    role = ["user"]
}) => {
    const { store } = useContext(Context);
    // Este usuario deberia venir del Contexto

    // Deberia decir store.token en lugar del localStorage
    const verifyRoles = (lista1, lista2) => {
        for (const elemento of lista1) {
            if (!lista2.includes(elemento)) {
                return false;
            }
        }
        return true;
    };

    if (localStorage.getItem("token") && verifyRoles(role, store.user.role)) {
        return children || <Outlet />;
    }
    return <Navigate to={redirectTo} />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
    redirectTo: PropTypes.string,
    role: PropTypes.array
};
