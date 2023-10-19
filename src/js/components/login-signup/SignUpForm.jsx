import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
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
    forgottenPassword,
    submitButton,
    children,
    onSubmit
}) => {
    const [t] = useTranslation("signupform");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const submit = handleSubmit(data => {
        onSubmit(data);
        reset();
    });

    return (
        <form className="flex flex-col gap-4" onSubmit={submit}>
            <label className="dark:text-white text-xl">
                {name}
                <input
                    className="w-full p-2 text-xl border rounded focus:outline-blue-600 text-black"
                    placeholder={exampleName}
                    type="text"
                    autoComplete="name"
                    {...register("name", {
                        required: { value: true, message: t("nameRequired") }
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
                            message: t("lastNameRequired")
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
                            value: 30,
                            message: t("emailMaxLength")
                        },
                        pattern: {
                            value: /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}/,
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
                    autoComplete="current-password"
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
    forgottenPassword: PropTypes.string.isRequired,
    submitButton: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};
