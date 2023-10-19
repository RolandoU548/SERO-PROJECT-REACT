// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { LanguageButton } from "../LanguageButton";
// import { Darkmode } from "../Darkmode";
// import "../../../css/glass.css";

// export const SideNav = () => {
//     return (
//         <>
//             {/* Sidenav */}
//             <nav
//                 id="sidenav-1"
//                 className="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
//                 data-te-sidenav-init=""
//                 data-te-sidenav-hidden="false"
//                 data-te-sidenav-position="absolute">
//                 <ul
//                     className="relative m-0 list-none px-[0.2rem]"
//                     data-te-sidenav-menu-ref="">
//                     <li className="relative">
//                         <a
//                             className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
//                             data-te-sidenav-link-ref="">
//                             <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     strokeWidth="1.5"
//                                     stroke="currentColor"
//                                     className="h-4 w-4">
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
//                                     />
//                                 </svg>
//                             </span>
//                             <span>Link 1</span>
//                         </a>
//                     </li>
//                     <li className="relative">
//                         <a
//                             className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
//                             data-te-sidenav-link-ref="">
//                             <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 24 24"
//                                     fill="currentColor"
//                                     className="h-4 w-4">
//                                     <path
//                                         fillRule="evenodd"
//                                         d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
//                                         clipRule="evenodd"
//                                     />
//                                 </svg>
//                             </span>
//                             <span>Category 1</span>
//                             <span
//                                 className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
//                                 data-te-sidenav-rotate-icon-ref="">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 20 20"
//                                     fill="currentColor"
//                                     className="h-5 w-5">
//                                     <path
//                                         fillRule="evenodd"
//                                         d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                                         clipRule="evenodd"
//                                     />
//                                 </svg>
//                             </span>
//                         </a>
//                         <ul
//                             className="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
//                             data-te-sidenav-collapse-ref=""
//                             data-te-collapse-show="">
//                             <li className="relative">
//                                 <a
//                                     className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
//                                     data-te-sidenav-link-ref="">
//                                     Link 2
//                                 </a>
//                             </li>
//                             <li className="relative">
//                                 <a
//                                     className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
//                                     data-te-sidenav-link-ref="">
//                                     Link 3
//                                 </a>
//                             </li>
//                         </ul>
//                     </li>
//                     <li className="relative">
//                         <a
//                             className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
//                             data-te-sidenav-link-ref="">
//                             <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 24 24"
//                                     fill="currentColor"
//                                     className="h-4 w-4">
//                                     <path
//                                         fillRule="evenodd"
//                                         d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
//                                         clipRule="evenodd"
//                                     />
//                                 </svg>
//                             </span>
//                             <span>Category 2</span>
//                             <span
//                                 className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
//                                 data-te-sidenav-rotate-icon-ref="">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 20 20"
//                                     fill="currentColor"
//                                     className="h-5 w-5">
//                                     <path
//                                         fillRule="evenodd"
//                                         d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                                         clipRule="evenodd"
//                                     />
//                                 </svg>
//                             </span>
//                         </a>
//                         <ul
//                             className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
//                             data-te-sidenav-collapse-ref="">
//                             <li className="relative">
//                                 <a
//                                     className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
//                                     data-te-sidenav-link-ref="">
//                                     Link 4
//                                 </a>
//                             </li>
//                             <li className="relative">
//                                 <a
//                                     className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
//                                     data-te-sidenav-link-ref="">
//                                     Link 5
//                                 </a>
//                             </li>
//                         </ul>
//                     </li>
//                 </ul>
//             </nav>
//             {/* Sidenav */}
//         </>
//     );
// };

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "./LanguageButton";

export const SideNav = () => {
    const [t] = useTranslation("app");
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-between items-center z-40 relative top-0 w-full py-3 font-serif text-gray-200">
            <h2
                className="text-4xl font-semibold ml-10 lg:ml-32 cursor-pointer"
                onClick={() => {
                    navigate("/");
                }}>
                SERØ.
            </h2>
            <div
                className="hidden resp:flex justify-center items-center mr-5 w-10 h-10 text-2xl bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer"
                onClick={() => {
                    setIsOpen(true);
                }}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div
                className={
                    "resp:fixed resp:top-0 resp:left-0 resp:w-full resp:h-screen resp:bg-[rgba(0,0,0,0.5)]" +
                    " " +
                    (isOpen ? "resp:block" : "hidden")
                }
                id="back__menu"
                onClick={() => {
                    setIsOpen(false);
                }}></div>
            <nav
                className={
                    "navbar-home mr-4 lg:mr-16 resp:dark:bg-zinc-950 resp:bg-white resp:m-0 resp:fixed resp:w-60 resp:h-screen resp:top-0 resp:p-7 resp:z-10" +
                    " " +
                    (isOpen ? "resp:right-0" : "resp:-right-60")
                }>
                <h2 className="text-gray-600 dark:text-gray-100 text-center text-4xl font-semibold hidden resp:block">
                    SERØ.
                </h2>
                <ul className="flex items-center resp:mt-5 resp:flex-col">
                    <li className="my-2.5">
                        <NavLink
                            to="/"
                            className="text-xl font-medium ml-6 text-gray-200 hover:text-cyan-300 transition duration-300 resp:dark:text-gray-200 resp:text-gray-600 resp:m-0">
                            {t("home")}
                        </NavLink>
                    </li>
                    <li className="my-2.5">
                        <NavLink
                            to="/services"
                            className="transition duration-300  text-xl font-medium ml-7 text-gray-200
                    hover:text-cyan-300 resp:dark:text-gray-200 resp:text-gray-600 resp:m-0">
                            {t("services")}
                        </NavLink>
                    </li>
                    <li className="my-2.5">
                        <NavLink
                            to="/contact"
                            className="text-xl font-medium ml-7 text-gray-200 hover:text-cyan-300 transition duration-300
                    resp:dark:text-gray-200 resp:text-gray-600 resp:m-0">
                            {t("contacts")}
                        </NavLink>
                    </li>
                    <li className="my-2.5">
                        <button
                            className="w-40 hover:bg-cyan-300 transition duration-300 hover:text-white text-xl p-2 text-black ml-6 bg-white rounded-full resp:dark:bg-gray-100 resp:m-0 resp:border resp:border-gray-400"
                            onClick={() => {
                                navigate("/login");
                            }}>
                            {t("login")}
                        </button>
                    </li>
                    <li className="my-2.5">
                        <button
                            className="hover:bg-cyan-300 transition duration-300 hover:text-white w-40 text-xl p-2 text-black rounded-full bg-white ml-4 resp:dark:bg-gray-100 resp:m-0 resp:border resp:border-gray-400"
                            onClick={() => {
                                navigate("/signup");
                            }}>
                            {t("signup")}
                        </button>
                    </li>
                    <li className="my-2.5">
                        <LanguageButton className="ml-7 md:mt-2.5 resp:absolute resp:top-3 resp:right-5 w-9 h-6" />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
