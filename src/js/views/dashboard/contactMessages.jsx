import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { AiOutlineClose } from "react-icons/ai";
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";

export const ContactMessages = () => {
    const { actions } = useContext(Context);
    const [suggestions, setSuggestions] = useState(null);
    const [t] = useTranslation("admin");

    useEffect(() => {
        const fetchData = async () => {
            setSuggestions(await actions.getAllSuggestions());
        };
        fetchData();
    }, []);

    if (suggestions) {
        return (
            <>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2FcontactMessages%2FContactMessagesBG.jpg?alt=media&token=4c6c1f7b-3754-4dca-a95b-c637fc370ba1"
                    className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
                />
                <div className="mt-28 dark:text-white">
                    <h2 className="w-11/12 ml-16 text-black dark:text-white text-3xl minimum:text-4xl md:text-5xl lg:text-6xl font-black z-10 m-auto">
                        {t("Contact Messages")}
                    </h2>
                    <div className="m-auto mt-10 gap-x-10 flex flex-wrap justify-center gap-10">
                        {suggestions.map(suggestion => {
                            return (
                                <div
                                    className="glass w-3/12 p-5"
                                    key={suggestion.id}>
                                    <AiOutlineClose className="flex justify-end text-red-500 absolute right-5 cursor-pointer" onClick={() => {alert("eliminado")}} />
                                    <h2 className="my-4">
                                        <p className="font-bold">
                                            Nombre y Apellido:
                                        </p>{" "}
                                        {suggestion.name}
                                    </h2>
                                    <h2 className="my-4">
                                        <p className="font-bold">
                                            Correo Electrónico:{" "}
                                        </p>
                                        {suggestion.email}
                                    </h2>
                                    <h2 className="my-4">
                                        <p className="font-bold">Mensaje:</p>
                                        {suggestion.text}
                                    </h2>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
};
