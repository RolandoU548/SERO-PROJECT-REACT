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

export const DatabaseForm = () => {
    const id = new Date();
    const { actions } = useContext(Context);
    const { dbhash } = useParams();
    const [t] = useTranslation("form");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const navigate = useNavigate();
    const [columns, setColumns] = useState(undefined);

    const submit = async data => {
        try {
            console.log(data);
            const row = Object.values(data);
            console.log(row);
            await actions.addRowInvitationDbForm(dbhash, row);
            reset();
            navigate("/formSuccessful");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        (async () => {
            const result = await actions.columnsInvitationDbForm(dbhash);
            console.log(result);
            const cols = result != null ? result.columns : null;
            setTimeout(() => {
                setColumns(cols);
            }, 2000);
        })();
    });

    if (columns === null) {
        console.log("Expired!");
        navigate("/formExpired");
        return <></>;
    }

    return columns !== undefined ? (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="invert w-screen h-screen -z-50 fixed top-0 left-0 object-cover dark:invert-0 transition duration-500">
                <source src="DatabaseBG.mp4" type="video/mp4" />
            </video>
            <div className="font-serif dark:text-white mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 m-auto">
                    {t("addtodatabase")}
                </h1>
                <div className="glass p-20 mt-5 m-auto w-11/12">
                    <form onSubmit={handleSubmit(submit)} className="space-y-6">
                        <div className="grid grid-cols-1 gap-4">
                            {columns.map(col => {
                                return (
                                    <div key={col}>
                                        <label>
                                            {col}
                                            <div className="relative rounded-md shadow-sm">
                                                <input
                                                    type="text"
                                                    autoComplete={col}
                                                    className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                                    placeholder={col}
                                                    {...register(col, {
                                                        required: {
                                                            value: true,
                                                            message: col
                                                        }
                                                    })}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                );
                            })}
                        </div>

                        <div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mt-5 col-span-2 flex justify-center items-center ">
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-black text-md font-medium rounded-md bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        {t("add")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    ) : (
        <>
            <div className="flex justify-center items-center h-screen">
                <RingLoader color="#26C6DA" loading={true} size={100} />
            </div>
        </>
    );
};
