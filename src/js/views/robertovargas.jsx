import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";

export const RobertoVargas = () => {
    const [t] = useTranslation("app");
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    return (
        <div className="font-serif text-gray-200">
            <div className="h-40"></div>
            <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white">
                Roberto Vargas
            </h2>
            <div className="glass rounded-2xl w-9/12 ml-40 mt-20 mb-16 flex justify-between">
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-80 bg-[url('../../../public/RobertoVargasCard.png')] bg-center bg-cover rounded-2xl h-[23rem] flex justify-center text-white text-3xl font-semibold border-2 border-white"
                    onClick={() => {
                        navigate("/RobertoVargas");
                    }}>
                    <div className="bg-black absolute w-80 h-[23rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                </div>
                <div className="w-[50rem] p-10 text-lg flex items-center">
                    <div>
                        <h2>Mejor conocido como: EL PASTOR.</h2>
                        <p className="mt-10">
                            Se gana la vida con su empresa <b>{"Roberto Vargas Solutions"} (RVS)</b> y crea sistemas de administración de datos.
                        </p>
                        <p className="mt-10">
                            Busca crear soluciones sencillas que optimicen el trabajo y del desarrollo en el proyecto.
                        </p>
                        <p className="mt-10">
                            Fue el responsable de establecer las bases y fundamentos de la esencia de SERØ.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
