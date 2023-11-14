import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Context } from "../../store/appContext";
import { useTranslation } from "react-i18next";

export const SignUpForm = ({
    name,
    exampleName,
    lastName,
    exampleLastName,
    email,
    exampleEmail,
    password,
    examplePassword,
    submitButton,
    children
}) => {
    const [t] = useTranslation("signupform");
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch
    } = useForm();

    const submit = async data => {
        data.role = ["user", "admin"];
        const respuesta = await actions.createUser(data);
        if (respuesta?.message === `User ${data.email} already exists`) {
            alert(`${data.email} ${t("userAlreadyExists")}`);
        } else if (respuesta?.message === "A user has been created") {
            alert(t("userCreated"));
            const token = await actions.generateToken(data);
            if (token.token) {
                const userAuthenticated = await actions.identificateUser(
                    token.token
                );
                if (userAuthenticated) {
                    navigate("/private");
                }
            }
        }
        reset();
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
            <label className="dark:text-white text-xl">
                {name}
                <input
                    className="w-full p-2 text-xl border rounded focus:outline-blue-600 text-black"
                    placeholder={exampleName}
                    type="text"
                    autoComplete="name"
                    {...register("name", {
                        required: { value: true, message: t("nameRequired") },
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
            </label>
            <label className="dark:text-white text-xl">
                {lastName}
                <input
                    className="w-full p-2 text-xl border rounded focus:outline-blue-600 text-black"
                    placeholder={exampleLastName}
                    type="text"
                    autoComplete="family-name"
                    {...register("lastname", {
                        required: {
                            value: true,
                            message: t("lastnameRequired")
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
            </label>
            <label className="dark:text-white text-xl">
                {email}
                <input
                    className="w-full p-2 text-xl border rounded focus:outline-blue-600 text-black"
                    placeholder={exampleEmail}
                    type="text"
                    autoComplete="email"
                    {...register("email", {
                        required: { value: true, message: t("emailRequired") },
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
            </label>
            <label className="dark:text-white text-xl">
                {password}
                <input
                    className="w-full p-2 text-xl border rounded focus:outline-blue-600 text-black"
                    placeholder={examplePassword}
                    type="password"
                    autoComplete="new-password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: t("passwordRequired")
                        },
                        minLength: {
                            value: 6,
                            message: t("passwordMinLength")
                        },
                        maxLength: {
                            value: 15,
                            message: t("passwordMaxLength")
                        }
                    })}
                />
                {errors.password && (
                    <span className="text-sm text-red-500">
                        {errors.password.message}
                    </span>
                )}
            </label>
            <label className="dark:text-white text-xl">
                {t("confirmPassword")}
                <input
                    className="w-full p-2 text-xl border rounded focus:outline-blue-600 text-black"
                    placeholder={t("confirmPassword")}
                    type="password"
                    autoComplete="new-password"
                    {...register("confirmPassword", {
                        required: {
                            value: true,
                            message: t("passwordRequired")
                        },
                        minLength: {
                            value: 6,
                            message: t("passwordMinLength")
                        },
                        maxLength: {
                            value: 15,
                            message: t("passwordMaxLength")
                        },
                        validate: value => {
                            if (value === watch("password")) {
                                return true;
                            }
                            return t("passwordsNotMatch");
                        }
                    })}
                />
                {errors.confirmPassword && (
                    <span className="text-sm text-red-500">
                        {errors.confirmPassword.message}
                    </span>
                )}
            </label>
            {children}
            <button
                className="w-full py-2 text-md font-medium text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
                type="submit">
                {submitButton}
            </button>
        </form>
    );
};

SignUpForm.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
    name: PropTypes.string.isRequired,
    exampleName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    exampleLastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    exampleEmail: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    examplePassword: PropTypes.string.isRequired,
    submitButton: PropTypes.string.isRequired
};
