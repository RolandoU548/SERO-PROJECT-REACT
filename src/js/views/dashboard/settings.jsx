import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";

export const Settings = () => {
    const [t] = useTranslation("settings");

    const navigate = useNavigate();
    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fsettings%2FSettingsBG.jpg?alt=media&token=d9fc16d3-d17e-493a-8687-66a510db7e2b&_gl=1*c2g6eh*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MTM1Mi4xNi4wLjA."
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="font-serif text-black dark:text-white mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 m-auto">
                    {t("settings")}
                </h1>
                <div className="glass p-10 mt-5 m-auto w-11/12">
                    {t("settings")}
                </div>
            </div>
        </>
    );
};
