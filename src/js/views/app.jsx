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
        </div>
    );
};
