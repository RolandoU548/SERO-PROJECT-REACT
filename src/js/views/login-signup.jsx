import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import ReactCardFlip from "react-card-flip";
import { useTranslation } from "react-i18next";
import { Base } from "../components/login-signup/Base";
import { SignUpForm } from "../components/login-signup/SignUpForm";
import { LoginForm } from "../components/login-signup/LoginForm";
import { Buttons } from "../components/login-signup/Buttons";
import { BackArrow } from "../components/BackArrow.jsx";
import PropTypes from "prop-types";

export const LoginSignupCard = props => {
    const { actions } = useContext(Context);
    const [t] = useTranslation("loginsignup");
    const [flip, setFlip] = useState(props.flip);
    useEffect(() => {
        actions.signOut();
    }, []);
    return (
        <Base>
            <div className="mt-24"></div>
            <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                {/* SIGNUP */}
                <div className="m-auto w-[50%] resp:w-[80%] glass mb-24 relative">
                    <div className="text-3xl font-bold text-center text-gray-700 dark:text-white mb-3 flex justify-center mt-8">
                        <h2 className="m-auto">{t("signupMessage")}</h2>
                        <BackArrow
                            className="md:hidden leading-[20px] mr-1"
                            to="/"
                        />
                    </div>
                    <div className="px-8 pb-8">
                        <SignUpForm
                            name={t("name")}
                            exampleName={t("exampleName")}
                            lastName={t("lastName")}
                            exampleLastName={t("exampleLastName")}
                            email={t("email")}
                            exampleEmail={t("exampleEmail")}
                            password={t("password")}
                            examplePassword={t("examplePassword")}
                            forgottenPassword={t("forgottenPassword")}
                            submitButton={t("signupButton")}>
                            <p className="text-xs text-gray-600 text-center dark:text-white md:px-10">
                                {t("agreement")}
                            </p>
                        </SignUpForm>
                        <div className="border-b text-center">
                            <div className="px-2 inline-block text-sm text-gray-600 tracking-wide bg-white transform translate-y-1/2 dark:bg-black dark:text-white rounded transition duration-500">
                                {t("signupOption")}
                            </div>
                        </div>
                        <div className="mt-5">
                            <Buttons buttonGoogle={t("signupGoogle")} />
                        </div>
                        <p className="text-center text-sm text-gray-600 font-medium dark:text-white mt-6 tracking-wide">
                            {t("account")}
                            <button
                                className=".flipCard ml-1 minimum:text-xl underline underline-offset-8 text-gray-600 dark:text-white"
                                onClick={() => setFlip(!flip)}>
                                {t("login")}
                            </button>
                        </p>
                    </div>
                </div>
                {/* LOGIN */}
                <div className="m-auto w-[50%] resp:w-[80%] glass mt-[13%] mb-12 relative">
                    <div className="text-3xl font-bold text-center text-gray-700 dark:text-white mt-2 mb-5 flex justify-center mt-8">
                        <h2 className="m-auto">{t("loginMessage")}</h2>
                        <BackArrow
                            className="md:hidden leading-[20px] mr-1"
                            to="/"
                        />
                    </div>
                    <div className="px-8 pb-8">
                        <LoginForm
                            email={t("email")}
                            exampleEmail={t("exampleEmail")}
                            password={t("password")}
                            examplePassword={t("examplePassword")}
                            forgottenPassword={t("forgottenPassword")}
                            submitButton={t("loginButton")}
                        />
                        <div className="border-b text-center">
                            <div className="px-2 inline-block text-sm text-gray-600 tracking-wide bg-white transform translate-y-1/2 dark:bg-black dark:text-white rounded transition duration-500">
                                {t("loginOption")}
                            </div>
                        </div>
                        <div className="mt-5">
                            <Buttons buttonGoogle={t("loginGoogle")} />
                        </div>
                        <p className="text-center text-sm text-gray-600 font-medium dark:text-white mt-2">
                            {t("noAccount")}
                            <button
                                className="ml-1 minimum:text-xl underline underline-offset-8 text-gray-600 dark:text-white"
                                onClick={() => setFlip(!flip)}>
                                {t("signupButton")}
                            </button>
                        </p>
                    </div>
                </div>
            </ReactCardFlip>
        </Base>
    );
};

LoginSignupCard.propTypes = {
    flip: PropTypes.bool.isRequired
};
