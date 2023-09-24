import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/app.css";

export const App = () => {
    const navigate = useNavigate();
    return (
        <div className="app">
            <header className="flex justify-between items-center z-50 fixed top-0 w-full py-5">
                <Link to="/" className="text-4xl font-semibold ml-12">
                    SERØ.
                </Link>
                <nav className="navbar mr-9">
                    <ul className="flex items-center">
                        <li>
                            <Link
                                to="/"
                                className="active text-lg font-medium ml-9">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lg font-medium ml-9">
                                Servicios
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-lg font-medium ml-9">
                                Contacto
                            </Link>
                        </li>
                        <li>
                            <button
                                className="login-button text-lg rounded-full p-2 bg-white text-black ml-6"
                                onClick={() => {
                                    navigate("/login");
                                }}>
                                Iniciar sesión
                            </button>
                        </li>
                        <li>
                            <button
                                className="signup-button text-lg rounded-full p-2 bg-white text-black ml-6"
                                onClick={() => {
                                    navigate("/signup");
                                }}>
                                Crear Cuenta
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="-z-50 video-inicio">
                <source src="SERO_BG.mp4" type="video/mp4" />
            </video>
            <div className="triangle z-20 absolute left-1/2 bottom-1.5 -translate-x-1/2 -translate-y-1/2 rounded-xl"></div>
            <h1 className="text-5xl md:text-8xl font-black z-10 text-center absolute text-white top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                Solucionamos tu problema
            </h1>
        </div>
    );
};
