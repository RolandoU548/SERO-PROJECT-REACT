import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";

export const RolandoUzcategui = () => {
    const [t] = useTranslation("app");
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    return (
        <div className="font-serif text-gray-200">
            <div className="h-40"></div>
            <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white">
                Rolando Uzcátegui
            </h2>
            <div className="glass rounded-2xl w-9/12 ml-40 mt-20 mb-16 flex justify-between">
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-80 bg-[url('RolandoUzcateguiCard.jpeg')] bg-center bg-cover rounded-2xl h-[23rem] flex justify-center text-white text-2xl font-semibold border-2 border-white"
                    onClick={() => {
                        navigate("/RolandoUzcategui");
                    }}></div>
                <div className="w-[50rem] p-10 text-xl flex items-center">
                    <div>
                        <h2>Mejor conocido como: EL SIR ROLAND.</h2>
                        <p className="mt-10">
                            Estudia Ingeniería de la Computación y es
                            desarrollador Full-Stack, su fuerte yace en el lado
                            del Back-End, sin embargo, es la mente maestra del
                            equipo y domina todas las areas sin ningún
                            inconveniente.
                        </p>
                        <p className="mt-10">
                            Fue quien estableció las principales tecnologías del
                            proyecto.
                        </p>
                        <p className="mt-10">
                            Esta no es su cara, su cara se desconoce por razones
                            desconocidas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
