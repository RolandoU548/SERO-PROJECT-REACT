import React from "react";
import "../../css/app.css";
import { useTranslation } from "react-i18next";
import { FuncionalityCard } from "../components/privateHome/FuncionalityCard.jsx";

export const PrivateHome = () => {
    const [t] = useTranslation("private");

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
            <h2 className="font-serif dark:text-white text-5xl text-center mb-10 mt-32 mx-auto w-4/5 font-semibold">
                {t("cardMessage")}
            </h2>
            <div className="flex justify-evenly flex-wrap my-10 gap-5">
                <FuncionalityCard
                    title={t("databaseCard")}
                    to="/database"
                    image="bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDatabaseCardBG.jpg?alt=media&token=121e9b31-e173-4df5-9c05-620aefbc88e0.')]"
                />
                <FuncionalityCard
                    title={t("formCard")}
                    to="/form"
                    image="bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FFormCardBG.jpg?alt=media&token=f42d2fea-fe65-411a-a6fa-6140187eaea8&_gl=1*1eaq0ks*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MDUzNy41NS4wLjA.')]"
                />
                <FuncionalityCard
                    title={t("clientsCard")}
                    to="/clients"
                    image="bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FClientsCardBG.jpg?alt=media&token=f601f515-64e0-4fe4-a297-1b999876d15a&_gl=1*1odl6qd*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MDkwNC41My4wLjA.')]"
                />
                <FuncionalityCard
                    title={t("dashboardCard")}
                    to="/dashboard"
                    image="bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDashboardCardBG.jpg?alt=media&token=db56f99f-811d-4ba3-9a0c-57c0fffb6703&_gl=1*15ykx8a*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTg1NS4zMy4wLjA.')]"
                />
            </div>
        </>
    );
};
