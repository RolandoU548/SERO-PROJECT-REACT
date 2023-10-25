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
        <div className="font-serif dark:text-gray-200 text-black">
            <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white mt-48">
                {t("title")}
            </h2>
            <h2 className="mix-blend-difference lg:px-6 mt-8 text-lg minimum:text-xl tiny:text-2xl sm:text-3xl md:text-[45px] font-black z-10 text-center text-white">
                {t("subtitle")}
            </h2>
            <Link
                className="w-[250px] hover:bg-[#00f2ff80] transition duration-300 m-auto block mt-16 p-4 text-3xl text-center border dark:border-white border-black rounded-full"
                to="/signup">
                {t("getStarted")}
            </Link>
            <div className="glass w-4/5 p-12 mt-40 mb-10 m-auto text-2xl">
                <h2 className="text-5xl">{t("aboutUs")}</h2>
                <p className="my-10">{t("whoWeAre")}</p>
                <p className="mt-10">{t("description")}</p>
            </div>
            <h2 className="mix-blend-difference mt-28 lg:px-6 text-lg minimum:text-[0.5rem] tiny:text-3xl sm:text-3xl md:text-6xl font-black z-10 flex justify-end text-white mr-20">
                {t("services")}
            </h2>
            <div className="flex justify-end">
                <div className="glass w-9/12 p-12 mt-10 mb-10 mr-20 text-2xl ">
                    <p>{t("description1")}</p>
                    <p className="mt-10">{t("description2")}</p>
                    <br></br>
                    <ul>
                        <li>{t("list1")}</li>
                        <li>{t("list2")}</li>
                        <li>{t("list3")}</li>
                        <li>{t("list4")}</li>
                        <li>{t("list5")}</li>
                        <li>{t("list6")}</li>
                        <li>{t("list7")}</li>
                        <li>{t("list8")}</li>
                    </ul>
                    <p className="mt-10">
                        {t("message1")}{" "}
                        <Link
                            to="/signup"
                            className="underline text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-500">
                            {t("message2")}
                        </Link>
                    </p>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-20 mt-20 mb-16 flex justify-between">
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('DataBaseCardBGCrop.jpg')] bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group"
                    onClick={() => {
                        navigate("/signup");
                    }}>
                    <div className="bg-black absolute w-96 h-[28rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10 text-center">{t("databaseCard")}</h2>
                </div>
                <div className="w-8/12 p-10 text-2xl items-center">
                    <p>{t("database1")}</p>
                    <p className="mt-10">{t("database2")}</p>
                    <p className="mt-10">{t("database3")}</p>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-64 mt-20 mb-16 flex justify-end">
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('FormCardBG.jpg')] bg-center bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group"
                    onClick={() => {
                        navigate("/signup");
                    }}>
                    <div className="bg-black absolute w-96 h-[28rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10 text-center">{t("formCard")}</h2>
                </div>
                <div className="w-8/12 p-10 text-2xl items-center">
                    <p>{t("form1")}</p>
                    <p className="mt-10">{t("form2")}</p>
                    <p className="mt-10">{t("form3")}</p>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-20 mt-20 mb-16 flex justify-between">
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('ClientsCardBG.jpg')] bg-center bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group"
                    onClick={() => {
                        navigate("/signup");
                    }}>
                    <div className="bg-black absolute w-96 h-[28rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10 text-center">Clients</h2>
                </div>
                <div className="w-8/12 p-10 text-2xl items-center">
                    <p>
                        En la parte de clientes tendrá una tabla para agregar un
                        listado de clientes con sus datos personales.
                    </p>
                    <p className="mt-10">
                        De esta manera usted podrá también tener una lista de
                        contactos de aquellos a quienes ofrece sus servicios.
                    </p>
                    <p className="mt-10">
                        ¡No espere más para agendar a todos los que necesitan de
                        usted y de su organización como servicio requerido!
                    </p>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-64 mt-20 mb-16 flex justify-end">
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('DashboardCardBG.jpg')] bg-center bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group"
                    onClick={() => {
                        navigate("/signup");
                    }}>
                    <div className="bg-black absolute w-96 h-[28rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10 text-center">{t("dashboardCard")}</h2>
                </div>
                <div className="w-8/12 p-10 text-2xl items-center">
                    <p>{t("dashboard1")}</p>
                    <p className="mt-10">{t("dashboard2")}</p>
                    <p className="mt-10">{t("dashboard3")}</p>
                </div>
            </div>
        </div>
    );
};
