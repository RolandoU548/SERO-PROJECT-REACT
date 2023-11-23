import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

import "../../../css/glass.css";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            role: ["user"]
        }
    });
    const navigate = useNavigate();
    const notify = () =>
        toast.success(t("userCreated"), {
            position: "bottom-right",
            style: {
                background: "rgba(23, 23, 23, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px 0 rgba(77, 208, 225, 0.37)",
                color: "#fff",
                borderRadius: "10px"
            }
        });

    const submit = async data => {
        const respuesta = await actions.createUser(data);
        if (respuesta?.message === `User ${data.email} already exists`) {
            toast.error(`${data.email} ${t("userAlreadyExists")}`, {
                position: "bottom-right",
                style: {
                    background: "rgba(23, 23, 23, 0.2)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 6px 0 rgba(77, 208, 225, 0.37)",
                    color: "#fff",
                    borderRadius: "10px"
                }
            });
        } else if (respuesta?.message === "A user has been created") {
            notify();
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
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-black text-md font-medium rounded-md bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            {t("createUser")}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};
