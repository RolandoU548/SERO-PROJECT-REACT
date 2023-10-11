import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Base } from "../components/login-signup/Base";
import { Form } from "../components/login-signup/Form";
import { Buttons } from "../components/login-signup/Buttons";

export const LogIn = () => {
    const [t] = useTranslation("login");
    const [logInData, setLogInData] = useState({ email: "", password: "" });
    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-[100%] h-[100%] -z-50 absolute object-cover">
                <source
                    src="/public/SERØ Live Background Login & Signup Short.mp4"
                    type="video/mp4"
                />
            </video>

            <Base right>
                <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white mt-2 mb-5">
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
        </>
    );
};
