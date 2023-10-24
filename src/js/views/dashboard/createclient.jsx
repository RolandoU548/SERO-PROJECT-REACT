import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
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
// import { ClientImage } from "../../components/dashclients/clientimage.jsx";

export const CreateClient = () => {
    const { actions } = useContext(Context);
    const [t] = useTranslation("createClient");
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        Name: "",
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

    const handleImageChange = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setFormData(prevState => ({
                ...prevState,
                Image: reader.result
            }));
        };
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async e => {
        e.preventDefault();
        await actions.createClient(formData);
        navigate("/clients");
    };

    return (
        <>
            <div className="font-serif text-gray-200 mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-white m-auto">
                    {t("createClient")}
                </h1>
                <div className="glass p-10 mt-5 m-auto w-11/12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
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
                                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-2 sm:text-sm border-gray-300 rounded-md"
                                        placeholder={t("Name")}
                                        value={formData.Name}
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
                                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-2 sm:text-sm border-gray-300 rounded-md"
                                        placeholder={t("Email")}
                                        value={formData.Email}
                                        onChange={handleChange}
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
                                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-2 sm:text-sm border-gray-300 rounded-md"
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
                                        className="focus:ring-indigo-500 focus:border-indigo-500 text-gray-400 block w-full pl-10 py-2 sm:text-sm border-gray-300 rounded-md"
                                        value={formData.Status}
                                        onChange={handleChange}>
                                        <option value="Active">
                                            {t("Active")}
                                        </option>
                                        <option value="Inactive">
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
                                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-2 sm:text-sm border-gray-300 rounded-md"
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
                                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-2 sm:text-sm border-gray-300 rounded-md"
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
                                                required
                                                className="hidden"
                                                ref={fileInputRef}
                                                onChange={handleImageChange}
                                            />
                                            <button
                                                type="button"
                                                className=" text-start focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-2 mb-4 sm:text-sm border-gray-300 rounded-md text-white bg-green-700"
                                                onClick={handleButtonClick}>
                                                Select The Image
                                            </button>
                                        </div>
                                    </div>
                                    {formData.Image && (
                                        <div className="relative">
                                            <img
                                                src={formData.Image}
                                                alt="Uploaded image preview"
                                            />
                                            <button
                                                type="button"
                                                className="absolute top-0 right-0 mt-2 mr-2 focus:outline-none"
                                                onClick={() => {
                                                    setFormData({
                                                        ...formData,
                                                        Image: null
                                                    });
                                                    fileInputRef.current.value =
                                                        null;
                                                }}>
                                                <FaTimes className="h-5 w-5 text-red-500" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                                {/* <ClientImage /> */}

                                <div></div>

                                <div className="col-span-2 mx-16 flex justify-center ">
                                    <button
                                        type="submit"
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                                        {t("createClient")}
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
