import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { FaImage, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storage } from "../../components/firebase/firebase";
import {
    deleteObject,
    getDownloadURL,
    ref as storageRef,
    uploadBytes
} from "firebase/storage";

import "../../../css/app.css";
import "../../../css/glass.css";

export const ClientProfile = ({ client, setIsOpen }) => {
    const [t] = useTranslation("clients");
    const navigate = useNavigate();
    const id = new Date();
    const { actions } = useContext(Context);
    const [editableClient, setEditableClient] = useState(client);
    const [imageUrl, setImageUrl] = useState(null);
    const fileInputRef = useRef(null);

    const notify = () =>
        toast.success(t("clientUpdated"), {
            position: "bottom-right",
            style: {
                background: "rgba(23, 23, 23, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px 0 rgba(77, 208, 225, 0.37)",
                color: "#fff",
                borderRadius: "10px"
            }
        });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setEditableClient({ ...editableClient, [name]: value });
    };

    const handleImageChange = async e => {
        if (e.target.files[0]) {
            const imageRef = storageRef(storage, `clients/${id}`);

            try {
                const uploadResp = await uploadBytes(
                    imageRef,
                    e.target.files[0]
                );

                const imageUrl = await getDownloadURL(uploadResp.ref);

                // Delete existing image
                if (editableClient.image) {
                    const existingImageRef = storageRef(
                        storage,
                        `clients/${editableClient.id}`
                    );
                    try {
                        await deleteObject(existingImageRef);
                    } catch (err) {
                        console.log(err);
                    }
                }

                setEditableClient({ ...editableClient, image: imageUrl });
                setImageUrl(imageUrl);
            } catch (err) {
                console.log(err);
            }
        }
    };
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await actions.updateClient(editableClient.id, editableClient);
            notify();
            setIsOpen(false);
            navigate("/clients");
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteImage = async () => {
        const imageRef = storageRef(storage, imageUrl);
        await deleteObject(imageRef);
        setImageUrl(null);
    };

    return (
        <>
            <div className="fixed top-20 z-50 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-1 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                        className="fixed inset-0 transition-opacity"
                        aria-hidden="true">
                        <div
                            className="absolute inset-0 bg-black opacity-75"
                            onClick={() => {
                                setIsOpen(false);
                            }}></div>
                    </div>
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true">
                        &#8203;
                    </span>
                    <div
                        className="inline-block align-bottom glass text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full rounded-t-lg"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline">
                        <div className="px-4 sm:p-6 sm:pb-4 rounded-t-lg">
                            <h3
                                className="text-xl text-center leading-6 text-white font-bold"
                                id="modal-headline">
                                {t("clientsinfo")}
                            </h3>
                            <div className="mt-5 flex justify-center items-center rounded-t-lg">
                                <div className="flex flex-col space-y-2">
                                    {imageUrl && (
                                        <div className="relative w-64 h-40 m-auto">
                                            <img
                                                className="rounded-full object-cover h-full w-rull m-auto"
                                                src={imageUrl}
                                                alt="Uploaded image preview"
                                            />
                                            <button
                                                type="button"
                                                className="absolute top-0 right-0 mt-2 mr-2 focus:outline-none"
                                                onClick={handleDeleteImage}>
                                                <FaTimes className="h-5 w-5 text-red-500" />
                                            </button>
                                        </div>
                                    )}
                                    <div>
                                        <div>
                                            <label
                                                htmlFor="Image"
                                                className="sr-only">
                                                {t("image")}
                                            </label>
                                            <div className="relative rounded-md shadow-sm">
                                                <input
                                                    id="Image"
                                                    name="Image"
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    ref={fileInputRef}
                                                    onChange={handleImageChange}
                                                />
                                                <button
                                                    type="button"
                                                    className="text-start focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-2 mb-4 sm:text-sm rounded-md text-cyan-300 hover:text-black border border-cyan-300 bg-black hover:bg-cyan-300 transition duration-300"
                                                    onClick={handleButtonClick}>
                                                    {editableClient.image
                                                        ? t("selectdifimage")
                                                        : t("selectedimage")}
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <FaImage className="h-5 w-5" />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center dark:text-white text-black">
                                        <label
                                            htmlFor="name"
                                            className="font-bold mr-6">
                                            {t("name")}
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={editableClient.name}
                                            onChange={handleInputChange}
                                            className="rounded-md px-3 py-2 text-black text-center"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center dark:text-white text-black">
                                        <label
                                            htmlFor="lastname"
                                            className="font-bold mr-6">
                                            {t("lastName")}
                                        </label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            value={editableClient.lastname}
                                            onChange={handleInputChange}
                                            className="rounded-md px-3 py-2 text-black text-center"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center dark:text-white text-black">
                                        <label
                                            htmlFor="email"
                                            className="font-bold mt-6 mr-6">
                                            {t("email")}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={editableClient.email}
                                            onChange={handleInputChange}
                                            className="rounded-md px-3 py-2 text-black text-center"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center dark:text-white text-black">
                                        <label
                                            htmlFor="phone"
                                            className="font-bold mt-6 mr-6">
                                            {t("phone")}
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={editableClient.phone}
                                            onChange={handleInputChange}
                                            className="rounded-md px-3 py-2 text-black text-center"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center dark:text-white text-black">
                                        <label
                                            htmlFor="business"
                                            className="font-bold mt-6 mr-6">
                                            {t("business")}
                                        </label>
                                        <input
                                            type="text"
                                            name="business"
                                            value={editableClient.business}
                                            onChange={handleInputChange}
                                            className="rounded-md px-3 py-2 text-black text-center"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center dark:text-white text-black">
                                        <label
                                            htmlFor="description"
                                            className="font-bold mt-6 mr-6">
                                            {t("description")}
                                        </label>
                                        <textarea
                                            name="description"
                                            value={editableClient.description}
                                            onChange={handleInputChange}
                                            className="rounded-md px-3 py-2 text-black text-center"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center dark:text-white text-black">
                                        <label
                                            htmlFor="status"
                                            className="font-bold mt-6 mr-6">
                                            {t("status")}
                                        </label>
                                        <select
                                            name="status"
                                            value={editableClient.status}
                                            onChange={handleInputChange}
                                            className="rounded-md px-4 py-2 text-black text-center">
                                            <option value="Active">
                                                {t("active")}
                                            </option>
                                            <option value="Inactive">
                                                {t("inactive")}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-neutral-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-300 text-base font-medium text-black hover:bg-cyan-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={handleSubmit}>
                                {t("save")}
                            </button>
                            <button
                                type="button"
                                className="w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white transition duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => {
                                    setIsOpen(false);
                                }}>
                                {t("cancel")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

ClientProfile.propTypes = {
    setIsOpen: PropTypes.func.isRequired,
    client: PropTypes.object.isRequired
};
