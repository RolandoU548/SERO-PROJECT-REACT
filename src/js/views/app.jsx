import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/app.css";

export const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="app">
            <header className="header-home flex justify-between items-center z-50 fixed top-0 w-full py-5">
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
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className="text-lg font-medium ml-7 text-gray-200 resp:dark:text-gray-200 resp:text-gray-600">
                                Servicios
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="text-lg font-medium ml-7 text-gray-200 resp:dark:text-gray-200 resp:text-gray-600">
                                Contacto
                            </Link>
                        </li>
                        <li>
                            <button
                                className="login-button text-lg rounded-full p-2 bg-white resp:dark:bg-gray-100 text-black ml-6"
                                onClick={() => {
                                    navigate("/login");
                                }}>
                                Iniciar sesión
                            </button>
                        </li>
                        <li>
                            <button
                                className="signup-button text-lg rounded-full p-2 bg-white resp:dark:bg-gray-100 text-black ml-4"
                                onClick={() => {
                                    navigate("/signup");
                                }}>
                                Crear Cuenta
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            <video autoPlay loop muted playsInline className="-z-50 home-video">
                <source src="SERO_BG.mp4" type="video/mp4" />
            </video>
            <div className="triangle z-20 absolute left-1/2 bottom-1.5 -translate-x-1/2 -translate-y-1/2 rounded-xl"></div>
            <h1 className="text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center absolute text-white top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                Solucionamos tu problema
            </h1>
        </div>
    );
};
