import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export const ProtectedRoute = ({
    children,
    redirectTo = "/login",
    roles = ["user"]
}) => {
    const { store } = useContext(Context);
    // Este usuario deberia venir del Contexto
    const user = {
        id: null,
        name: null,
        lastname: null,
        email: null,
        roles: ["user", "admin"]
    };

    // Deberia decir store.token en lugar del localStorage
    const verifyRoles = (lista1, lista2) => {
        for (const elemento of lista1) {
            if (!lista2.includes(elemento)) {
                return false;
            }
        }
        return true;
    };

    if (!localStorage.getItem("token") || !verifyRoles(roles, user.roles)) {
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
    redirectTo: PropTypes.string,
    roles: PropTypes.array
};
