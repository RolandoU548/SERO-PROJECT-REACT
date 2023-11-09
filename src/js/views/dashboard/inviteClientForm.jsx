import React from "react";
import "../../../css/app.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const InviteClientForm = () => {
    const [t] = useTranslation("form");
    const navigate = useNavigate();

    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="invert w-screen h-screen -z-50 fixed top-0 left-0 object-cover dark:invert-0 transition duration-500">
                <source src="DatabaseBG.mp4" type="video/mp4" />
            </video>
            <div className="font-serif text-black dark:text-white mt-40"></div>
            <div className="w-11/12 flex justify-center gap-4 mx-16 mt-8 h-64">
                <div
                    className="border border-white rounded-2xl w-4/12 p-4 m-2 flex flex-col justify-center text-2xl"
                    // onClick={() => {
                    //     navigate("/clientForm");
                    // }}
                >
                    <h2 className="text-white font-bold mb-5 flex gap-2 justify-center">INVITATION CLIENT<p className="text-cyan-300">FORM</p></h2>
                    <div className="flex items-center justify-center gap-4">
                        <div
                            className="border border-white rounded-2xl p-2 w-4/5 font-bold text-black dark:text-white flex gap-2 cursor-pointer items-center"
                            onClick={() => {
                                navigate("/clientForm");
                            }}>
                            http://localhost:3000/forms/:id
                        </div>
                        <div className="border border-white rounded-2xl p-2 font-bold dark:text-cyan-300 text-cyan-500 cursor-pointer">
                            COPY
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
