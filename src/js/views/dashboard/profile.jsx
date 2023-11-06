import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../../store/appContext";

export const Profile = () => {
    const [t] = useTranslation("profile");
    const { store } = useContext(Context);

    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fprofile%2FProfileBG.jpeg?alt=media&token=c90a4f9c-9ae6-4ce2-a4b2-0bb4af67e72e"
                className="invert fixed -z-50 -top-20 left-0 dark:invert-0 transition duration-500"
            />
            <div className="h-[22.2rem] dark:text-white mt-32 container mx-auto mb-5 p-5">
                <div className="md:flex no-wrap md:-mx-2 ">
                    <div className="w-full md:w-3/12 md:mx-2">
                        <div className="glass p-3">
                            <div className="image overflow-hidden">
                                <img
                                    className="h-48 w-48 rounded-full mx-auto"
                                    src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                                    alt=""
                                />
                            </div>
                            <h1 className="font-bold text-xl text-center leading-8 my-1">
                                {store.user.name} {store.user.lastname}
                            </h1>
                            {/* <h3 className="font-lg text-semibold leading-6">
                                EL GOAT
                            </h3>
                            <p className="text-sm hover:text-cyan-300 leading-6">
                                Soy el mejor del mundo
                            </p> */}
                            <ul className="hover:text-cyan-400 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>Status</span>
                                    <span className="ml-auto">
                                        <span className="bg-cyan-500 py-1 px-2 rounded text-sm">
                                            Active
                                        </span>
                                    </span>
                                </li>
                                <li className="flex items-center py-3">
                                    <span>Member since</span>
                                    <span className="ml-auto">Nov 6, 2016</span>
                                </li>
                            </ul>
                        </div>
                        <div className="my-4"></div>
                    </div>
                    <div className="w-full md:w-9/12 mx-2 h-64">
                        <div className="glass p-3">
                            <div className="flex items-center space-x-2 font-semibold leading-8">
                                <span className="text-cyan-300">
                                    <svg
                                        className="h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </span>
                                <span className="tracking-wide text-xl">
                                    About
                                </span>
                            </div>
                            <div>
                                <div className="grid text-sm">
                                    <div className="flex flex-row">
                                        <div className="px-4 py-2 font-semibold">
                                            First Name
                                        </div>
                                        <div className="px-4 py-2">
                                            {store.user.name}
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="px-4 py-2 font-semibold">
                                            Last Name
                                        </div>
                                        <div className="px-4 py-2">
                                            {store.user.lastname}
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="px-4 py-2 font-semibold">
                                            Gender
                                        </div>
                                        <div className="px-4 py-2">Macho</div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="px-4 py-2 font-semibold">
                                            Contact No.
                                        </div>
                                        <div className="px-4 py-2">
                                            +58 4124029490
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="px-4 py-2 font-semibold">
                                            Address
                                        </div>
                                        <div className="px-4 py-2">
                                            Los Samanes, Caracas
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="px-4 py-2 font-semibold">
                                            Email
                                        </div>
                                        <div className="px-4 py-2">
                                            <a
                                                className="ææææææææææææææææææææææ"
                                                href="mailto:jane@example.com">
                                                {store.user.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="px-4 py-2 font-semibold">
                                            Birthday
                                        </div>
                                        <div className="px-4 py-2">
                                            Agosto 18, 2001
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
