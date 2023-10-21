import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../../store/appContext";
import { useTranslation } from "react-i18next";

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

    const submit = async data => {
        const token = await actions.generateToken(data);
        if (token.message === "Incorrect password") {
            alert("Contraseña incorrecta");
        } else if (token.message === "User doesn't exist") {
            alert("El usuario no está registrado");
        } else if (token.token) {
            actions.identificateUser(token.token);
            alert("Sesión Iniciada");
            navigate("/private");
        }
        reset();
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
