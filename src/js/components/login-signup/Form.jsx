import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Form = ({
    onSubmit,
    loadData,
    email,
    exampleEmail,
    password,
    examplePassword,
    forgottenPassword,
    submitButton,
    children
}) => {
    const [data, setData] = useState({ email: "", password: "" });
    useEffect(() => {
        loadData(data);
    }, [data]);
    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={e => {
                e.preventDefault();
                onSubmit();
            }}>
            <label className="dark:text-white text-xl">
                {email}
                <input
                    className="w-full p-2 text-xl border rounded focus:outline-blue-600"
                    placeholder={exampleEmail}
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    onChange={e => {
                        setData({
                            ...data,
                            email: e.target.value
                        });
                    }}
                />
            </label>
            <label className="dark:text-white text-xl">
                {password}
                <input
                    className="w-full p-2 text-xl border rounded focus:outline-blue-600"
                    placeholder={examplePassword}
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    required
                    onChange={e => {
                        setData({ ...data, password: e.target.value });
                    }}
                />
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
    onSubmit: PropTypes.func.isRequired,
    loadData: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    exampleEmail: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    examplePassword: PropTypes.string.isRequired,
    forgottenPassword: PropTypes.string.isRequired,
    submitButton: PropTypes.string.isRequired
};
