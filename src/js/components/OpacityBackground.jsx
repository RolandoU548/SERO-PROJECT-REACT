import React from "react";
import PropTypes from "prop-types";
import "../../css/darkmode.css";

export const OpacityBackground = ({ className }) => {
    return (
        <div
            className={
                "bg-black absolute w-full h-full ease-out duration-300 opacity-30 hover:opacity-10 dark:hover:opacity-30 dark:opacity-50 left-0 top-0" +
                " " +
                className
            }></div>
    );
};

OpacityBackground.propTypes = {
    className: PropTypes.string
};
