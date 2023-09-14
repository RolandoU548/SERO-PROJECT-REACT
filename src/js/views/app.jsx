import React from "react";
import { Link } from "react-router-dom";
import "../../css/app.css";

export const App = () => {
    return (
        <>
            <header className="flex justify-between items-center z-50 fixed top-0 w-full px-[10%] py-5">
                <Link to="/" className="text-4xl font-semibold ml-9">
                    SERØ.
                </Link>
                <nav className="navbar">
                    <Link to="/" className="active text-lg font-medium ml-9">
                        Inicio
                    </Link>
                    <Link to="/" className="text-lg font-medium ml-9">
                        Servicios
                    </Link>
                    <Link to="/" className="text-lg font-medium ml-9">
                        Contacto
                    </Link>
                    <button className="login-button text-lg rounded-full p-2 bg-white text-black ml-6">
                        Iniciar sesión
                    </button>
                </nav>
            </header>
            <video autoPlay loop muted playsInline className="-z-50">
                <source
                    src="src/assets/media/SERO Live Background Short Loop.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="triangle z-20 absolute left-1/2 bottom-1.5 -translate-x-1/2 -translate-y-1/2 rounded-xl"></div>
            <h1 className="text-8xl font-black z-10 text-center absolute text-white top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                Solucionamos tu problema
            </h1>
        </>
    );
};
