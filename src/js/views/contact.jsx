import React from "react";
import { useTranslation } from "react-i18next";
import { ContactCard } from "../components/contact/ContactCard.jsx";
import { useNavigate } from "react-router-dom";
import "../../css/glass.css";
import "../../css/tadaAnimation.css"

export const Contact = () => {
    const [t] = useTranslation("contact");
    const navigate = useNavigate();
    return (
        <div className="font-serif text-gray-200">
            <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-7xl font-black z-10 text-center text-white mt-36">
                {t("founders")}
            </h2>
            <div className="flex justify-evenly flex-wrap mt-20">
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
            <div className="flex gap-30 justify-center">
                <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-5xl font-black z-10 ml-30 text-white mt-36">
                    Tecnologías de Front-End
                </h2>
                <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-5xl font-black z-10 ml-30 text-white mt-36">
                    Tecnologías de Front-End
                </h2>
            </div>
            <div className="flex gap-[25rem] justify-center">
                <div className="flex flex-col gap-7 glass w-[40rem] p-5 mt-12 items-center">
                    <div className="flex gap-40 m-5">
                        <div className="invert rounded-full p-1 w-36 logo animated tada">
                            <img
                                src="html5-logo.jpg"
                                className="rounded-full w-40"
                            />
                        </div>
                        <div className="invert rounded-full p-1 w-36 logo animated tada">
                            <img
                                src="css3-logo.jpeg"
                                className="rounded-full w-40"
                            />
                        </div>
                    </div>
                    <div className="flex gap-40">
                        <div className="logo animated tada">
                            <img src="sass-logo.png" className="w-36 mt-3" />
                        </div>
                        <div className="logo animated tada">
                            <img
                                src="javascript-logo.png"
                                className="w-36 rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex gap-40 my-10">
                        <div className="logo animated tada">
                            <img
                                src="react-logo.png"
                                className="w-36 rounded-lg"
                            />
                        </div>
                        <div className="logo animated tada">
                            <img src="vite-logo.png" className="w-36" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-7 glass w-[27rem] p-5 ml-32 mt-12 items-center">
                    <div className="flex gap-7">
                        <div className="invert rounded-full p-1 w-36">
                            <img
                                src="html5-logo.jpg"
                                className="rounded-full w-40"
                            />
                        </div>
                        <div className="invert rounded-full p-1 w-36">
                            <img
                                src="css3-logo.jpeg"
                                className="rounded-full w-40"
                            />
                        </div>
                    </div>
                    <div className="flex gap-7">
                        <div>
                            <img src="sass-logo.png" className="w-36 mt-3" />
                        </div>
                        <div>
                            <img
                                src="javascript-logo.png"
                                className="w-36 rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex gap-7">
                        <div>
                            <img
                                src="react-logo.png"
                                className="w-36 rounded-lg"
                            />
                        </div>
                        <div>
                            <img src="vite-logo.png" className="w-36" />
                        </div>
                    </div>
                </div>
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
