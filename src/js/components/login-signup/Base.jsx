import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Base = ({ children, right, left }) => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-800 flex justify-center items-center">
            <div className="h-[94vh] w-full mx-2 max-w-4xl rounded-lg shadow-xl bg-white dark:bg-slate-800 resp:max-w-md">
                <div
                    className={`video-container w-[50%] h-full relative resp:hidden float-${
                        right ? "left" : "right"
                    }`}>
                    <Link
                        to="/"
                        className={`absolute ${
                            right ? "left" : "right"
                        }-10 top-3 z-40 text-4xl text-gray-${
                            right ? "400" : "500"
                        } font-semibold`}>
                        SERØ.
                    </Link>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={`h-full object-cover rounded-${
                            right ? "l" : "r"
                        }-lg`}>
                        <source src="Login_video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div
                    className={`form-container w-[50%] resp:w-full h-full p-6 float-${
                        right ? "right" : "left"
                    }`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

Base.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
    right: PropTypes.bool,
    left: PropTypes.bool
};
