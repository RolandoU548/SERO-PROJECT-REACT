import React, { useState, useContext, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import { storage } from "../../components/firebase/firebase";
import {
    deleteObject,
    getDownloadURL,
    ref as storageRef,
    uploadBytes
} from "firebase/storage";
import { useForm } from "react-hook-form";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaBuilding,
    FaImage,
    FaFileAlt,
    FaCheckCircle,
    FaTimes
} from "react-icons/fa";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";
import { RingLoader } from "react-spinners";

export const FormSuccessful = () => {
    const { actions } = useContext(Context);
    const [t] = useTranslation("createclient");
    const navigate = useNavigate();

    // useEffect(() => {
    //     (async () => {
    //         const isClHashValid =
    //             await actions.existsInvitationClientForm(clienthash);
    //         setTimeout(() => {
    //             setValidClHash(isClHashValid);
    //         }, 2000);
    //     })();
    // });

    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fdatabase%2FDatabaseBG.jpg?alt=media&token=3bf525b3-764b-4ff8-b1ec-e22c672f52d4"
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="mt-64 font-serif dark:text-white">
                <h1 className="w-10/12 text-center text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 m-auto">
                    {t("Thanks for filling in the form!")}
                </h1>
                <div className="border border-white rounded-3xl p-20 mt-5 m-auto w-6/12"></div>
            </div>
        </>
        // <>
        //     <div className="flex justify-center items-center h-screen">
        //         <RingLoader color="#26C6DA" loading={true} size={100} />
        //     </div>
        // </>
    );
};
