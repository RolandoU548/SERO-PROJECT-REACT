import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Base } from "../components/login-signup/Base";
import { Form } from "../components/login-signup/Form";
import { Buttons } from "../components/login-signup/Buttons";

export const LogIn = () => {
    const [t] = useTranslation("login");
    const { actions } = useContext(Context);
    return (
        <Base>
            <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white mt-2 mb-5">
                {t("message")}
            </h2>
            <Form
                email={t("email")}
                exampleEmail={t("exampleEmail")}
                password={t("password")}
                examplePassword={t("examplePassword")}
                forgottenPassword={t("forgottenPassword")}
                submitButton={t("loginButton")}
                onSubmit={actions.logIn}
            />
            <div className="border-b text-center">
                <div className="px-2 inline-block text-sm text-gray-600 tracking-wide bg-white transform translate-y-1/2 dark:bg-black dark:text-white rounded transition duration-500">
                    {t("option")}
                </div>
            </div>
            <div className="mt-5">
                <Buttons buttonGoogle={t("loginGoogle")} />
            </div>
            <p className="text-center text-sm text-gray-600 font-medium dark:text-white mt-6 tracking-wide">
                {t("noAccount")}
                <Link
                    to="/signup"
                    className="ml-1 minimum:text-xl underline underline-offset-8 text-gray-600 dark:text-white">
                    {t("signup")}
                </Link>
            </p>
        </Base>
    );
};
