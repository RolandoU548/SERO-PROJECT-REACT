import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";

export const SebastianLopez = () => {
    const [t] = useTranslation("app");
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    return (
        <div className="font-serif text-gray-200">
            <div className="h-40"></div>
            <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white">
                Sebastián López
            </h2>
            <div className="glass rounded-2xl w-9/12 ml-40 mt-20 mb-16 flex justify-between">
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-80 invert bg-[url('SebastianLopezCard.jpg')] bg-center bg-cover rounded-2xl h-[23rem] flex text-white text-3xl font-semibold border-2 border-white"
                    onClick={() => {
                        navigate("/SebastianLopez");
                    }}>
                    <div className="bg-black absolute w-80 h-[23rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                </div>
                <div className="w-[50rem] p-10 text-2xl flex items-center">
                    <div>
                        <h2>Mejor conocido como: EL SEBA</h2>
                        <p className="mt-10">
                            Es diseñador gráfico y desarrollador Full-Stack,
                            especializado en Front-End.
                        </p>
                        <p className="mt-10">Conoce la psicología del consumidor y del usuario cibernauta.</p>
                        <p className="mt-10">Visionario del nombre SERØ.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
