import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../css/darkmode.css";

export const Darkmode = ({ className }) => {
    const [theme, setTheme] = useState(
        document.querySelector("html").classList.contains("dark")
            ? "dark"
            : "light"
    );
    const changeTheme = () => {
        document.querySelector("html").classList.toggle("dark");
        if (document.querySelector("html").classList.contains("dark")) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        if (document.querySelector("html").classList.contains("dark")) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    return (
        <div
            className={
                "tdnn" + (theme === "dark" ? "" : " day") + " " + className
            }
            onClick={() => {
                changeTheme();
            }}>
            <div className={"moon" + (theme === "dark" ? "" : " sun")}></div>
        </div>
    );
};

Darkmode.propTypes = {
    className: PropTypes.string
};
