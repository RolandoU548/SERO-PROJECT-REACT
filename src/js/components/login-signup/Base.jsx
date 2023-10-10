import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Base = ({ children, right }) => {
    return (
        <>
            <Link
                to="/"
                className={
                    "absolute top-3 z-40 text-4xl font-semibold" +
                    " " +
                    (right ? "left-10 text-gray-400" : "right-10 text-gray-500")
                }>
                SERØ.
            </Link>
        <div className="form-container w-[50%] resp:w-[80%] h-full p-6">
            {children}
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
