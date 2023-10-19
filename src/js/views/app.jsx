import React from "react";
import { Link } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";

export const App = () => {
    const [t] = useTranslation("app");
    return (
        <div className="font-serif text-gray-200">
            <div className="h-64"></div>
            <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white">
                {t("title")}
            </h2>
            <h2 className="mix-blend-difference lg:px-6 mt-8 text-lg minimum:text-[0.5rem] tiny:text-2xl sm:text-3xl md:text-[45px] font-black z-10 text-center text-white">
                {t("subtitle")}
            </h2>
            <Link
                className="w-[250px] hover:bg-[#00f2ff80] transition duration-300 m-auto block mt-16 p-4 text-3xl text-center border border-white rounded-full"
                to="/login-signup">
                {t("getStarted")}
            </Link>
            <div className="glass w-4/5 p-12 mt-40 mb-10 m-auto text-2xl ">
                <h2 className="text-5xl">{t("aboutUs")}</h2>
                <p className="my-10">{t("whoWeAre")}</p>
                <p className="mt-10">{t("description")}</p>
            </div>
            <h2 className="mix-blend-difference mt-28 lg:px-6 mt-8 text-lg minimum:text-[0.5rem] tiny:text-3xl sm:text-3xl md:text-6xl font-black z-10 flex justify-end text-white mr-20">
                Services
            </h2>
            <div className="flex justify-end">
                <div className="glass w-9/12 p-12 mt-10 mb-10 mr-20 text-2xl ">
                    <p className="">
                        SERØ permite organizar sus datos, una vez haya iniciado
                        sesión podrá crear una base de datos a su gusto, con
                        columnas y filas personalizadas.
                    </p>
                    <p className="mt-10">
                        También podrá crear formularios para rellenar sus bases
                        de datos personalizadas, administrar sus clientes, pagos
                        y demás funciones que aportarán comodidad y simplicidad
                        a sus organización de datos.
                    </p>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-20 mt-20 mb-16 flex justify-between">
                <div className="ease-out duration-300 hover:scale-105 w-96 bg-[url('DataBaseCardBG.jpeg')] bg-right bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white">
                    <div className="bg-black absolute w-96 h-[28rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10">{t("databaseCard")}</h2>
                </div>
                <div className="w-8/12 p-10 text-2xl flex items-center">
                    <h2>
                        SERO es una aplicación de base de datos que te ayuda a
                        almacenar, gestionar y acceder a tus datos de forma
                        segura y eficiente. SERO está diseñado para ser fácil de
                        usar, incluso para usuarios sin conocimientos técnicos.
                        La aplicación cuenta con una interfaz intuitiva que te
                        permite crear y gestionar bases de datos sin esfuerzo.
                        SERO también ofrece una amplia gama de características y
                        funcionalidades para ayudarte a sacar el máximo partido
                        a tus datos.
                    </h2>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-64 mt-20 mb-16 flex justify-end">
                <div className="ease-out duration-300 hover:scale-105 w-96 bg-[url('FormCardBG.webp')] bg-center bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white">
                    <div className="bg-black absolute w-96 h-[28rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10">{t("formCard")}</h2>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-20 mt-20 mb-16 flex justify-between">
                <div className="ease-out duration-300 hover:scale-105 w-96 bg-[url('DashboardCardBG.jpg')] bg-center bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white">
                    <div className="bg-black absolute w-96 h-[28rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10">{t("dashboardCard")}</h2>
                </div>
            </div>
        </div>
    );
};
