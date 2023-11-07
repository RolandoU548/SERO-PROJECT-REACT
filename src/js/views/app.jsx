import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";
import { Services } from "./animations/Services";
import { Contact } from "./animations/Contact";
import { Functionalities } from "./animations/Functionalities";

export const App = () => {
    const [t] = useTranslation("app");
    const navigate = useNavigate();
    if (localStorage.getItem("token")) {
        navigate("/private");
    }

    return (
        <div className="font-serif dark:text-white">
            <div className="flex flex-col justify-center items-center gap-10 h-screen md:mt-10">
                <h2 className="dark:mix-blend-difference text-3xl tiny:text-6xl sm:text-7xl md:text-8xl font-black text-center">
                    {t("title")}
                </h2>
                <h2 className="dark:mix-blend-difference lg:px-6 text-lg minimum:text-xl tiny:text-2xl sm:text-3xl md:text-[45px] font-black text-center">
                    {t("subtitle")}
                </h2>
                <Link
                    className="hover:bg-[#00f2ff80] transition duration-300 py-[1vw] px-[2vw] resp:py-[2vw] resp:px-[4vw] text-md minimum:text-lg tiny:text-xl sm:text-2xl md:text-3xl text-center border dark:border-white border-black rounded-full"
                    to="/signup">
                    {t("getStarted")}
                </Link>
            </div>
            <Services />
            <Functionalities />
            <Contact />
        </div>
    );
};
