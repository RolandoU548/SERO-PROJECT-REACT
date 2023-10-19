import React from "react";
import { Link } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";

export const App = () => {
    const [t] = useTranslation("app");
    return (
        <div className="font-serif text-gray-200">
            <h2 className="mix-blend-difference lg:px-32 mt-40 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white">
                {t("title")}
            </h2>
            <h2 className="mix-blend-difference lg:px-6 mt-8 text-lg minimum:text-[0.5rem] tiny:text-2xl sm:text-3xl md:text-[45px] font-black z-10 text-center text-white">
                {t("subtitle")}
            </h2>
            <Link
                className="w-[250px] hover:bg-[#00f2ff80] transition duration-300 m-auto block mt-16 p-4 text-3xl text-center border border-white rounded-full"
                to="/login-signup">
                {t("getStarted")}
            </Link>
            <div className="glass w-4/5 p-12 mt-40 mb-10 m-auto text-2xl ">
                <h2 className="text-5xl">{t("aboutUs")}</h2>
                <p className="my-10">{t("whoWeAre")}</p>
                <p className="mt-10">{t("description")}</p>
            </div>
            <h2 className="mix-blend-difference mt-28 lg:px-6 mt-8 text-lg minimum:text-[0.5rem] tiny:text-3xl sm:text-3xl md:text-6xl font-black z-10 flex justify-end text-white mr-20">
                Services
            </h2>
            <div className="flex justify-end">
                <div className="glass w-9/12 p-12 mt-10 mb-10 mr-20 text-2xl ">
                    <h2 className="text-5xl"></h2>
                    <p className="my-10">
                        SERO permite organizar tus datos, una vez haya iniciado
                        sesión podrá crear una base de{" "}
                    </p>
                    <p className="mt-10">{t("description")}</p>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-20 mt-28 mb-16 flex justify-between">
                <div className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('DataBaseCardBG.jpeg')] bg-right bg-cover rounded-2xl h-[30rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white">
                    <div className="bg-black absolute w-96 h-[30rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10">{t("databaseCard")}</h2>
                </div>
            </div>
            <div>
                <div className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('FormCardBG.webp')] bg-center bg-cover rounded-2xl h-[30rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white">
                    <div className="bg-black absolute w-96 h-[30rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10">{t("formCard")}</h2>
                </div>
            </div>
            <div className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('DashboardBG.jpg')] bg-center bg-cover rounded-2xl h-[30rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white">
                <div className="bg-black absolute w-96 h-[30rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                <h2 className="z-10">{t("dashboardCard")}</h2>
            </div>
        </div>
    );
};
