import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../../css/glass.css";
import { LanguageButton } from "../LanguageButton";
import { Darkmode } from "../Darkmode";

export const Base = ({ children }) => {
    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-[100%] h-[100%] -z-50 absolute object-cover dark:invert-0 invert transition duration-300">
                <source src="LoginSignupBG.mp4" type="video/mp4" />
            </video>
            <LanguageButton className="absolute top-3 right-20 w-10 h-7" />
            <Darkmode className="text-[10%] absolute top-3 right-4" />
            <Link
                to="/"
                className={
                    "font-serif absolute top-3 z-40 text-4xl font-semibold left-10 text-black dark:text-white"
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
    ])
};
