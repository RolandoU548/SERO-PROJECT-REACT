import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

import "../../../css/glass.css";
import { useTranslation } from "react-i18next";

export const CreateUser = () => {
    const { actions } = useContext(Context);
    const [t] = useTranslation("createUser");
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            role: "user"
        }
    });
    const navigate = useNavigate();

    const submit = async data => {
        const respuesta = await actions.createUser(data);
        if (respuesta?.message === `User ${data.email} already exists`) {
            alert(`${data.email} ${t("userAlreadyExists")}`);
        } else if (respuesta?.message === "A user has been created") {
            alert(t("userCreated"));
            reset();
            navigate("/admin");
        }
    };

    return (
        <>
            <div className="font-serif dark:text-white mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 m-auto">
                    {t("createUser")}
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
                                                    message: t("emailRequired")
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
                            <div>
                                <label>
                                    {t("password")}
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaLock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="password"
                                            autoComplete="password"
                                            className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                            placeholder={t("password")}
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        t("passwordRequired")
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message:
                                                        t("passwordMinLength")
                                                },
                                                maxLength: {
                                                    value: 15,
                                                    message:
                                                        t("passwordMaxLength")
                                                }
                                            })}
                                        />
                                    </div>
                                    {errors.password && (
                                        <span className="text-sm text-red-500">
                                            {errors.password.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div>
                                <label>
                                    {t("confirmPassword")}
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaLock className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="password"
                                            autoComplete="password"
                                            className="text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 py-3 sm:text-md border-gray-300 rounded-md"
                                            placeholder={t("confirmPassword")}
                                            {...register("confirmPassword", {
                                                required: {
                                                    value: true,
                                                    message:
                                                        t("passwordRequired")
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message:
                                                        t("passwordMinLength")
                                                },
                                                maxLength: {
                                                    value: 15,
                                                    message:
                                                        t("passwordMaxLength")
                                                },
                                                validate: value => {
                                                    if (
                                                        value ===
                                                        watch("password")
                                                    ) {
                                                        return true;
                                                    }
                                                    return t(
                                                        "passwordsNotMatch"
                                                    );
                                                }
                                            })}
                                        />
                                    </div>
                                    {errors.confirmPassword && (
                                        <span className="text-sm text-red-500">
                                            {errors.confirmPassword.message}
                                        </span>
                                    )}
                                </label>
                            </div>
                            <div>
                                <fieldset className="flex gap-x-2">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="role"
                                            value="admin"
                                            {...register("role")}
                                        />
                                        Admin
                                    </label>
                                    <label className="pointer-events-none opacity-50">
                                        <input
                                            type="checkbox"
                                            name="role"
                                            value="user"
                                            readOnly
                                            {...register("role")}
                                        />
                                        User
                                    </label>
                                </fieldset>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-white text-md font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                            {t("createUser")}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
