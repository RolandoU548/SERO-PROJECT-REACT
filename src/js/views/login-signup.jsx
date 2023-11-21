import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import ReactCardFlip from "react-card-flip";
import { useTranslation } from "react-i18next";
import { Base } from "../components/login-signup/Base";
import { SignUpForm } from "../components/login-signup/SignUpForm";
import { LoginForm } from "../components/login-signup/LoginForm";
import { Buttons } from "../components/login-signup/Buttons";
import { BackArrow } from "../components/BackArrow";
import { signInWithGooglePopup } from "../components/firebase/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PropTypes from "prop-types";

export const LoginSignupCard = props => {
    const [t] = useTranslation("loginsignup");
    const navigate = useNavigate();
    const { actions } = useContext(Context);
    const notify = () =>
        toast.success(t("successgoogle"), {
            position: "bottom-right",
            style: {
                background: "rgba(23, 23, 23, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px 0 rgba(77, 208, 225, 0.37)",
                color: "#fff",
                borderRadius: "10px"
            }
        });
    const [flip, setFlip] = useState(props.flip);
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
        const user = {
            name: response.user.displayName.split(" ")[0],
            lastname: response.user.displayName.split(" ")[1],
            email: response.user.email,
            password: response.user.uid,
            role: ["user", "admin"],
            status: "Active"
        };
        await actions.createUser(user);

        const token = await actions.generateToken(user);
        if (token.message === "Incorrect password") {
            toast.error(t("incorrectPassword"));
        } else if (token.message === "User doesn't exist") {
            toast.error(t("userNotRegistered"));
        } else if (token.token) {
            const userAuthenticated = await actions.identificateUser(
                token.token
            );
            if (userAuthenticated) {
                notify();
                navigate("/private");
            }
        }
    };

    useEffect(() => {
        actions.signOut();
    }, []);
    return (
        <Base>
            <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                {/* SIGNUP */}
                <div className="m-auto lg:my-4 my-20 w-[35rem] max-w-[95%] items-center glass py-10 px-8 resp:px-4 relative">
                    <BackArrow
                        className="absolute top-3 right-4 md:hidden"
                        to="/"
                    />
                    <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white mb-8">
                        {t("signupMessage")}
                    </h2>
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
                    <p className="text-center text-sm text-gray-600 font-medium dark:text-white mt-6 tracking-wide">
                        {t("account")}
                        <button
                            className=".flipCard ml-1 minimum:text-xl underline underline-offset-8 text-gray-600 dark:text-white"
                            onClick={() => setFlip(!flip)}>
                            {t("login")}
                        </button>
                    </p>
                </div>
                {/* LOGIN */}
                <div className="m-auto lg:my-20 my-20 w-[35rem] max-w-[95%] items-center glass py-10 px-8 resp:px-4 relative">
                    <BackArrow
                        className="absolute top-4 right-5 md:hidden"
                        to="/"
                    />
                    <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white mb-8">
                        {t("loginMessage")}
                    </h2>
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
                        <Buttons
                            buttonGoogle={t("loginGoogle")}
                            ejecutar={logGoogleUser}
                        />
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
            </ReactCardFlip>
        </Base>
    );
};

LoginSignupCard.propTypes = {
    flip: PropTypes.bool.isRequired
};
