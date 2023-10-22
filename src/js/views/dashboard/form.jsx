import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/app.css";
import { useTranslation } from "react-i18next";

export const Form = () => {
    const [t] = useTranslation("app");
    const navigate = useNavigate();
    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-screen h-screen -z-50 fixed object-cover top-0 left-0">
                <source src="FormBG.mp4" type="video/mp4" />
            </video>
            <div className="font-serif text-gray-200 mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-white m-auto">
                    Form
                </h1>
                <div className="glass p-10 mt-5 m-auto w-11/12">
                    Formulario por modelar
                </div>
            </div>
        </>
    );
};
