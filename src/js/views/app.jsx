import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/app.css";
import { useTranslation } from "react-i18next";

export const App = () => {
    const [t] = useTranslation("app");

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="app">
            <header className="header-home flex justify-between items-center z-40 fixed top-0 w-full py-5">
                <h2 className="text-4xl font-semibold ml-12 lg:ml-32 cursor-pointer">
                    SERØ.
                </h2>
                <i
                    className="fa-solid fa-bars"
                    id="toggle-menu"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}></i>
                <div
                    className={isOpen ? "block" : "hidden"}
                    id="back__menu"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}></div>
                <nav
                    className={
                        "navbar-home mr-9 resp:dark:bg-slate-800" +
                        (isOpen ? " navbar-home-opened" : "")
                    }>
                    <h2 className="menu-title text-gray-600 dark:text-gray-100 text-center text-4xl font-semibold hidden">
                        SERØ.
                    </h2>
                    <ul className="flex items-center navbar__ul">
                        <li>
                            <Link
                                to="/"
                                className="active text-lg font-medium ml-7 text-gray-200 resp:dark:text-gray-200 resp:text-gray-600">
                                {t("home")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className="text-lg font-medium ml-7 text-gray-200 resp:dark:text-gray-200 resp:text-gray-600">
                                {t("services")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="text-lg font-medium ml-7 text-gray-200 resp:dark:text-gray-200 resp:text-gray-600">
                                {t("contacts")}
                            </Link>
                        </li>
                        <li>
                            <button
                                className="login-button w-32 text-lg rounded-full p-2 text-black ml-6 resp:dark:bg-gray-100 hover:transition-all bg-gradient-to-r from-white to-[rgba(255,255,255,0.8)] hover:to-cyan-400 duration-1000 hover:text-gray-800"
                                onClick={() => {
                                    navigate("/login");
                                }}>
                                {t("login")}
                            </button>
                        </li>
                        <li>
                            <button
                                className="signup-button w-32 text-lg rounded-full p-2 text-black ml-4 resp:dark:bg-gray-100 hover:transition-all bg-gradient-to-r from-white to-[rgba(255,255,255,0.8)] hover:to-cyan-400 duration-1000 hover:text-gray-800"
                                onClick={() => {
                                    navigate("/signup");
                                }}>
                                {t("signup")}
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            <video autoPlay loop muted playsInline className="-z-50 home-video">
                <source src="SERO_BG.mp4" type="video/mp4" />
            </video>
            <div className="triangle z-20 absolute left-1/2 bottom-1.5 -translate-x-1/2 -translate-y-1/2 rounded-xl"></div>
            <h1 className="w-[80%] text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center absolute text-white top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                {t("title")}
            </h1>
        </div>
    );
};
