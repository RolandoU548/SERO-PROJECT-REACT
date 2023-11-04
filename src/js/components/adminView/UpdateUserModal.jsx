import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

export const UpdateUserModal = ({ setIsOpen, user }) => {
    const { store, actions } = useContext(Context);
    const [t] = useTranslation("signupform");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ defaultValues: { role: ["user"] } });

    const submit = async data => {
        const info = data;
        info.id = user.id;
        console.log(data.role);
        actions.updateUser(info);
        actions.getAllUsers(store.token);
        setIsOpen(false);
        reset();
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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

                <form
                    className="inline-block align-bottom glass text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                    onSubmit={handleSubmit(submit)}>
                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-white">
                        <h3
                            className="text-xl text-center leading-6 font-bold"
                            id="modal-headline">
                            USER DATA
                        </h3>
                        <div className="mt-5 flex justify-center items-center">
                            <div className="flex flex-col space-y-2">
                                <div className="flex justify-between items-center">
                                    <label
                                        htmlFor="name"
                                        className="font-bold mr-6">
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="rounded-md px-3 py-2 text-black text-center"
                                        autoComplete="name"
                                        defaultValue={user.name}
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
                                    {errors.name && (
                                        <span className="text-sm text-red-500">
                                            {errors.name.message}
                                        </span>
                                    )}
                                </div>
                                <div className="flex justify-between items-center">
                                    <label
                                        htmlFor="lastname"
                                        className="font-bold mr-6">
                                        Lastname:
                                    </label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        className="rounded-md px-3 py-2 text-black text-center"
                                        autoComplete="family-name"
                                        defaultValue={user.lastname}
                                        {...register("lastname", {
                                            required: {
                                                value: true,
                                                message: t("lastNameRequired")
                                            },
                                            pattern: {
                                                value: /^[a-zA-ZÀ-ÿ\u00f1\u00d1|'|\s]+$/,
                                                message: t("invalidLastname")
                                            }
                                        })}
                                    />
                                    {errors.lastname && (
                                        <span className="text-sm text-red-500">
                                            {errors.lastname.message}
                                        </span>
                                    )}
                                </div>
                                <div className="flex justify-between items-center">
                                    <label
                                        htmlFor="email"
                                        className="font-bold mt-6 mr-6">
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        autoComplete="email"
                                        className="rounded-md px-3 py-2 text-black text-center"
                                        defaultValue={user.email}
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
                                    {errors.email && (
                                        <span className="text-sm text-red-500">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>
                                <div className="flex justify-between items-center">
                                    <label className="font-bold mt-6 mr-6">
                                        Role:
                                    </label>
                                    <fieldset>
                                        <label
                                            style={{ pointerEvents: "none" }}>
                                            <input
                                                type="checkbox"
                                                name="role"
                                                value="user"
                                                readOnly
                                                {...register("role")}
                                            />
                                            User
                                        </label>

                                        <label>
                                            <input
                                                type="checkbox"
                                                name="role"
                                                value="admin"
                                                {...register("role")}
                                            />
                                            Admin
                                        </label>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            type="submit"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:ml-3 sm:w-auto sm:text-sm">
                            Save
                        </button>
                        <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => {
                                setIsOpen(false);
                            }}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

UpdateUserModal.propTypes = {
    setIsOpen: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};
