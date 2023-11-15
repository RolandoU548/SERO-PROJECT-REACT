import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { AiOutlineClose } from "react-icons/ai";
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RingLoader } from "react-spinners";

export const ContactMessages = () => {
    const [t] = useTranslation("clients");
    const { actions } = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
    const [suggestions, setSuggestions] = useState(null);
    const fetchData = async () => {
        setSuggestions(await actions.getAllSuggestions());
    };
    const notifyDelete = () =>
        toast.error(t("toastdeleted"), {
            position: "bottom-right",
            style: {
                background: "rgba(23, 23, 23, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px 0 rgba(77, 208, 225, 0.37)",
                color: "#fff",
                borderRadius: "10px"
            }
        });

    useEffect(() => {
        fetchData().then(() => {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        });
    }, []);

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
                    src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2FcontactMessages%2FContactMessagesBG.jpg?alt=media&token=4c6c1f7b-3754-4dca-a95b-c637fc370ba1"
                    className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
                />
                <div className="mt-28 dark:text-white">
                    <h2 className="w-11/12 ml-16 text-black dark:text-white text-3xl minimum:text-4xl md:text-5xl lg:text-6xl font-black z-10 m-auto">
                        {t("contactmessage")}
                    </h2>
                    {suggestions && (
                        <div className="m-auto my-10 gap-x-10 flex flex-wrap justify-center gap-10">
                            {suggestions.map(suggestion => {
                                return (
                                    <div
                                        className="glass w-3/12 p-5"
                                        key={suggestion.id}>
                                        <AiOutlineClose
                                            className="flex justify-end text-red-500 absolute right-5 cursor-pointer hover:text-red-600 transition duration-300 hover:scale-110"
                                            onClick={async () => {
                                                const respuesta =
                                                    await actions.deleteSuggestion(
                                                        suggestion.id
                                                    );
                                                if (respuesta) {
                                                    fetchData();
                                                }
                                                notifyDelete();
                                            }}
                                        />
                                        <h2 className="my-4">
                                            <p className="font-bold">
                                                {t("namelastname")}
                                            </p>{" "}
                                            {suggestion.name}
                                        </h2>
                                        <h2 className="my-4">
                                            <p className="font-bold">
                                                {t("email")}:{" "}
                                            </p>
                                            {suggestion.email}
                                        </h2>
                                        <h2 className="my-4">
                                            <p className="font-bold">
                                                {t("message")}:
                                            </p>
                                            {suggestion.text}
                                        </h2>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </>
        );
    }
};
