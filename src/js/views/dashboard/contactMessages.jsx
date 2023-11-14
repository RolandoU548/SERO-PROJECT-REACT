import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";

export const ContactMessages = () => {
    const navigate = useNavigate();
    const [t] = useTranslation("admin");

    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fadmin%2FAdminBG.jpeg?alt=media&token=bb862525-094d-4ea4-bd01-ad4ed93518fe"
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className=" font-serif text-gray-200 mt-28">
                <h2 className="w-10/12 text-3xl minimum:text-4xl md:text-5xl lg:text-6xl font-black z-10 text-black dark:text-white m-auto">
                    {t("Contact Message")}
                </h2>
                <div className="glass p-[3vw] ml-20 my-5 tiny:w-4/12 w-[98%]">
                    <h2 className="my-4">Nombre y Apellido:{}</h2>
                    <h2 className="my-4">Correo Electrónico:{}</h2>
                    <h2 className="my-4">Mensaje:{}</h2>
                </div>
            </div>
        </>
    );
};
