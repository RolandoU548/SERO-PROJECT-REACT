import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/app.css";

export const App = () => {
    const navigate = useNavigate();
    return (
        <div className="app h-screen overflow-hidden">
            <header className="flex justify-between items-center z-50 fixed top-0 w-full px-[5%] py-5">
                <Link to="/" className="text-4xl font-semibold ml-9">
                    SERØ.
                </Link>
                <nav className="navbar flex items-center">
                    <Link to="/" className="active text-lg font-medium ml-9">
                        Inicio
                    </Link>
                    <Link to="/" className="text-lg font-medium ml-9">
                        Servicios
                    </Link>
                    <Link to="/" className="text-lg font-medium ml-9">
                        Contacto
                    </Link>
                    <button
                        className="login-button text-lg rounded-full p-2 bg-white text-black ml-6"
                        onClick={() => {
                            navigate("/login");
                        }}>
                        Iniciar sesión
                    </button>
                    <button
                        className="signin-button text-lg rounded-full p-2 bg-white text-black ml-6"
                        onClick={() => {
                            navigate("/signin");
                        }}>
                        Crear Cuenta
                    </button>
                </nav>
            </header>
            <video autoPlay loop muted playsInline className="-z-50">
                <source src="SERO_BG.mp4" type="video/mp4" />
            </video>
            <div className="triangle z-20 absolute left-1/2 bottom-1.5 -translate-x-1/2 -translate-y-1/2 rounded-xl"></div>
            <h1 className="text-8xl font-black z-10 text-center absolute text-white top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                Solucionamos tu problema
            </h1>
        </div>
    );
};
