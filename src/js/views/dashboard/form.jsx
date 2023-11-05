import React from "react";
import "../../../css/app.css";
import { useTranslation } from "react-i18next";

export const Form = () => {
    const [t] = useTranslation("form");
    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500">
                <source
                    src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/videos%2FFormBlackBG.mp4?alt=media&token=86c02e17-80ce-4e04-b19b-a8a483a7969b&_gl=1*1myr9cd*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTM1OS42MC4wLjA."
                    type="video/mp4"
                />
            </video>
            <div className="font-serif text-black dark:text-white mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 m-auto">
                    {t("form")}
                </h1>
                <div className="glass p-10 mt-5 m-auto w-11/12">
                    {t("form")}
                </div>
            </div>
        </>
    );
};
