import React from "react";
import { Link } from "react-router-dom";
import "../../css/app.css";

export const App = () => {
    return (
        <>
            <div className="video-container">
                <video autoPlay loop muted playsInline className="back-video">
                    <source
                        src="src/assets/media/SERO Live Background Short Loop.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="triangle"></div>
                {/* Agrega el triángulo encima del video */}
                <h1>Solucionamos tu problema</h1>
            </div>
            <header className="header" style={{ marginTop: "0" }}>
                <Link to="/" className="logo">
                    SERØ.
                </Link>
                <nav className="navbar">
                    <Link to="/" className="active">
                        Inicio
                    </Link>
                    <Link to="/">Servicios</Link>
                    <Link to="/">Contacto</Link>
                    <button className="login-button">Iniciar sesión</button>
                </nav>
            </header>
        </>
    );
};
