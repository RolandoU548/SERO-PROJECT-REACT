import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Form = ({
    email,
    exampleEmail,
    password,
    examplePassword,
    forgottenPassword,
    submitButton,
    children,
    onSubmit
}) => {
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
                {email}
                <input
                    className="w-full p-2 text-xl border rounded focus:outline-blue-600 text-black"
                    placeholder={exampleEmail}
                    type="text"
                    autoComplete="email"
                    {...register("email", {
                        required: { value: true, message: "Correo requerido" },
                        minLength: {
                            value: 5,
                            message: "Correo debe tener al menos 5 caracteres"
                        },
                        maxLength: {
                            value: 30,
                            message: "Correo debe tener máximo 30 caracteres"
                        },
                        pattern: {
                            value: /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}/,
                            message: "Correo no válido"
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
                            message: "Contraseña requerida"
                        },
                        minLength: {
                            value: 6,
                            message:
                                "Contraseña debe tener al menos 6 caracteres"
                        },
                        maxLength: {
                            value: 15,
                            message:
                                "Contraseña debe tener máximo 15 caracteres"
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

Form.propTypes = {
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
    submitButton: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};
