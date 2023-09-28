import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BackArrow } from "../components/BackArrow";
import { LanguageButton } from "../components/LanguageButton";
import { Darkmode } from "../components/Darkmode";
import { Base } from "../components/login-signup/Base";
import { Form } from "../components/login-signup/Form";
import { Buttons } from "../components/login-signup/Buttons";

export const LogIn = () => {
    const [t] = useTranslation("login");
    const [logInData, setLogInData] = useState({ email: "", password: "" });
    return (
        <Base right>
            <BackArrow to="/" className="absolute top-2 left-2 md:hidden" />
            <LanguageButton className="absolute top-3 left-16" />
            <Darkmode className="text-[10%] absolute top-2 right-2" />
            <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-white mt-2 mb-5">
                {t("message")}
            </h2>
            <Form
                onSubmit={() => {
                    alert(`${t("login")} ${logInData.email}`);
                }}
                loadData={setLogInData}
                email={t("email")}
                exampleEmail={t("exampleEmail")}
                password={t("password")}
                examplePassword={t("examplePassword")}
                forgottenPassword={t("forgottenPassword")}
                submitButton={t("loginButton")}
            />
            <hr className="my-8 border-t-[1px] border-gray-300 " />
            <Buttons
                buttonGoogle={t("loginGoogle")}
                buttonGithub={t("loginGithub")}
            />
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
