import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";

export const SebastianCastroRajbe = () => {
    const [t] = useTranslation("app");
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    return (
        <div className="font-serif text-gray-200">
            <div className="h-40"></div>
            <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white">
                Sebastián Castro Rajbe
            </h2>
            <div className="glass rounded-2xl w-9/12 ml-40 mt-20 mb-16 flex justify-between">
                <div
                    className="invert cursor-pointer ease-out duration-300 hover:scale-105 w-80 bg-[url('SebastianCastroRajbeCard.jpg')] bg-center bg-cover rounded-2xl h-[23rem] flex justify-center text-white text-2xl font-semibold border-2 border-white"
                    onClick={() => {
                        navigate("/SebastianCastroRajbe");
                    }}>
                    <div className="bg-black absolute w-80 h-[23rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                </div>
                <div className="w-8/12 p-10 text-2xl flex items-center">
                    <h2>BYNX</h2>
                </div>
            </div>
        </div>
    );
};
