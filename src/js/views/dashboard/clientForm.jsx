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

export const ClientForm = () => {
    const id = new Date();
    const { actions } = useContext(Context);
    const { clienthash } = useParams();
    const [t] = useTranslation("createclient");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null);
    const [isValidClHash, setValidClHash] = useState(null);

    useEffect(() => {
        (async () => {
            setValidClHash(
                await actions.existsInvitationClientForm(clienthash)
            );
        })();
    });

    const handleImageChange = async e => {
        if (e.target.files[0]) {
            const imageRef = storageRef(storage, `clients/${id}`);

            try {
                const uploadResp = await uploadBytes(
                    imageRef,
                    e.target.files[0]
                );

                const url = await getDownloadURL(uploadResp.ref);

                setImage(url);
            } catch (err) {
                console.log(err);
            }
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const submit = async data => {
        try {
            if (image !== null) {
                data.image = image;
            } else {
                data.image = "noImage";
            }
            const client = { client: data, clhash: clienthash };
            console.log(client);
            await actions.createClientFromClHash(client);

            reset();
            navigate("/clientCreationSuccessful");
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteImage = async () => {
        const imageRef = storageRef(storage, image);
        await deleteObject(imageRef);
        setImage(null);
    };

    if (isValidClHash === false) {
        throw new Error("Invalid Invitation Form");
    }
    return isValidClHash === true ? (
        <>
            <div className="font-serif dark:text-white mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 m-auto">
                    {t("Create a Client")}
                </h1>
                <div className="glass p-20 mt-5 m-auto w-11/12">
                    <form onSubmit={handleSubmit(submit)} className="space-y-6">
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label>
                                    {t("name")}
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaUser className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            autoComplete="name"
                                            className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                            placeholder={t("name")}
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: t("nameRequired")
                                                },
                                                pattern: {
                                                    value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1|'|\s]+$/,
                                                    message: t("invalidName")
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
                                    {t("lastname")}
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaUser className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            autoComplete="family-name"
                                            className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                            placeholder={t("lastname")}
                                            {...register("lastname", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        t("lastnameRequired")
                                                },
                                                pattern: {
                                                    value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1|'|\s]+$/,
                                                    message:
                                                        t("invalidLastname")
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
                                    {t("email")}
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaEnvelope className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            autoComplete="email"
                                            className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                            placeholder={t("email")}
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "Email Requerido"
                                                },
                                                minLength: {
                                                    value: 5,
                                                    message: t("emailMinLength")
                                                },
                                                maxLength: {
                                                    value: 60,
                                                    message: t("emailMaxLength")
                                                },
                                                pattern: {
                                                    value: /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/,
                                                    message: t("invalidEmail")
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
                                    {t("phone")}
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaPhone
                                                className="h-5 w-5 text-gray-400"
                                                placeholder={t("phone")}
                                            />
                                        </div>
                                        <input
                                            type="tel"
                                            autoComplete="phone"
                                            className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                            placeholder={t("phone")}
                                            {...register("phone", {
                                                required: {
                                                    value: true,
                                                    message: "Phone required"
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: t("phoneMinLength")
                                                },
                                                maxLength: {
                                                    value: 20,
                                                    message: t("phoneMaxLength")
                                                },
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: t("invalidPhone")
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
                                    {t("status")}
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
                                                    message: t("statusRequired")
                                                }
                                            })}>
                                            <option
                                                value="Active"
                                                className="text-black">
                                                {t("active")}
                                            </option>
                                            <option
                                                value="Inactive"
                                                className="text-black">
                                                {t("inactive")}
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
                                        {t("business")}
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaBuilding className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                autoComplete="business"
                                                className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                                placeholder={t("business")}
                                                {...register("business", {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            t(
                                                                "businessRequired"
                                                            )
                                                    },
                                                    minLength: {
                                                        value: 3,
                                                        message:
                                                            t(
                                                                "businessMinLength"
                                                            )
                                                    },
                                                    maxLength: {
                                                        value: 40,
                                                        message:
                                                            t(
                                                                "businessMaxLength"
                                                            )
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
                                        {t("description")}
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FaFileAlt className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="text"
                                                autoComplete="description"
                                                className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                                placeholder={t("description")}
                                                {...register("description", {
                                                    required: {
                                                        value: true,
                                                        message: t(
                                                            "descriptionRequired"
                                                        )
                                                    },
                                                    minLength: {
                                                        value: 5,
                                                        message: t(
                                                            "descriptionMinLength"
                                                        )
                                                    },
                                                    maxLength: {
                                                        value: 120,
                                                        message: t(
                                                            "descriptionMaxLength"
                                                        )
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
                                        <label>{t("image")}</label>
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                ref={fileInputRef}
                                                onChange={handleImageChange}
                                            />
                                            <button
                                                type="button"
                                                className=" text-start focus:ring-cyan-400 items-center gap-2 focus:border-cyan-400 block w-full pl-10 py-3 mb-4 sm:text-md border border-cyan-300 text-cyan-300 rounded-md bg-black hover:bg-cyan-400 hover:text-black transition duration-300"
                                                onClick={handleButtonClick}>
                                                <FaImage className="h-5 w-5" />
                                                {image
                                                    ? t("changeImage")
                                                    : t("selectImage")}
                                            </button>
                                        </div>
                                    </div>
                                    {image && (
                                        <div className="relative w-64">
                                            <img
                                                src={image}
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
                                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-black text-md font-medium rounded-md bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        {t("createClient")}
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
