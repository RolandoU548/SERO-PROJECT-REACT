import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/app.css";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "../components/LanguageButton";

export const Database = () => {
    const [t] = useTranslation("app");

    const [isOpen, setIsOpen] = useState(false);
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
                    <source src="../../../public/DatabaseBG.mp4" type="video/mp4" />
                </video>
                    <h2 className="py-3 text-4xl font-semibold ml-10 lg:ml-32 cursor-pointer" onClick={() => {
                        navigate("/")
                    }}>
                        SERØ.
                    </h2>
                <h1 className="mix-blend-difference lg:px-36 mt-24 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white">
                    Bienvenido al database mamaguevo!
                </h1>
            </div>
        </>
    );
};
