import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Base = ({ children, right }) => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-800 flex justify-center items-center">
            <div
                className={
                    "min-h-[94vh] w-full mx-2 my-2 max-w-4xl rounded-lg shadow-xl bg-white dark:bg-slate-800 resp:max-w-md flex" +
                    " " +
                    (right ? "flex-row" : "flex-row-reverse")
                }>
                <div className="video-container w-[50%] min-h-full relative resp:hidden">
                    <Link
                        to="/"
                        className={
                            "absolute top-3 z-40 text-4xl font-semibold" +
                            " " +
                            (right
                                ? "left-10 text-gray-400"
                                : "right-10 text-gray-500")
                        }>
                        SERØ.
                    </Link>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={
                            "h-full object-cover" +
                            " " +
                            (right ? "rounded-l-lg" : "rounded-r-lg")
                            //     right ? "l" : "r"
                            // }-lg`
                        }>
                        <source src="Login_video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="form-container w-[50%] resp:w-full h-full p-6">
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
    right: PropTypes.bool
};
