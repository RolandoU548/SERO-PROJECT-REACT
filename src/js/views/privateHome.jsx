import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";

export const PrivateHome = () => {
    const [t] = useTranslation("private");
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/signup");
        }
    }, []);

    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-screen h-screen -z-50 fixed object-cover top-0 dark:invert-0 invert transition duration-500">
                <source src="PrivateBG.mp4" type="video/mp4" />
            </video>
            <div className="font-serif text-gray-200">
                <div className="mb-10 mt-32">
                    <div className="mix-blend-difference mx-auto w-4/5 h-14">
                        <h2 className="text-5xl text-center">
                            {t("cardMessage")}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly flex-wrap my-10 gap-5">
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('DataBaseCardBGCrop.jpg')] bg-cover rounded-2xl h-[30rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group"
                    onClick={() => {
                        navigate("/database");
                    }}>
                    <div className="bg-black absolute w-96 h-[30rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10">{t("databaseCard")}</h2>
                </div>
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('FormCardBG.jpg')] bg-center bg-cover rounded-2xl h-[30rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group"
                    onClick={() => {
                        navigate("/form");
                    }}>
                    <div className="bg-black absolute w-96 h-[30rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10">{t("formCard")}</h2>
                </div>
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('DashboardCardBG.jpg')] bg-center bg-cover rounded-2xl h-[30rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group"
                    onClick={() => {
                        navigate("/dashboard");
                    }}>
                    <div className="bg-black absolute w-96 h-[30rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10">{t("dashboardCard")}</h2>
                </div>
            </div>
        </>
    );
};
