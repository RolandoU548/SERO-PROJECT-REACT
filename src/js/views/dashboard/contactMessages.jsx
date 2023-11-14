import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
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
                    <div className="mt-20 flex justify-center gap-5 w-[90%] m-auto flex-wrap">
                        {suggestions.map(suggestion => {
                            return (
                                <div
                                    className="glass w-1/5"
                                    key={suggestion.id}>
                                    <h2 className="my-4">
                                        Nombre y Apellido: {suggestion.name}
                                    </h2>
                                    <h2 className="my-4">
                                        Correo Electrónico:{suggestion.email}
                                    </h2>
                                    <h2 className="my-4">
                                        Mensaje:{suggestion.text}
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
