import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";
import { Calendar } from "../../components/dashpanel/calendar";
import { PieChartPayment } from "../../components/dashpayments/piechartpayment";
import { PieChartClient } from "../../components/dashclients/piechartclient";
import { PieChartTask } from "../../components/dashpanel/piecharttask";
import { FaUsers, FaMoneyBillAlt, FaTasks, FaFileAlt } from "react-icons/fa";
import { RingLoader } from "react-spinners";

export const Dashboard = () => {
    const { store, actions } = useContext(Context);
    const [t] = useTranslation("dashboard");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [numClients, setNumClients] = useState(0);
    const [numPayments, setNumPayments] = useState(0);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        actions.getAllClients().then(() => {
            setNumClients(store.clients.length);
        });
        actions.getAllPayments().then(() => {
            setNumPayments(store.payments.length);
        });
        actions.getAllTask();
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    useEffect(() => {
        setTasks(store.tasks);
    }, [store.tasks]);

    const handleClientClick = () => {
        navigate("/clients");
    };
    const handlePaymentClick = () => {
        navigate("/payments");
    };
    const handleTasksClick = () => {
        navigate("/tasks");
    };
    const handleFormsClick = () => {
        navigate("/forms");
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <RingLoader color="#26C6DA" loading={isLoading} size={100} />
            </div>
        );
    } else {
        return (
            <>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fdashboard%2FDashboardBG.jpg?alt=media&token=2ec7eddc-7603-410b-b2c8-cbce6ab643a3&_gl=1*wcikbl*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MTQ1Ny42MC4wLjA."
                    className="invert fixed -z-50 top-0 left-0 dark:invert-0 transition duration-500"
                />
                <div className="font-serif text-gray-200 mt-28 flex flex-col items-center justify-center">
                    <h2 className="w-10/12 text-3xl minimum:text-4xl md:text-5xl lg:text-6xl font-black z-10 text-black dark:text-white m-auto text-center">
                        {t("dashboard")}
                    </h2>
                    <div className="p-10 m-auto w-11/12">
                        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2">
                            <div
                                className="glass p-4 m-2 flex flex-row items-center justify-evenly cursor-pointer hover:bg-gray-800 hover:text-black dark:hover:text-white dark:hover:bg-gray-800"
                                onClick={() => {
                                    handleClientClick();
                                }}>
                                <div className="flex flex-col items-center">
                                    <div className="font-bold text-black dark:text-white items-center">
                                        {t("clients")}
                                    </div>
                                    <div className="font-bold text-cyan-300 text-md sm:text-xl">
                                        {numClients}
                                    </div>
                                </div>
                                <FaUsers className="text-5xl text-cyan-300" />
                            </div>
                            <div
                                className="glass p-4 m-2 flex flex-row items-center justify-evenly cursor-pointer hover:bg-gray-800 hover:text-black dark:hover:text-white dark:hover:bg-gray-800"
                                onClick={() => {
                                    handlePaymentClick();
                                }}>
                                <div className="flex flex-col items-center">
                                    <div className="font-bold text-black dark:text-white">
                                        {t("payments")}
                                    </div>
                                    <div className="font-bold text-cyan-300 text-md sm:text-xl">
                                        {numPayments}
                                    </div>
                                </div>
                                <FaMoneyBillAlt className="text-5xl text-cyan-300" />
                            </div>
                            <div
                                className="glass p-4 m-2 flex flex-row items-center justify-evenly cursor-pointer hover:bg-gray-800 hover:text-black dark:hover:text-white dark:hover:bg-gray-800"
                                onClick={() => {
                                    handleTasksClick();
                                }}>
                                <div className="flex flex-col items-center">
                                    <div className="font-bold text-black dark:text-white">
                                        {t("tasks")}
                                    </div>
                                    <div className="font-bold text-cyan-300 text-md sm:text-xl">
                                        {tasks.length}
                                    </div>
                                </div>
                                <FaTasks className="text-5xl text-cyan-300" />
                            </div>
                            <div
                                className="glass p-4 m-2 flex flex-row items-center justify-evenly cursor-pointer hover:bg-gray-800 hover:text-black dark:hover:text-white dark:hover:bg-gray-800"
                                onClick={() => {
                                    handleFormsClick();
                                }}>
                                <div className="flex flex-col items-center">
                                    <div className="font-bold text-black dark:text-white">
                                        {t("forms")}
                                    </div>
                                    <div className="font-bold text-cyan-300 text-md sm:text-xl">
                                        2
                                    </div>
                                </div>
                                <FaFileAlt className="text-5xl text-cyan-300" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 justify-evenly w-11/12 m-auto">
                            <div className="glass p-2 mt-5 text-center sm:w-full md:w-6/12 lg:w-4/12 xl:w-4/12 h-[30rem] flex flex-col">
                                <h1 className="mb-2 text-xl font-black z-10 text-black dark:text-white m-auto mt-4">
                                    {t("paymentsChart")}
                                </h1>
                                <PieChartPayment numPayments={numPayments} />
                            </div>
                            <div className="glass p-2 mt-5 text-center sm:w-full md:w-6/12 lg:w-4/12 xl:w-4/12 h-[30rem] flex flex-col">
                                <h1 className="mb-2 text-xl font-black z-10 text-black dark:text-white m-auto mt-4">
                                    {t("clientsChart")}
                                </h1>
                                <PieChartClient numClients={numClients} />
                            </div>
                            <div className="glass p-2 mt-5 text-center sm:w-full md:w-6/12 lg:w-4/12 xl:w-4/12 h-[30rem] flex flex-col">
                                <h1 className="mb-2 text-xl font-black z-10 text-black dark:text-white m-auto mt-4">
                                    {t("tasksChart")}
                                </h1>
                                <PieChartTask tasks={tasks} />
                            </div>
                        </div>
                    </div>
                    <div className="glass p-10 m-auto w-11/12 mb-10">
                        <Calendar />
                    </div>
                </div>
            </>
        );
    }
};
