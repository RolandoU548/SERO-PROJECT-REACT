import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";

export const App = () => {
    const [t] = useTranslation("app");
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/private");
        }
    }, []);
    return (
        <div className="font-serif text-gray-200">
            <div className="h-64"></div>
            <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white">
                {t("title")}
            </h2>
            <h2 className="mix-blend-difference lg:px-6 mt-8 text-lg minimum:text-xl tiny:text-2xl sm:text-3xl md:text-[45px] font-black z-10 text-center text-white">
                {t("subtitle")}
            </h2>
            <Link
                className="w-[250px] hover:bg-[#00f2ff80] transition duration-300 m-auto block mt-16 p-4 text-3xl text-center border border-white rounded-full"
                to="/signup">
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
                        SERØ está diseñado para ser fácil de usar, incluso para
                        usuarios sin conocimientos técnicos. La aplicación
                        cuenta con una interfaz intuitiva que permite crear y
                        gestionar bases de datos sin esfuerzo.
                    </p>
                    <p className="mt-10">
                        En la plataforma se ofrece una amplia gama de
                        características y funcionalidades para ayudar a sacar el
                        máximo partido a los datos de una empresa o cualquier
                        otra entidad. Con esta Web App tendrá la posibilidad de:
                    </p>
                    <br></br>
                    <ul>
                        <li>- Organizar sus datos.</li>
                        <li>- Crear una base de datos personalizada.</li>
                        <li>
                            - Crear formularios para rellenar su base de datos.
                        </li>
                        <li>- Ver un resumen de sus datos.</li>
                        <li>- Tener un listado de clientes.</li>
                        <li>- Tener control sobre un historial de reportes.</li>
                        <li>- Administrar sus pagos.</li>
                        <li>- Pertenecer a una Organización.</li>
                    </ul>
                    <p className="mt-10">
                        Todo esto lo podrá hacer una vez se haya registrado o
                        iniciado sesión. ¡No espere más! Comience a organizar
                        sus datos hoy mismo{" "}
                        <Link to="/signup" className="text-cyan-300 underline">
                            registrándose en SERØ.
                        </Link>
                    </p>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-20 mt-20 mb-16 flex justify-between">
                <div className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('DataBaseCardBGCrop.jpg')] bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white">
                    <div
                        className="bg-black absolute w-96 h-[28rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"
                        onClick={() => {
                            navigate("/signup");
                        }}></div>
                    <h2 className="z-10 text-center">{t("databaseCard")}</h2>
                </div>
                <div className="w-8/12 p-10 text-2xl items-center">
                    <p>
                        La base de datos le ayudará a almacenar, gestionar y
                        acceder a sus datos de forma segura y eficiente.
                    </p>
                    <p className="mt-10">
                        Podrá crear una base de datos a su gusto, con columnas y
                        filas personalizadas. Tendrá la posibilidad de asignar
                        clientes y formularios que estarán enlazados a la tabla
                        de la base de datos.
                    </p>
                    <p className="mt-10">
                        Genere sus tablas de manera fácil y organizada, cree su
                        propia organización o únase a una donde compartan los
                        mismos datos entre varios y simplifique sus datos en
                        conjunto.
                    </p>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-64 mt-20 mb-16 flex justify-end">
                <div className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('FormCardBG.jpg')] bg-center bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white">
                    <div
                        className="bg-black absolute w-96 h-[28rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"
                        onClick={() => {
                            navigate("/signup");
                        }}></div>
                    <h2 className="z-10 text-center">{t("formCard")}</h2>
                </div>
                <div className="w-8/12 p-10 text-2xl items-center">
                    <p>
                        Tendrá la posibilidad de crear sus propios formularios
                        para rellenar sus bases de datos de manera
                        personalizada, fácil y rápido.
                    </p>
                    <p className="mt-10">
                        Este apartado le será de mucha utilidad, ya que podrá
                        enviarle dichos formularios a sus clientes para que
                        rellenen sus propios datos por usted, generando fluidez
                        en el sistema de información.
                    </p>
                    <p className="mt-10">
                        ¡Permitase a usted y sus respectivos clientes
                        simplificarse la vida con estos maravillosos
                        formularios!
                    </p>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-20 mt-20 mb-16 flex justify-between">
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('DashboardCardBG.jpg')] bg-center bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white"
                    onClick={() => {
                        navigate("/signup");
                    }}>
                    <div className="bg-black absolute w-96 h-[28rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10 text-center">{t("dashboardCard")}</h2>
                </div>
                <div className="w-8/12 p-10 text-2xl items-center">
                    <p>
                        Con el Panel de Control usted podrá tener un resumen
                        general de sus datos de manera estadística, de esta
                        forma podrá tener un control amplio, fácil y cómodo de
                        sus bases de datos, clientes y pagos.
                    </p>
                    <p className="mt-10">
                        Podrá establecer resumenes personalizados que permitan
                        una comprensión sencilla para los miembros de su
                        organización o sus respectivos clientes.
                    </p>
                    <p className="mt-10">
                        Es importante que analice su Panel de Control para
                        llevar de la mejor manera posible el progreso de su
                        organizacion
                    </p>
                </div>
            </div>
        </div>
    );
};
