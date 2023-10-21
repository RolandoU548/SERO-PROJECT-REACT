import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LanguageButton } from "../LanguageButton";
import { Darkmode } from "../Darkmode";
import "../../../css/glass.css";

export const TogglerSideNav = () => {
    return (
        <>
            {/* Toggler */}
            <button
                className="mt-10 inline-block rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                data-te-sidenav-toggle-ref=""
                data-te-target="#sidenav-1"
                aria-controls="#sidenav-1"
                aria-haspopup="true">
                <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </button>
            {/* Toggler */}
        </>
    );
};
