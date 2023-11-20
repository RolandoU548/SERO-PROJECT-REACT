import React from "react";
import { useTranslation } from "react-i18next";
import { FounderCard } from "../components/founders/FounderCard.jsx";
import { useNavigate } from "react-router-dom";
import "../../css/glass.css";
import "../../css/tadaAnimation.css";

export const Founder = () => {
    const [t] = useTranslation("founders");
    const navigate = useNavigate();
    return (
        <div className="font-serif text-white">
            <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-7xl font-black z-10 text-center mt-36">
                {t("founders")}
            </h2>
            <div className="flex justify-evenly flex-wrap mt-10">
                <FounderCard
                    to="SebastianLopez"
                    first="SE"
                    second="bastián López"
                />
                <FounderCard
                    to="SebastianCastroRajbe"
                    first="SE"
                    second="bastián
                    Castro Rajbe"
                />
                <FounderCard
                    to="RobertoVargas"
                    first="RØ"
                    second="berto Vargas"
                />
                <FounderCard
                    to="RolandoUzcategui"
                    first="RØ"
                    second="lando Uzcátegui"
                />
            </div>
            <h2 className="mix-blend-difference font-black z-10 text-center mt-16 w-full text-5xl">
                {t("frontEndTechnologies")}
            </h2>
            <div className="flex flex-wrap gap-2 glass w-11/12 p-5 mt-12 justify-evenly m-auto items-center">
                <div className="rounded-full p-1 w-36 logo animated tada">
                    <img src="html5-logo.jpg" className="rounded-full w-40" />
                </div>
                <div className="rounded-full p-1 w-36 logo animated tada">
                    <img src="css3-logo.jpeg" className="rounded-full w-40" />
                </div>
                <div className="logo animated tada">
                    <img src="sass-logo.png" className="w-36 mt-3" />
                </div>
                <div className="logo animated tada">
                    <img
                        src="javascript-logo.png"
                        className="w-36 rounded-lg"
                    />
                </div>
                <div className="logo animated tada">
                    <img src="react-logo.png" className="w-36 rounded-lg" />
                </div>
                <div className="logo animated tada">
                    <img src="vite-logo.png" className="w-36" />
                </div>
            </div>
            <h2 className="mix-blend-difference font-black z-10 text-center mt-16 w-full text-5xl">
                {t("frontEndFrameworks")}
            </h2>
            <div className="flex flex-wrap gap-2 glass w-11/12 p-5 mt-12 justify-evenly m-auto items-center">
                <div className="flex items-center w-36 h-28 bg-white rounded-lg logo animated tada border-2 border-cyan-300">
                    <img
                        src="tailwind-logo.png"
                        className="rounded-lg w-full"
                    />
                </div>
                <div className="invert rounded-lg bg-white w-36 h-28 logo animated tada flex items-center justify-center">
                    <img
                        src="handsontable-logo.png"
                        className="rounded-lg w-full"
                    />
                </div>
                <div
                    className="logo animated tada w-36 h-28 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: "rgba(7, 18, 42, 255)" }}>
                    <img
                        src="react-hook-form-logo.png"
                        className="w-full rounded-lg"
                    />
                </div>
                <div className="logo animated tada w-36 h-28 flex items-center">
                    <img src="i18next.webp" className=" rounded-lg" />
                </div>
                <div className="logo animated tada w-36 h-28 flex items-center">
                    <img src="dayjs-logo.png" className="w-full" />
                </div>
                <div className="logo animated tada w-36 h-28 flex items-center">
                    <img
                        src="framer-motion-logo.png"
                        className="w-full rounded-lg"
                    />
                </div>
                <div className="logo animated tada w-36 h-20 object-cover">
                    <img
                        src="victoryjs-logo.png"
                        className="rounded-lg w-full h-full"
                    />
                </div>
            </div>
            <h2 className="mix-blend-difference font-black z-10 text-center mt-16 w-full text-5xl">
                {t("backEndTechnologies")}
            </h2>
            <div className="flex flex-wrap gap-2 glass w-11/12 p-5 mt-12 justify-evenly m-auto items-center">
                <div className="p-3 flex items-center logo animated tada">
                    <img src="nodejs-logo.png" className="rounded-lg w-48" />
                </div>
                <div className="dark:invert transition duration-300 rounded-lg p-1 h-28 logo animated tada flex items-center justify-center">
                    <img src="flask-logo.png" className="rounded-lg w-20" />
                </div>
                <div className="logo animated tada w-40 h-28 flex items-center justify-center rounded-lg">
                    <img src="python-logo.png" className="w-36" />
                </div>
                <div className="bg-white p-5 rounded-lg logo animated tada">
                    <img
                        src="sqlalchemy-logo.jpg"
                        className="w-40 rounded-lg"
                    />
                </div>
                <div className="bg-white flex items-center justify-center p-4 w-48 h-24 rounded-lg logo animated tada">
                    <img src="firebase-logo.jpg" className="w-36" />
                </div>
            </div>
            <h2 className="mix-blend-difference font-black z-10 text-center mt-16 w-full text-5xl">
                {t("backEndFrameworks")}
            </h2>
            <div className="flex flex-wrap gap-2 glass max-w-[30rem] w-11/12 p-5 my-12 justify-evenly m-auto items-center">
                <div className="p-3 flex items-center logo animated tada">
                    <img src="jwt-logo.png" className="rounded-lg w-48" />
                </div>
                <div className="bg-white p-5 rounded-lg logo animated tada">
                    <img src="bcrypt-logo.png" className="w-24 rounded-lg" />
                </div>
            </div>
            {/* <div className="mt-16">
                <button
                    className="block dark:text-gray-200 text-black"
                    onClick={() => {
                        localStorage.setItem(
                            "token",
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDAyMTg0MCwianRpIjoiNzMxMmRmZGItODZkNi00Y2FlLThmMWUtOWQ4MjMwY2I1NTA5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6InJvbGFuZG91NTQ4QGdtYWlsLmNvbSIsIm5iZiI6MTcwMDAyMTg0MCwiZXhwIjoxNzAwMTA4MjQwfQ.57jBfh6D2hqAm7JXTNH9lwS1XaMnBCLv1MrnW535MJA"
                        );
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
            </div> */}
        </div>
    );
};
