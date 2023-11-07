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
                className="invert w-screen h-screen -z-50 fixed top-0 left-0 object-cover dark:invert-0 transition duration-500">
                <source src="DatabaseBG.mp4" type="video/mp4" />
            </video>
            <div className="font-serif text-black dark:text-white mt-28">
                <h2 className="w-10/12 text-3xl minimum:text-4xl md:text-5xl lg:text-6xl font-black z-10 m-auto">
                    {t("form")}
                </h2>
            </div>
            <div className="w-11/12 flex justify-center gap-4 mx-16 mt-8 h-36">
                <div className="glass w-8/12 p-4 m-2 flex flex-col items-center justify-center cursor-pointer">
                    <div className="font-bold text-black dark:text-white flex gap-2 items-center">
                        CLIENTS
                        <div className="font-bold dark:text-cyan-300 text-cyan-500">
                            FORM
                        </div>
                    </div>
                </div>
                <div className="glass w-8/12 p-4 m-2 flex flex-col items-center justify-center cursor-pointer">
                    <div className="font-bold text-black dark:text-white flex gap-2 items-center">
                        DATABASE
                        <div className="font-bold dark:text-cyan-300 text-cyan-500">
                            FORM
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
