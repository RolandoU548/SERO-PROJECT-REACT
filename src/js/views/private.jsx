import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";

export const Private = () => {
    const [t] = useTranslation("private");

    const navigate = useNavigate();
    return (
        <>
            <div className="font-serif text-gray-200">
                {/* <h2 className="mix-blend-difference lg:px-32 mt-24 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white">
                    {t("privateTitle")}
                </h2> */}
                <div className="">
                    <div className="mix-blend-difference mx-auto mt-20 w-4/5 h-14">
                        <h2 className="text-3xl text-center">
                            {t("cardMessage")}
                        </h2>
                    </div>
                    <a
                        className="cursor-pointer m-auto w-0 h-0
                    border-l-[60px] border-l-transparent
                    border-t-[35px] border-t-cyan-300
                    border-r-[60px] border-r-transparent block"
                        href="#cards"></a>
                </div>
            </div>
            <div
                className="flex justify-evenly flex-wrap my-10 gap-5"
                id="cards">
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('DataBaseCardBG.jpeg')] bg-right bg-cover rounded-2xl h-[30rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white"
                    onClick={() => {
                        navigate("/database");
                    }}>
                    <div className="bg-black absolute w-96 h-[30rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10">{t("databaseCard")}</h2>
                </div>
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('FormCardBG.webp')] bg-center bg-cover rounded-2xl h-[30rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white"
                    onClick={() => {
                        navigate("/form");
                    }}>
                    <div className="bg-black absolute w-96 h-[30rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10">{t("formCard")}</h2>
                </div>
                <div className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('DashboardBG.jpg')] bg-center bg-cover rounded-2xl h-[30rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white">
                    <div className="bg-black absolute w-96 h-[30rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10">{t("dashboardCard")}</h2>
                </div>
            </div>
        </>
    );
};
