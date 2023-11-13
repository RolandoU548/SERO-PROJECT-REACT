import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "./LanguageButton.jsx";
import { Darkmode } from "./Darkmode.jsx";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import {
    FiDatabase,
    FiFolder,
    FiDollarSign,
    FiHome,
    FiLogOut
} from "react-icons/fi";
import { FaTasks } from "react-icons/fa"
import "../../css/glass.css";

export const PrivateNavbar = () => {
    const { store, actions } = useContext(Context);
    const [t] = useTranslation("private");
    const [t2] = useTranslation("privateNavbar");
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const menus = [
        { name: t2("home"), link: "/private", icon: FiHome },
        { name: t2("dashboard"), link: "/dashboard", icon: MdOutlineDashboard },
        { name: t2("clients"), link: "/clients", icon: AiOutlineUser },
        { name: t2("database"), link: "/database", icon: FiDatabase },
        {
            name: t2("fillForm"),
            link: "/form",
            icon: TbReportAnalytics
        },
        { name: t2("tasks"), link: "/kanban", icon: FaTasks },
        {
            name: t2("payments"),
            link: "/payments",
            icon: FiDollarSign
        },
        { name: t2("settings"), link: "/settings", icon: RiSettings4Line }
    ];
    const [open, setOpen] = useState(false);

    if (store.user.role.includes("admin")) {
        menus.push({
            name: t2("admin"),
            link: "/admin",
            icon: BsKey,
            margin: true
        });
    }

    return (
        <>
            <div
                className={
                    "fixed h-full w-72 top-0 z-50 duration-300 delay-1500" +
                    " " +
                    (open ? "left-0" : "-left-96")
                }>
                <section className="flex gap-6">
                    <div
                        className={`glassNav h-screen bg-[rgba(200,200,200,0.6)] dark:bg-transparent ${
                            open ? "w-72" : "w-16"
                        } duration-500 text-gray-100 px-4`}>
                        <div className="flex justify-end">
                            <div
                                className="ml-5 mt-3 flex justify-center items-center mr-5 w-14 h-14 text-3xl dark:bg-[rgba(255,255,255,0.2)] dark:hover:bg-[rgba(255,255,255,0.3)] bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)] text-black dark:text-white rounded-full cursor-pointer"
                                onClick={() => {
                                    setOpen(!open);
                                }}>
                                <i className="fa-solid fa-bars"></i>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col gap-4 relative text-black dark:text-white dark:bg-transparent rounded-xl">
                            {menus?.map((menu, i) => (
                                <Link
                                    to={menu?.link}
                                    key={i}
                                    className={` ${
                                        menu?.margin && "mt-5"
                                    } group flex items-center text-sm gap-3.5 font-medium p-2 dark:hover:bg-gray-800 hover:bg-gray-400 rounded-md`}
                                    onClick={() => {
                                        setOpen(!open);
                                    }}>
                                    <div>
                                        {React.createElement(menu?.icon, {
                                            size: "20"
                                        })}
                                    </div>
                                    <h2
                                        style={{
                                            transitionDelay: `${i + 1}00ms`
                                        }}
                                        className={`whitespace-pre duration-500 ${
                                            !open &&
                                            "opacity-0 translate-x-28 overflow-hidden"
                                        }`}>
                                        {menu?.name}
                                    </h2>
                                    <h2
                                        className={`${
                                            open && "hidden"
                                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                                        {menu?.name}
                                    </h2>
                                </Link>
                            ))}
                            <div
                                className="
                                        mt-10 text-red-500 group flex items-center text-sm gap-3.5 font-medium p-2 dark:hover:bg-gray-800 hover:bg-gray-400 rounded-md cursor-pointer"
                                onClick={() => {
                                    actions.signOut();
                                    navigate("/");
                                }}>
                                <div>
                                    <FiLogOut />
                                </div>
                                <h2
                                    style={{
                                        transitionDelay: `100ms`
                                    }}
                                    className={`whitespace-pre duration-500 ${
                                        !open &&
                                        "opacity-0 translate-x-28 overflow-hidden"
                                    }`}>
                                    {/* { name: t2("logout"), link: "/", icon: FiLogOut, margin: true } */}
                                    {t2("logout")}
                                </h2>
                                <h2
                                    className={`${
                                        open && "hidden"
                                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                                    {t2("logout")}
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <header className="glassNav fixed flex justify-between items-center z-40 top-0 w-screen py-3 font-serif dark:text-gray-200 bg-transparent">
                <div className="flex ml-10 items-center">
                    <div
                        className={
                            "flex justify-center items-center mr-5 w-14 h-14 text-3xl dark:bg-[rgba(255,255,255,0.2)] dark:hover:bg-[rgba(255,255,255,0.3)] bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)] rounded-full cursor-pointer" +
                            " " +
                            (open ? "hidden" : "")
                        }
                        onClick={() => {
                            setOpen(!open);
                        }}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <h2
                        className={
                            "text-4xl font-semibold cursor-pointer" +
                            " " +
                            (open ? "ml-72" : "ml-4")
                        }
                        onClick={() => {
                            navigate("/private");
                        }}>
                        SERØ.
                    </h2>
                </div>
                <div
                    className="hidden resp:flex justify-center items-center mr-5 w-10 h-10 text-2xl dark:bg-[rgba(255,255,255,0.2)] dark:hover:bg-[rgba(255,255,255,0.3)] bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.2)] rounded-full cursor-pointer"
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
                    <h2 className="text-gray-600 dark:text-gray-100 text-center text-4xl font-semibold hidden resp:block resp:mt-5">
                        SERØ.
                    </h2>
                    <ul className="flex items-center resp:mt-5 resp:flex-col">
                        <li className="mt-4">
                            <Link to="/profile" className="text-xl text-light">
                                {store.user.role.includes("admin") && (
                                    <span className="text-sm text-cyan-500 dark:text-cyan-400 font-bold mr-1">
                                        admin
                                    </span>
                                )}
                                {store.user.name
                                    ? store.user.name[0].toUpperCase() +
                                      store.user.name.substr(1)
                                    : " "}{" "}
                                {store.user.lastname
                                    ? store.user.lastname[0].toUpperCase() +
                                      store.user.lastname.substr(1)
                                    : " "}
                                <i
                                    className="fa-regular fa-circle-user text-2xl mx-4 invert dark:invert-0"
                                    style={{ color: "#ffffff" }}
                                />
                            </Link>
                        </li>
                        {/* <li className="my-2.5">
                            <button
                                className="hover:bg-cyan-300 dark:hover:bg-cyan-300 hover:text-black transition duration-300 dark:hover:text-white w-40 text-xl p-2 dark:text-black rounded-full bg-black text-white dark:bg-white ml-4 resp:dark:bg-gray-100 resp:m-0 resp:border resp:border-gray-400"
                                onClick={() => {
                                    actions.signOut();
                                    navigate("/");
                                }}>
                                {t("logout")}
                            </button>
                        </li> */}
                        <li className="my-2.5 mr-3">
                            <LanguageButton className="ml-3 md:mt-2.5 resp:absolute resp:top-3 resp:right-5 w-9 h-6" />
                        </li>
                        <li className="my-2.5">
                            <Darkmode className="text-[10%] ml-3 resp:absolute resp:top-3 resp:left-3" />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
