import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css"
import { useTranslation } from "react-i18next";

export const Payments = () => {
    const [t] = useTranslation("app");

    const navigate = useNavigate();
    return (
        <>
            <div className="font-serif text-gray-200 min-h-screen">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[100%] h-[100%] -z-50 fixed object-cover">
                    <source src="DatabaseBG.mp4" type="video/mp4" />
                </video>
                <h2
                    className="py-3 text-4xl font-semibold ml-10 lg:ml-32 cursor-pointer"
                    onClick={() => {
                        navigate("/private");
                    }}>
                    SERØ.
                </h2>
                <h1 className="mix-blend-difference lg:px-36 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-white">
                    Payments
                </h1>
                <div className="glass p-10 w-11/12 mt-5 m-auto">
                    Base de datos por modelar...
                </div>
            </div>
        </>
    );
};
