import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import { storage } from "../../components/firebase/firebase";
import {
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
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";

export const CreateClient = () => {
    const id = new Date();
    const { actions } = useContext(Context);
    const [t] = useTranslation("createClient");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
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

    const handleSubmitRoberto = async e => {
        e.preventDefault();
        try {
            await actions.createClient(formData);
            navigate("/clients");
        } catch (error) {
            console.log(error);
        }
    };

    const submit = async data => {
        try {
            data.image = formData.Image;
            await actions.createClient(data);
            navigate("/clients");
        } catch (error) {
            console.log(error);
        }
        reset();
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
                    <form onSubmit={handleSubmit(submit)} className="space-y-6">
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label>
                                    {t("Name")}
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaUser className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            autoComplete="name"
                                            className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                            placeholder={t("Name")}
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: "Name required"
                                                },
                                                pattern: {
                                                    value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1|'|\s]+$/,
                                                    message: "Invalid name"
                                                }
                                            })}
                                        />
                                    </div>
                                    {errors.name && (
                                        <span className="text-sm text-red-500">
                                            {errors.name.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div>
                                <label>
                                    {t("Lastname")}
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaUser className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            autoComplete="family-name"
                                            className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                            placeholder={t("Last Name")}
                                            {...register("lastname", {
                                                required: {
                                                    value: true,
                                                    message: "Lastname required"
                                                },
                                                pattern: {
                                                    value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1|'|\s]+$/,
                                                    message: "Invalid lastname"
                                                }
                                            })}
                                        />
                                    </div>
                                    {errors.lastname && (
                                        <span className="text-sm text-red-500">
                                            {errors.lastname.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div>
                                <label>
                                    {t("Email")}
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaEnvelope className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            autoComplete="email"
                                            className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                            placeholder={t("Email")}
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "Email Requerido"
                                                },
                                                minLength: {
                                                    value: 5,
                                                    message:
                                                        "Email debe tener al menos 5 caracteres"
                                                },
                                                maxLength: {
                                                    value: 30,
                                                    message:
                                                        "Email debe tener maximo 30caracteres"
                                                },
                                                pattern: {
                                                    value: /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}/,
                                                    message: "email invalido"
                                                }
                                            })}
                                        />
                                    </div>
                                    {errors.email && (
                                        <span className="text-sm text-red-500">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label>
                                    {t("Phone")}
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaPhone className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="tel"
                                            autoComplete="phone"
                                            className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                            placeholder={t("Phone")}
                                            {...register("phone", {
                                                required: {
                                                    value: true,
                                                    message: "Phone required"
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: "Phone min-length"
                                                },
                                                maxLength: {
                                                    value: 20,
                                                    message: "Phone max-length"
                                                }
                                            })}
                                        />
                                    </div>
                                    {errors.phone && (
                                        <span className="text-sm text-red-500">
                                            {errors.phone.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div>
                                <label>
                                    {t("Status")}
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaCheckCircle className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <select
                                            autoComplete="status"
                                            className=" focus:ring-indigo-500 focus:border-indigo-500 text-gray-400 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                            {...register("status", {
                                                required: {
                                                    value: true,
                                                    message: "Status required"
                                                }
                                            })}>
                                            <option
                                                value=""
                                                className="text-black">
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
                                    {errors.status && (
                                        <span className="text-sm text-red-500">
                                            {errors.status.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                        </div>

                        <div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label>
                                        {t("Business")}
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaBuilding className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                autoComplete="business"
                                                className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                                placeholder={t("Business")}
                                                {...register("business", {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Business required"
                                                    },
                                                    minLength: {
                                                        value: 3,
                                                        message:
                                                            "Business min-length"
                                                    },
                                                    maxLength: {
                                                        value: 120,
                                                        message:
                                                            "Business max-length"
                                                    }
                                                })}
                                            />
                                        </div>
                                        {errors.business && (
                                            <span className="text-sm text-red-500">
                                                {errors.business.message}
                                            </span>
                                        )}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        {t("Description")}
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaFileAlt className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                autoComplete="description"
                                                className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                                placeholder={t("Description")}
                                                {...register("description", {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Description required"
                                                    },
                                                    minLength: {
                                                        value: 5,
                                                        message:
                                                            "Description min-length"
                                                    },
                                                    maxLength: {
                                                        value: 30,
                                                        message:
                                                            "Description max-length"
                                                    }
                                                })}
                                            />
                                        </div>
                                        {errors.description && (
                                            <span className="text-sm text-red-500">
                                                {errors.description.message}
                                            </span>
                                        )}
                                    </label>
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
                                <div className="mt-5 col-span-2 flex justify-center items-center ">
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
