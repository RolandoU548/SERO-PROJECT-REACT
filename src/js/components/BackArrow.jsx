import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const BackArrow = ({ className, to }) => {
    return (
        <Link
            to={to}
            className={
                "leading-[10px] text-gray-600 text-5xl dark:text-white" +
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
