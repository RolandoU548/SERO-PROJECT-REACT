import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";

export const Reports = () => {
    const [t] = useTranslation("reports");

    const navigate = useNavigate();
    return (
        <>
            <img
                src="ReportsBG.jpg"
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="font-serif text-gray-200 mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-white m-auto">
                    {t("reports")}
                </h1>
                <div className="glass p-10 mt-5 m-auto w-11/12">
                    {t("reports")}
                </div>
            </div>
        </>
    );
};
