import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../../css/glass.css";

export const Base = ({ children, right }) => {
    return (
        <>
            <Link
                to="/"
                className={
                    "absolute top-3 z-40 text-4xl font-semibold left-10 text-black dark:text-white"
                }>
                SERØ.
            </Link>
            <div className="h-screen flex justify-center items-center">
                <div className="form-container w-[50%] resp:w-[80%] p-6 glass">
                    {children}
                </div>
            </div>
        </>
    );
};

Base.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
    right: PropTypes.bool
};
