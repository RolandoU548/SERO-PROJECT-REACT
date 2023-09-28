import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Base } from "../components/login-signup/Base";
import { Form } from "../components/login-signup/Form";
import { Buttons } from "../components/login-signup/Buttons";

export const SignUp = () => {
    const [t] = useTranslation("signup");
    const [signUpData, setSignUpData] = useState({ email: "", password: "" });
    return (
        <Base left>
            <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-white">
                {t("message")}
            </h2>
            <div className="mt-5">
                <Buttons
                    buttonGoogle={t("signupGoogle")}
                    buttonGithub={t("signupGithub")}
                />
            </div>
            <div className="border-b text-center my-4">
                <div className="px-2 inline-block text-sm text-gray-600 tracking-wide bg-white transform translate-y-1/2 dark:bg-slate-800 dark:text-white">
                    {t("option")}
                </div>
            </div>
            <Form
                onSubmit={() => {
                    alert(`${t("login")} ${signUpData.email}`);
                }}
                loadData={setSignUpData}
                email={t("email")}
                exampleEmail={t("exampleEmail")}
                password={t("password")}
                examplePassword={t("examplePassword")}
                forgottenPassword={t("forgottenPassword")}
                submitButton={t("signupButton")}>
                <p className="text-xs text-gray-600 text-center dark:text-white md:px-10">
                    {t("agreement")}
                </p>
            </Form>
            <p className="text-center text-sm text-gray-600 font-medium dark:text-white mt-3">
                {t("account")}
                <Link
                    to="/login"
                    className="ml-1 minimum:text-xl underline underline-offset-8 text-gray-600 dark:text-white">
                    {t("login")}
                </Link>
            </p>
        </Base>
    );
};
