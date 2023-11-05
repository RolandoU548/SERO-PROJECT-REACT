import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../css/darkmode.css";

export const Darkmode = ({ className }) => {
    const { store, actions } = useContext(Context);
    const changeTheme = () => {
        document.querySelector("html").classList.toggle("dark");
        if (document.querySelector("html").classList.contains("dark")) {
            actions.changeTheme("dark");
            localStorage.theme = "dark";
        } else {
            actions.changeTheme("light");
            localStorage.theme = "light";
        }
    };

    return (
        <div
            className={
                "tdnn" +
                (store.theme === "dark" ? "" : " day") +
                " " +
                className
            }
            onClick={() => {
                changeTheme();
            }}>
            <div
                className={
                    "moon" + (store.theme === "dark" ? "" : " sun")
                }></div>
        </div>
    );
};

Darkmode.propTypes = {
    className: PropTypes.string
};
