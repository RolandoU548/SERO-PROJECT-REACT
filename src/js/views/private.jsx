import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "../components/LanguageButton";

export const Private = () => {
    const [t] = useTranslation("private");

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div className="font-serif text-gray-200 min-h-screen">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[100%] h-[100%] -z-50 fixed object-cover">
                    <source src="SERO_BG.mp4" type="video/mp4" />
                </video>
                <header className="flex justify-between items-center z-40 relative top-0 w-full py-3">
                    <h2
                        className="text-4xl font-semibold ml-10 lg:ml-32 cursor-pointer"
                        onClick={() => {
                            navigate("/");
                        }}>
                        SERØ.
                    </h2>
                    <div
                        className="hidden resp:flex justify-center items-center mr-5 w-10 h-10 text-2xl bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer blue-transition"
                        onClick={() => {
                            setIsOpen(true);
                        }}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div
                        className={
                            "resp:fixed resp:top-0 resp:left-0 resp:w-full resp:h-screen resp:bg-[rgba(0,0,0,0.5)]" +
                            " " +
                            (isOpen ? "resp:block" : "hidden")
                        }
                        id="back__menu"
                        onClick={() => {
                            setIsOpen(false);
                        }}></div>
                    <nav
                        className={
                            "navbar-home mr-4 lg:mr-16 resp:dark:bg-zinc-950 resp:bg-white resp:m-0 resp:fixed resp:w-60 resp:h-screen resp:top-0 resp:p-7 resp:z-10" +
                            " " +
                            (isOpen ? "resp:right-0" : "resp:-right-60")
                        }>
                        <h2 className="text-gray-600 dark:text-gray-100 text-center text-4xl font-semibold hidden resp:block">
                            SERØ.
                        </h2>
                        <ul className="flex items-center resp:mt-5 resp:flex-col">
                            <li className="my-2.5">
                                <NavLink
                                    to="/private"
                                    className="text-xl font-medium ml-6 text-gray-200 hover:text-cyan-300 blue-transition resp:dark:text-gray-200 resp:text-gray-600 resp:m-0">
                                    {t("home")}
                                </NavLink>
                            </li>
                            <li className="my-2.5">
                                <NavLink
                                    to="/services"
                                    className="blue-transition text-xl font-medium ml-7 text-gray-200
                                hover:text-cyan-300 resp:dark:text-gray-200 resp:text-gray-600 resp:m-0">
                                    {t("services")}
                                </NavLink>
                            </li>
                            <li className="my-2.5">
                                <NavLink
                                    to="/contact"
                                    className="text-xl font-medium ml-7 text-gray-200 hover:text-cyan-300 blue-transition
                                resp:dark:text-gray-200 resp:text-gray-600 resp:m-0">
                                    {t("contacts")}
                                </NavLink>
                            </li>
                            <li className="my-2.5">
                                <button
                                    className="hover:bg-cyan-300 transition duration-300 hover:text-gray-600 w-40 text-xl p-2 text-black rounded-full bg-white ml-4 resp:dark:bg-gray-100 resp:m-0 resp:border resp:border-gray-400"
                                    onClick={() => {
                                        navigate("/login");
                                    }}>
                                    {t("login")}
                                </button>
                            </li>
                            <li className="my-2.5">
                                <button
                                    className="hover:bg-cyan-300 transition duration-300 hover:text-gray-600 w-40 text-xl p-2 text-black rounded-full bg-white ml-4 resp:dark:bg-gray-100 resp:m-0 resp:border resp:border-gray-400"
                                    onClick={() => {
                                        navigate("/signup");
                                    }}>
                                    {t("signup")}
                                </button>
                            </li>
                            <li className="my-2.5">
                                <LanguageButton className="ml-7 md:mt-2.5 resp:absolute resp:top-3 resp:right-5 w-9 h-6" />
                            </li>
                        </ul>
                    </nav>
                </header>
                <h2 className="mix-blend-difference lg:px-32 mt-24 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white">
                    {t("privateTitle")}
                </h2>
                <div className="mix-blend-difference mx-auto mt-20 w-4/5 h-14">
                    <h2 className="text-3xl text-center">{t("cardMessage")}</h2>
                </div>
                <a
                    className="cursor-pointer m-auto w-0 h-0
                    border-l-[60px] border-l-transparent
                    border-t-[35px] border-t-cyan-300
                    border-r-[60px] border-r-transparent block"
                    href="#cards"></a>
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
