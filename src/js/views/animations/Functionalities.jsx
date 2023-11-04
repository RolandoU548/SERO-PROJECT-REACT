import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useInView
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
};

export const Functionalities = () => {
    const ref = useRef();
    const [t] = useTranslation("app");
    const navigate = useNavigate();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    return (
        <>
            <div className="relative" ref={ref}>
                <div className="sticky top-0 left-0 pt-12 text-center text-cyan-300 text-4xl z-10">
                    <h2 className="m-12 text-cyan-500 dark:text-cyan-300">
                        {t("services")}
                    </h2>
                    <motion.div
                        style={{ scaleX }}
                        className="h-2.5 rounded bg-gray-500 dark:bg-white mx-5"></motion.div>
                </div>
                {/* Base de Datos */}
                <div className="flex resp:flex-col-reverse my-20 w-10/12 resp:w-[98%] m-auto">
                    <div
                        className="w-[40%] h-[20rem] cursor-pointer transition ease-out duration-300 hover:scale-105 rounded-2xl border-2 border-white relative group m-auto resp:mt-10 resp:w-[26rem] resp:max-w-[75%]"
                        style={{
                            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDatabaseCardBG.jpg?alt=media&token=1f987d91-e459-4705-b95e-7edb47bfb442')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                        onClick={() => {
                            navigate("/signup");
                        }}>
                        <div className="bg-black absolute w-full h-full rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    </div>
                    <motion.div className="md:w-[60%] resp:text-center">
                        <div className="px-10">
                            <h2 className="text-2xl/10 minimum:text-[2.5rem]/10 tiny:text-5xl/10 sm:text-6xl/10 md:text-7xl">
                                {t("databaseCard")}
                            </h2>
                            <p className="text-lg mt-3">{t("database1")}</p>
                            <Link
                                className="text-black text-2xl mt-10 bg-cyan-400 hover:bg-cyan-500 transition duration-300 py-2 px-16 rounded-2xl inline-block"
                                to="/login">
                                {t("tryIt")}
                            </Link>
                        </div>
                    </motion.div>
                </div>
                {/* Formularios */}
                <div className="flex resp:flex-col-reverse justify-between my-20 w-10/12 resp:w-[98%] m-auto">
                    <div
                        className="w-[40%] h-[20rem] cursor-pointer transition ease-out duration-300 hover:scale-105 rounded-2xl border-2 border-white relative group m-auto resp:mt-10 resp:w-[26rem] resp:max-w-[75%]"
                        style={{
                            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FFormCardBG.jpg?alt=media&token=f42d2fea-fe65-411a-a6fa-6140187eaea8')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                        onClick={() => {
                            navigate("/signup");
                        }}>
                        <div className="bg-black absolute w-full h-full rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    </div>
                    <motion.div className="md:w-[60%] resp:text-center">
                        <div className="px-10">
                            <h2 className="text-2xl minimum:text-[2.5rem] tiny:text-5xl sm:text-6xl md:text-7xl">
                                {t("formCard")}
                            </h2>
                            <p className="text-lg mt-3">{t("form1")}</p>
                            <button className="text-black text-2xl mt-10 bg-cyan-400 hover:bg-cyan-500 transition duration-300 py-2 px-16 rounded-2xl">
                                {t("tryIt")}
                            </button>
                        </div>
                    </motion.div>
                </div>
                {/* Clientes */}
                <div className="flex resp:flex-col-reverse justify-between my-20 w-10/12 resp:w-[98%] m-auto">
                    <div
                        className="w-[40%] h-[20rem] cursor-pointer transition ease-out duration-300 hover:scale-105 rounded-2xl border-2 border-white relative group m-auto resp:mt-10 resp:w-[26rem] resp:max-w-[75%]"
                        style={{
                            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FClientsCardBG.jpg?alt=media&token=f601f515-64e0-4fe4-a297-1b999876d15a')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                        onClick={() => {
                            navigate("/signup");
                        }}>
                        <div className="bg-black absolute w-full h-full rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    </div>
                    <motion.div className="md:w-[60%] resp:text-center">
                        <div className="px-10">
                            <h2 className="text-2xl minimum:text-[2.5rem] tiny:text-5xl sm:text-6xl md:text-7xl">
                                {t("clientsCard")}
                            </h2>
                            <p className="text-lg mt-3">{t("clients1")}</p>
                            <button className="text-black text-2xl mt-10 bg-cyan-400 hover:bg-cyan-500 transition duration-300 py-2 px-16 rounded-2xl">
                                {t("tryIt")}
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Panel de Control */}
                <div className="flex resp:flex-col-reverse my-20 w-10/12 resp:w-[98%] m-auto">
                    <div
                        className="w-[40%] h-[20rem] cursor-pointer transition ease-out duration-300 hover:scale-105 rounded-2xl border-2 border-white relative group m-auto resp:mt-10 resp:w-[26rem] resp:max-w-[75%]"
                        style={{
                            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDashboardCardBG.jpg?alt=media&token=db56f99f-811d-4ba3-9a0c-57c0fffb6703')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                        onClick={() => {
                            navigate("/signup");
                        }}>
                        <div className="bg-black absolute w-full h-full rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    </div>
                    <motion.div className="md:w-[60%] resp:text-center">
                        <div className="px-10">
                            <h2 className="text-2xl/10 minimum:text-[2.5rem]/10 tiny:text-5xl/10 sm:text-6xl/10 md:text-7xl">
                                {t("dashboardCard")}
                            </h2>
                            <p className="text-lg mt-3">{t("dashboard1")}</p>
                            <Link
                                className="text-black text-2xl mt-10 bg-cyan-400 hover:bg-cyan-500 transition duration-300 py-2 px-16 rounded-2xl inline-block"
                                to="/login">
                                {t("tryIt")}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};
