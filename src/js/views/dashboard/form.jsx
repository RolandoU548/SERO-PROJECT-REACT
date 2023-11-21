import React from "react";
import "../../../css/app.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const Form = () => {
    const [t] = useTranslation("form");
    const navigate = useNavigate();

    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="invert w-screen h-screen -z-50 fixed top-0 left-0 object-cover dark:invert-0 transition duration-500">
                <source src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/videos%2FFormBlackBG.mp4?alt=media&token=86c02e17-80ce-4e04-b19b-a8a483a7969b" type="video/mp4" />
            </video>
            <div className="font-serif text-black dark:text-white mt-28">
                <h2 className="w-10/12 text-3xl minimum:text-4xl md:text-5xl lg:text-6xl font-black z-10 m-auto">
                    {t("form")}
                </h2>
            </div>
            <div className="w-11/12 flex justify-center gap-4 mx-16 mt-8 h-36">
                <div
                    className="glass w-8/12 p-4 m-2 flex flex-col items-center justify-center cursor-pointer text-2xl"
                    onClick={() => {
                        navigate("/inviteClientForm");
                    }}>
                    <div className="font-bold text-black dark:text-white flex gap-2 items-center">
                        {t("clients")}
                        <div className="font-bold dark:text-cyan-300 text-cyan-500">
                            {t("form1")}
                        </div>
                    </div>
                </div>
                <div
                    className="glass w-8/12 p-4 m-2 flex flex-col items-center justify-center cursor-pointer text-2xl"
                    onClick={() => {
                        navigate("/inviteDatabaseForm");
                    }}>
                    <div className="font-bold text-black dark:text-white flex gap-2 items-center">
                        {t("database")}
                        <div className="font-bold dark:text-cyan-300 text-cyan-500">
                            {t("form1")}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
