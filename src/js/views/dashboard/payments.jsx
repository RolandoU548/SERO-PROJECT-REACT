import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";

export const Payments = () => {
    const [t] = useTranslation("payments");

    const navigate = useNavigate();
    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fpayments%2FPaymentsBG.jpg?alt=media&token=63e70794-5b13-4160-b6f8-0cdc1f68f7c1&_gl=1*uwspi8*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MTY2Ny4zLjAuMA.."
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="font-serif text-black dark:text-white mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 m-auto">
                    {t("payments")}
                </h1>
                <div className="glass p-10 mt-5 m-auto w-11/12">
                    {t("payments")}
                </div>
            </div>
        </>
    );
};
