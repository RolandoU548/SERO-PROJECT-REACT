import React, { useState, useEffect, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../../supabase/supabase.js";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

export const ProtectedRoute = ({
    children,
    redirectTo = "/login",
    role = ["user", "admin"]
}) => {
    const [logged, setLogged] = useState(true);
    const { actions, store } = useContext(Context);
    supabase.auth.onAuthStateChange((event, session) => {
        setLogged(!!session);
    });

    useEffect(() => {
        actions.getUser();
    }, []);

    console.log(store.user.role, logged);
    if (!logged || !role.includes(store.user.role)) {
        return <Navigate to={redirectTo} />;
    }
    return children || <Outlet />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
    redirectTo: PropTypes.string,
    role: PropTypes.array
};
