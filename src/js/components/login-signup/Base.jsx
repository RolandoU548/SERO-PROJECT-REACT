import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LanguageButton } from "../LanguageButton";
import { Darkmode } from "../Darkmode";
import "../../../css/glass.css";

export const Base = ({ children }) => {
    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-[100%] h-[100%] -z-50 fixed object-cover dark:invert-0 invert transition duration-500">
                <source
                    src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/videos%2FLoginSignupBG.mp4?alt=media&token=bf97e688-0963-4997-80e2-f6da6d0fe924&_gl=1*vqd1fh*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTI2OC42MC4wLjA."
                    type="video/mp4"
                />
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
            {children}
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
