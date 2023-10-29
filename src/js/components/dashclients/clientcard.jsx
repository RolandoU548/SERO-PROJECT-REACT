import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiArrowCircleLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase/firebase";
import PropTypes from "prop-types";

export const ClientCard = ({ client }) => {
    const navigate = useNavigate();
    const [t] = useTranslation("reports");
    const [file, setFile] = useState(null);

    const handleFileChange = e => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = () => {
        if (file) {
            const storageRef = storage.ref(
                `clientfiles/${client.id}/${file.name}`
            );
            storageRef.put(file).then(() => {
                console.log("File uploaded successfully!");
            });
        }
    };

    return (
        <>
            <img
                src="ReportsBG.jpg"
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="font-serif text-gray-200 mt-28">
                <div className="flex items-center">
                    <HiArrowCircleLeft
                        className="h-8 w-8 text-gray-200 cursor-pointer"
                        onClick={() => navigate("/client")}
                    />
                    <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-black dark:text-white m-auto">
                        {t("Client Profile")}
                    </h1>
                </div>

                <div className="glass p-10 mt-5 m-auto w-11/12">
                    <div className="flex flex-auto">
                        <div>
                            <img
                                src={client.image}
                                alt="User photo"
                                className="w-200 h-200 rounded-full mr-4"
                            />
                        </div>
                        <div>
                            <div className="mt-5">
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="fileInput"
                                />
                                <label
                                    htmlFor="fileInput"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Select File
                                </label>
                                {file && (
                                    <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
                                        Selected file: {file.name}
                                    </p>
                                )}
                                <button
                                    onClick={handleSubmit}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
ClientCard.propTypes = {
    client: PropTypes.object.isRequired
};
