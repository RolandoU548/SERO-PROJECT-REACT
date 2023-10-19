import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";

export const Private = () => {
    const [t] = useTranslation("private");
    const { store, actions } = useContext(Context);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-screen h-screen -z-50 fixed object-cover">
                <source src="PrivateBG.mp4" type="video/mp4" />
            </video>
            {token ? (
                <>
                    <div className="font-serif text-gray-200">
                        <div className="my-20">
                            <div className="mix-blend-difference mx-auto w-4/5 h-14">
                                <h2 className="text-5xl text-center">
                                    {t("cardMessage")}
                                </h2>
                            </div>
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
            ) : (
                <div className="font-serif text-gray-200">
                    <div className="my-20">
                        <div className="mix-blend-difference mx-auto w-4/5 h-14">
                            <h2 className="text-5xl text-center">
                                Inicia Sesión
                            </h2>
                        </div>
                    </div>
                    <button
                        className="m-auto block text-4xl"
                        onClick={() => {
                            actions.signOut();
                            navigate("/");
                        }}>
                        Ir a inicio
                    </button>
                </div>
            )}
        </>
    );
};
