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

export const FormExpired = () => {
    const { actions } = useContext(Context);
    const [t] = useTranslation("formExpired");
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
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2FformSuccessful%2FformSuccessful.jpg?alt=media&token=0395b314-3d58-4019-a071-b43633a859fd"
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="mt-48 font-serif dark:text-white">
                <h2 className="text-[150px] ml-72">{":("}</h2>
                <h2 className="mt-10 w-7/12 text-end text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-4xl font-black z-10 m-auto">
                    {t("expiredMessage")}
                </h2>
            </div>
        </>
        // <>
        //     <div className="flex justify-center items-center h-screen">
        //         <RingLoader color="#26C6DA" loading={true} size={100} />
        //     </div>
        // </>
    );
};
