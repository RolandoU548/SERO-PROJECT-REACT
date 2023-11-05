import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const BackArrow = ({ className, to }) => {
    return (
        <Link
            to={to}
            className={
                "transition duration-300 leading-[10px] mt-3 text-5xl dark:text-white z-50 hover:scale-110" +
                " " +
                className
            }>
            ←
        </Link>
    );
};

BackArrow.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string.isRequired
};
