import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../../supabase/supabase.js";
import PropTypes from "prop-types";

export const ProtectedRoute = ({ children, redirectTo = "/login" }) => {
    const [logged, setLogged] = useState(true);
    supabase.auth.onAuthStateChange((event, session) => {
        setLogged(!!session);
    });
    if (!logged) return <Navigate to={redirectTo} />;
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
    redirectTo: PropTypes.string
};
