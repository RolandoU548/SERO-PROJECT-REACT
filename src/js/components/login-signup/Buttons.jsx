import React from "react";
import PropTypes from "prop-types";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const Buttons = ({ buttonGoogle }) => {
    const navigate = useNavigate();
    const login = useGoogleLogin({
        onSuccess: async codeResponse => {
            // Envio de token a backend
            const accessToken = codeResponse.access_token;
            try {
                const resp = await fetch(
                    import.meta.env.VITE_BACKEND_URL + "/auth/google",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${accessToken}`
                        },
                        body: JSON.stringify({ accessToken })
                    }
                );
                // quiero verificar la respuesta
                console.log(accessToken);
                if (resp.ok) {
                    navigate("/private");
                } else {
                    console.error(
                        "Failed to fetch:",
                        resp.status,
                        resp.statusText
                    );
                }
            } catch (error) {
                console.error("Error fetching:", error);
            }
        }
    });

    return (
        <div className="flex flex-col gap-4">
            <button
                className="py-1 px-2 font-normal w-full border flex justify-center items-center gap-2 border-slate-300 rounded-lg text-base text-slate-700 hover:border-cyan-300 hover:text-slate-900 hover:shadow dark:hover:bg-[#101010] transition duration-300 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-200 dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-offset-2 focus:ring-1 focus:ring-offset-2 dark:text-white"
                onClick={login}>
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
