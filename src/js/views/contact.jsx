import React from "react";
import { useTranslation } from "react-i18next";
import { ContactCard } from "../components/contact/ContactCard.jsx";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
    const [t] = useTranslation("contact");
    const navigate = useNavigate();
    return (
        <div className="font-serif text-gray-200">
            <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-7xl font-black z-10 text-center text-white mt-36">
                {t("founders")}
            </h2>
            <div className="flex justify-evenly flex-wrap my-20">
                <ContactCard
                    to="SebastianLopez"
                    first="SE"
                    second="bastián López"
                />
                <ContactCard
                    to="SebastianCastroRajbe"
                    first="SE"
                    second="bastián
                    Castro Rajbe"
                />
                <ContactCard
                    to="RobertoVargas"
                    first="RØ"
                    second="berto Vargas"
                />
                <ContactCard
                    to="RolandoUzcategui"
                    first="RØ"
                    second="lando Uzcátegui"
                />
            </div>
            <div>
                <button
                    className="block dark:text-gray-200 text-black"
                    onClick={() => {
                        localStorage.setItem("token", "sdfas2e");
                    }}>
                    token
                </button>
                <button
                    className="text-4xl block dark:text-gray-200 text-black"
                    onClick={() => {
                        navigate("/private");
                    }}>
                    PRIVATE
                </button>
            </div>
        </div>
    );
};
