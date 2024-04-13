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
    const [returning, setReturning] = useState(null);
    const [logged, setLogged] = useState(true);
    const { actions, store } = useContext(Context);
    supabase.auth.onAuthStateChange((event, session) => {
        setLogged(!!session);
    });

    useEffect(() => {
        if (store.user.role) {
            if (role.includes(store.user.role)) {
                setReturning(true);
            } else {
                setReturning(false);
            }
        } else {
            (async () => {
                const user = await actions.getUser();
                if (user) {
                    if (role.includes(store.user.role)) {
                        setReturning(true);
                    } else {
                        setReturning(false);
                    }
                }
            })();
        }
    }, []);

    if (!logged || returning === false) {
        return <Navigate to={redirectTo} />;
    }
    if (returning) {
        return children || <Outlet />;
    }
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
