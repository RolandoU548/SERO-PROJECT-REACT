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
        <div className="font-serif dark:text-gray-200 text-black">
            <h2 className="dark:mix-blend-difference text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-[200] text-center mt-48 text-black dark:text-white">
                {t("title")}
            </h2>
            <h2 className="dark:mix-blend-difference lg:px-6 mt-8 text-lg minimum:text-xl tiny:text-2xl sm:text-3xl md:text-[45px] font-black z-[200] text-center text-black dark:text-white">
                {t("subtitle")}
            </h2>
            <div className="flex justify-center mt-10">
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
