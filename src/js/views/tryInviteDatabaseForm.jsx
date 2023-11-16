import React, { useContext, useState } from "react";
import "../../css/app.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const TryInviteDatabaseForm = () => {
    const [t] = useTranslation("form");
    const navigate = useNavigate();
    const { actions } = useContext(Context);
    const [hash, setHash] = useState();

    const COPY_MSG_COPY = "COPY";
    const COPY_MSG_COPIED = "COPIED";

    const [copyMsg, setCopyMsg] = useState(COPY_MSG_COPY);

    const generateHash = async () => {
        const hashObject = await actions.generateInvitationDbForm();
        setHash(hashObject.hashed_form);
        setCopyMsg(COPY_MSG_COPY);
    };

    const handleCopy = () => {
        navigator.clipboard
            .writeText(
                `${location.origin}${import.meta.env.BASE_URL}/databaseForm/${
                    hash.invitation_hash
                }`
            )
            .then(
                function () {
                    console.log("Async: Copying to clipboard was successful!");
                    setCopyMsg(COPY_MSG_COPIED);
                },
                function (err) {
                    console.error("Async: Could not copy text: ", err);
                }
            );
    };

    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="invert w-screen h-screen -z-50 fixed top-0 left-0 object-cover dark:invert-0 transition duration-500">
                <source src="DatabaseBG.mp4" type="video/mp4" />
            </video>
            <div className="font-serif text-black dark:text-white mt-40"></div>
            <div className="w-11/12 flex justify-center gap-4 mx-16 mt-8 h-64">
                <div className="border border-white rounded-2xl w-fit min-w-[33.333333%] p-4 m-2 flex flex-col justify-center text-2xl">
                    <h2 className="text-white font-bold mb-5 flex gap-2 justify-center">
                        {t("invitationdata")}
                        <p className="text-cyan-300">{t("form1")}</p>
                    </h2>
                    <button
                        className="border border-white rounded-2xl mt-5 p-2 font-bold dark:text-green-400 text-green-600 cursor-pointer"
                        onClick={() => {
                            navigate("/signup");
                        }}>
                        {t("generate")}
                    </button>
                </div>
            </div>
        </>
    );
};
