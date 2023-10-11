import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Base } from "../components/login-signup/Base";
import { Form } from "../components/login-signup/Form";
import { Buttons } from "../components/login-signup/Buttons";
import { LanguageButton } from "../components/LanguageButton";
import { Darkmode } from "../components/Darkmode";

export const SignUp = () => {
    const [t] = useTranslation("signup");
    const [signUpData, setSignUpData] = useState({ email: "", password: "" });
    return (
        <>
            <LanguageButton className="absolute top-3 right-20 w-10 h-7" />
            <Darkmode className="text-[10%] absolute top-3 right-4" />
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-[100%] h-[100%] -z-50 absolute object-cover dark:invert-0 invert">
                <source
                    src="/public/SERØ Live Background Login & Signup Short.mp4"
                    type="video/mp4"
                />
            </video>
            <Base left>
                <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white mb-3">
                    {t("message")}
                </h2>
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
                <div className="border-b text-center">
                    <div className="px-2 inline-block text-sm text-gray-600 tracking-wide bg-white transform translate-y-1/2 dark:bg-black dark:text-white">
                        {t("option")}
                    </div>
                </div>
                <div className="mt-5">
                    <Buttons buttonGoogle={t("signupGoogle")} />
                </div>
                <p className="text-center text-sm text-gray-600 font-medium dark:text-white mt-2">
                    {t("account")}
                    <Link
                        to="/login"
                        className="ml-1 minimum:text-xl underline underline-offset-8 text-gray-600 dark:text-white">
                        {t("login")}
                    </Link>
                </p>
            </Base>
        </>
    );
};
