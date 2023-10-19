import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { useGoogleLogin } from "@react-oauth/google";

export const Buttons = ({ buttonGoogle }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const login = useGoogleLogin({
        clientId: import.meta.env.GOOGLE_CLIENT_ID,
        onSuccess: tokenResponse => {
            console.log(tokenResponse);
            fetch(import.meta.env.VITE_BACKEND_URL + "/google-login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token: tokenResponse.accessToken })
            })
                .then(response => {
                    if (response.ok) {
                        console.log("User created");
                        const { idToken } = tokenResponse;
                        const token = actions.generateToken({ idToken });
                        if (token.token) {
                            actions.identificateUser(token.token);
                            navigate("/private");
                        }
                    } else {
                        console.log("Error creating user");
                    }
                })
                .catch(error => console.error(error));
        }
    });
    const handleGoogleLogin = () => {
        login();
    };

    return (
        <div className="flex flex-col gap-4">
            <button
                className="py-1 px-2 font-normal w-full border flex justify-center items-center gap-2 border-slate-300 rounded-lg text-base text-slate-700 hover:border-cyan-300 hover:text-slate-900 hover:shadow dark:hover:bg-[#101010] transition duration-300 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-200 dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-offset-2 focus:ring-1 focus:ring-offset-2 dark:text-white"
                onClick={handleGoogleLogin}>
                <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                />
                {buttonGoogle}
            </button>
        </div>
    );
};

Buttons.propTypes = {
    buttonGoogle: PropTypes.string.isRequired
};
