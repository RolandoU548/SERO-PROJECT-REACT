import React, { useEffect, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { AppLoader } from "../views/apploader.jsx";

export const AuthInitializer = ({ children }) => {
    const { actions } = useContext(Context);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const initAuth = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/auth/refreshAccessToken", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include"
                });

                if (response.ok) {
                    const { accessToken, user } = await response.json();
                    actions.changeAccessToken(accessToken);
                    actions.setUser(user);
                }
            } catch (error) {
                console.error("Error during initAuth:", error);
            } finally {
                setIsInitialized(true);
            }
        };

        initAuth();
    }, []);

    if (!isInitialized) {
        return <AppLoader />;
    }

    return children || <Outlet />;
};

AuthInitializer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ])
};
