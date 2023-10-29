import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import { storage } from "../../components/firebase/firebase";
import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes
} from "firebase/storage";

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
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";
import { set } from "firebase/database";

export const CreateClient = () => {
    const id = new Date();
    const { actions } = useContext(Context);
    const [t] = useTranslation("createClient");
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        Name: "",
        Lastname: "",
        Email: "",
        Phone: "",
        Image: null,
        Business: "",
        Description: "",
        Status: ""
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = async e => {
        if (e.target.files[0]) {
            const imageRef = storageRef(storage, `clients/${id}`);

            try {
                const uploadResp = await uploadBytes(
                    imageRef,
                    e.target.files[0]
                );

                const url = await getDownloadURL(uploadResp.ref);

                setFormData({ ...formData, Image: url });
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
            await actions.createClient(formData);
            navigate("/clients");
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteImage = async () => {
        const storageRef = storage.refFromURL(formData.Image);
        await storageRef.delete();
        setFormData(prevState => ({ ...prevState, Image: null }));
    };

    return (
        <>
            <div className="font-serif text-gray-200 mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-white m-auto">
                    {t("Create a Client")}
                </h1>
                <div className="glass p-20 mt-5 m-auto w-11/12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label htmlFor="Name" className="sr-only">
                                    {t("Name")}
                                </label>
                                <div className="relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUser className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="Name"
                                        name="Name"
                                        type="text"
                                        autoComplete="Name"
                                        required
                                        className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                        placeholder={t("Name")}
                                        value={formData.Name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="Lastname" className="sr-only">
                                    {t("Lastname")}
                                </label>
                                <div className="relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUser className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="Lastname"
                                        name="Lastname"
                                        type="text"
                                        autoComplete="Lastname"
                                        required
                                        className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                        placeholder={t("Last Name")}
                                        value={formData.Lastname}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="Email" className="sr-only">
                                    {t("Email")}
                                </label>
                                <div className="relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaEnvelope className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="Email"
                                        name="Email"
                                        type="email"
                                        autoComplete="Email"
                                        required
                                        className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                        placeholder={t("Email")}
                                        value={formData.Email}
                                        onChange={handleChange}
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // add this line for email validation
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="Phone" className="sr-only">
                                    {t("Phone")}
                                </label>
                                <div className="relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaPhone className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="Phone"
                                        name="Phone"
                                        type="tel"
                                        autoComplete="Phone"
                                        required
                                        className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                        placeholder={t("Phone")}
                                        value={formData.Phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="Status" className="sr-only">
                                    {t("Status")}
                                </label>
                                <div className="relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaCheckCircle className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <select
                                        id="Status"
                                        name="Status"
                                        autoComplete="Status"
                                        required
                                        className=" focus:ring-indigo-500 focus:border-indigo-500 text-gray-400 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                        value={formData.Status}
                                        onChange={handleChange}>
                                        <option value="" className="text-black">
                                            Select the status
                                        </option>
                                        <option
                                            value="Active"
                                            className="text-black">
                                            {t("Active")}
                                        </option>
                                        <option
                                            value="Inactive"
                                            className="text-black">
                                            {t("Inactive")}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="Business" className="sr-only">
                                {t("Business")}
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="Business"
                                        className="sr-only">
                                        {t("Business")}
                                    </label>
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaBuilding className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="Business"
                                            name="Business"
                                            type="text"
                                            autoComplete="Business"
                                            required
                                            className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                            placeholder={t("Business")}
                                            value={formData.Business}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="Description"
                                        className="sr-only">
                                        {t("Description")}
                                    </label>
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaFileAlt className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="Description"
                                            name="Description"
                                            type="text"
                                            autoComplete="Description"
                                            required
                                            className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                            placeholder={t("Description")}
                                            value={formData.Description}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <label
                                            htmlFor="Image"
                                            className="sr-only">
                                            Image
                                        </label>
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaImage className="h-5 w-5 text-gray-400" />
                                            </div>
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
                                                className=" text-start focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 mb-4 sm:text-md border-gray-300 rounded-md text-white bg-green-700"
                                                onClick={handleButtonClick}>
                                                {formData.Image
                                                    ? "Change Image"
                                                    : "Select Image"}
                                            </button>
                                        </div>
                                    </div>
                                    {formData.Image && (
                                        <div className="relative w-64">
                                            <img
                                                src={formData.Image}
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
                                </div>

                                <div></div>

                                <div className="col-span-2 mx-16 flex justify-center items-center ">
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <svg
                                                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3.293 6.707a1 1 0 010-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7z"
                                                    clipRule="evenodd"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9 18a1 1 0 01-1-1v-5a1 1 0 112 0v5a1 1 0 01-1 1zM9 7a1 1 0 00-1 1v5a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        {t("Submit")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
