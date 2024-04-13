import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../../store/appContext";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginForm = ({
    email,
    exampleEmail,
    password,
    examplePassword,
    forgottenPassword,
    submitButton,
    children
}) => {
    const [t] = useTranslation("loginform");
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const notify = () =>
        toast.success(t("loggedIn"), {
            position: "bottom-right",
            style: {
                background: "rgba(23, 23, 23, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px 0 rgba(77, 208, 225, 0.37)",
                color: "#fff",
                borderRadius: "10px"
            }
        });

    const submit = async formData => {
        const response = await actions.signInWithPassword(
            formData.email,
            formData.password
        );
        if (response) {
            notify();
            navigate("/private");
            reset();
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
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
            <Link
                className="block text-md text-blue-600 hover:underline"
                to="/forgot-password">
                {forgottenPassword}
            </Link>
            {children}
            <button
                className="w-full py-2 text-md font-medium text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
                type="submit">
                {submitButton}
            </button>
        </form>
    );
};

LoginForm.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
    email: PropTypes.string.isRequired,
    exampleEmail: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    examplePassword: PropTypes.string.isRequired,
    forgottenPassword: PropTypes.string.isRequired,
    submitButton: PropTypes.string.isRequired
};
