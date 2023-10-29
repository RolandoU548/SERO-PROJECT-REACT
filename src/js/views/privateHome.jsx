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
                <source
                    src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/videos%2FPrivateBG.mp4?alt=media&token=d9de417f-aec2-4d07-b201-d36d3358967c&_gl=1*1jtz5m*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1ODcwMy42MC4wLjA."
                    type="video/mp4"
                />
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
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-72 bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDataBaseCardBGCrop.jpg?alt=media&token=2e184e84-c061-4204-8a57-0ed23ad73790&_gl=1*17loil3*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MDAwMS42MC4wLjA.')] bg-cover rounded-2xl h-[25rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group relative"
                    onClick={() => {
                        navigate("/database");
                    }}>
                    <div className="bg-black absolute w-full h-full rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10 text-center">{t("databaseCard")}</h2>
                </div>
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-72 bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FFormCardBG.jpg?alt=media&token=f42d2fea-fe65-411a-a6fa-6140187eaea8&_gl=1*1eaq0ks*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MDUzNy41NS4wLjA.')] bg-center bg-cover rounded-2xl h-[25rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group relative"
                    onClick={() => {
                        navigate("/form");
                    }}>
                    <div className="bg-black absolute w-full h-full rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10">{t("formCard")}</h2>
                </div>
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-72 bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FClientsCardBG.jpg?alt=media&token=f601f515-64e0-4fe4-a297-1b999876d15a&_gl=1*1odl6qd*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MDkwNC41My4wLjA.')] bg-center bg-cover rounded-2xl h-[25rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group relative"
                    onClick={() => {
                        navigate("/clients");
                    }}>
                    <div className="bg-black absolute w-full h-full rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10">Clients</h2>
                </div>
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-72 bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDashboardCardBG.jpg?alt=media&token=db56f99f-811d-4ba3-9a0c-57c0fffb6703&_gl=1*15ykx8a*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTg1NS4zMy4wLjA.')] bg-center bg-cover rounded-2xl h-[25rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group relative"
                    onClick={() => {
                        navigate("/dashboard");
                    }}>
                    <div className="bg-black absolute w-full h-full rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10 text-center">{t("dashboardCard")}</h2>
                </div>
            </div>
        </>
    );
};
