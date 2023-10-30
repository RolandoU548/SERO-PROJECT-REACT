import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";

export const Dashboard = () => {
    const { actions } = useContext(Context);
    const [t] = useTranslation("dashboard");
    const navigate = useNavigate();
    const [numClients, setNumClients] = useState(0);

    useEffect(() => {
        const getClients = async () => {
            const clients = await actions.getAllClients();
            setNumClients(clients.length);
        };
        getClients();
    }, [actions]);

    const handleClientClick = () => {
        navigate("/clients");
    };

    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fdashboard%2FDashboardBG.jpg?alt=media&token=2ec7eddc-7603-410b-b2c8-cbce6ab643a3&_gl=1*wcikbl*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MTQ1Ny42MC4wLjA."
                className="invert fixed -z-50 top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="font-serif text-gray-200 mt-28 flex flex-col items-center justify-center">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-black dark:text-white m-auto text-center">
                    {t("dashboard")}
                </h1>
                <div className="glass p-10 mt-5 m-auto w-11/12">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div
                            className="glass p-4 m-2 flex flex-col items-center justify-center cursor-pointer"
                            onClick={() => {
                                handleClientClick();
                            }}>
                            <div className="font-bold text-black dark:text-white">
                                CLIENTS
                            </div>
                            <div className="font-bold text-cyan-300 text-md sm:text-xl">
                                {numClients}
                            </div>
                        </div>
                        <div className="glass p-4 m-2 flex flex-col items-center justify-center cursor-pointer">
                            <div className="font-bold text-black dark:text-white">
                                SERVICES
                            </div>
                            <div className="font-bold text-cyan-300 text-md sm:text-xl">
                                5
                            </div>
                        </div>
                        <div className="glass p-4 m-2 flex flex-col items-center justify-center cursor-pointer">
                            <div className="font-bold text-black dark:text-white">
                                TASKS
                            </div>
                            <div className="font-bold text-cyan-300 text-md sm:text-xl">
                                20
                            </div>
                        </div>
                        <div className="glass p-4 m-2 flex flex-col items-center justify-center cursor-pointer">
                            <div className="font-bold text-black dark:text-white">
                                REPORTS
                            </div>
                            <div className="font-bold text-cyan-300 text-md sm:text-xl">
                                3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
