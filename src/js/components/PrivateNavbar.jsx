import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "./LanguageButton";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import {
    FiDatabase,
    FiFolder,
    FiShoppingCart,
    FiDollarSign,
    FiHome
} from "react-icons/fi";
import "../../css/glass.css";

export const PrivateNavbar = () => {
    const [t] = useTranslation("private");
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const menus = [
        { name: "Home", link: "/private", icon: FiHome },
        { name: "Dashboard", link: "/dashboard", icon: MdOutlineDashboard },
        { name: "Clients", link: "/clients", icon: AiOutlineUser },
        { name: "Database", link: "/database", icon: FiDatabase },
        {
            name: "Fill Form",
            link: "/form",
            icon: TbReportAnalytics,
            margin: true
        },
        { name: "Reports", link: "/reports", icon: FiFolder },
        {
            name: "Payments",
            link: "/payments",
            icon: FiDollarSign,
            margin: true
        },
        { name: "Settings", link: "/settings", icon: RiSettings4Line }
    ];
    const [open, setOpen] = useState(false);

    return (
        <>
            <div
                className={
                    "fixed h-full w-72  z-50 duration-300 delay-1500" +
                    " " +
                    (open ? "left-0" : "-left-96")
                }>
                <section className="flex gap-6">
                    <div
                        className={`glassNav min-h-screen ${
                            open ? "w-72" : "w-16"
                        } duration-500 text-gray-100 px-4`}>
                        <div className="flex justify-end">
                            <div
                                className="ml-5 mt-3 flex justify-center items-center mr-5 w-14 h-14 text-3xl bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer"
                                onClick={() => {
                                    setOpen(!open);
                                }}>
                                <i className="fa-solid fa-bars"></i>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col gap-4 relative">
                            {menus?.map((menu, i) => (
                                <Link
                                    to={menu?.link}
                                    key={i}
                                    className={` ${
                                        menu?.margin && "mt-5"
                                    } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                                    <div>
                                        {React.createElement(menu?.icon, {
                                            size: "20"
                                        })}
                                    </div>
                                    <h2
                                        style={{
                                            transitionDelay: `${i + 3}00ms`
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
                                        } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
                                        {menu?.name}
                                    </h2>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <header className="glassNav fixed flex justify-between items-center z-40 top-0 w-full py-3 font-serif text-gray-200 bg-transparent">
                <div className="flex ml-10 items-center">
                    <div
                        className={
                            "flex justify-center items-center mr-5 w-14 h-14 text-3xl bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer" +
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
                            <button
                                className="hover:bg-cyan-300 transition duration-300 hover:text-white w-40 text-xl p-2 text-black rounded-full bg-white ml-4 resp:dark:bg-gray-100 resp:m-0 resp:border resp:border-gray-400"
                                onClick={() => {
                                    navigate("/");
                                }}>
                                {t("logout")}
                            </button>
                        </li>
                        <li className="my-2.5">
                            <LanguageButton className="ml-7 md:mt-2.5 resp:absolute resp:top-3 resp:right-5 w-9 h-6" />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
