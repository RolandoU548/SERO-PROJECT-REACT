import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const [t] = useTranslation("app");
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    return (
        <div className="font-serif text-gray-200">
            <h2 className="mix-blend-difference lg:px-32 mt-24 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white">
                {t("title")}
            </h2>
            <h2 className="mix-blend-difference lg:px-6 mt-8 text-lg minimum:text-[0.5rem] tiny:text-2xl sm:text-3xl md:text-[45px] font-black z-10 text-center text-white">
                {t("contacts")}
            </h2>
            <button
                onClick={() => {
                    actions.setToken("Hey");
                }}>
                HOLA
            </button>
            <button
                onClick={() => {
                    navigate("/private");
                }}>
                ADIOS
            </button>
        </div>
    );
};
