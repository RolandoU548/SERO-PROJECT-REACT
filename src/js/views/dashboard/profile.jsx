import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Profile = () => {
    const [t] = useTranslation("profile");
    const navigate = useNavigate();

    return (
<>
<div className="mt-64"></div>
<img src="ProfileBG.jpg" className="fixed -z-50 top-0 left-0" />
    <div className="glass h-[22.2rem] container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2">
                <div className="glass p-3 border-t-4 border-cyan-400">
                    <div className="image overflow-hidden">
                        <img className="h-16 w-16 rounded-full mx-auto"
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                                alt=""/>
                    </div>
                    <h1 className="text-white font-bold text-xl leading-8 my-1">Sebita</h1>
                    <h3 className="text-white font-lg text-semibold leading-6">EL GOAT</h3>
                    <p className="text-sm text-white hover:text-cyan-300 leading-6">Soy el mejor del mundo</p>
                    <ul
                        className="glass text-white hover:text-cyan-400 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex items-center py-3">
                            <span>Status</span>
                            <span className="ml-auto"><span
                                    className="bg-cyan-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
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
                <div className="glass p-3 border-t-4 border-cyan-400">
                    <div className="flex items-center space-x-2 font-semibold text-white leading-8">
                        <span className="text-cyan-300">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">About</span>
                    </div>
                    <div className="text-white">
                        <div className="gri text-sm">
                            <div className="flex flex-row">
                                <div className="px-4 py-2 font-semibold">First Name</div>
                                <div className="px-4 py-2">Sebastian</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="px-4 py-2 font-semibold">Last Name</div>
                                <div className="px-4 py-2">Lopez</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="px-4 py-2 font-semibold">Gender</div>
                                <div className="px-4 py-2">Macho</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="px-4 py-2 font-semibold">Contact No.</div>
                                <div className="px-4 py-2">+58 4124029490</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="px-4 py-2 font-semibold">Address</div>
                                <div className="px-4 py-2">Los Samanes, Caracas</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="px-4 py-2 font-semibold">Email</div>
                                <div className="px-4 py-2">
                                    <a className="text-white" href="mailto:jane@example.com">sebita@example.com</a>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="px-4 py-2 font-semibold">Birthday</div>
                                <div className="px-4 py-2">Agosto 18, 2001</div>
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
