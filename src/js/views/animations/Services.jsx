import React from "react";
import "../../../css/glass.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const variants = {
    initial: {
        x: -200,
        y: -10,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
};

export const Services = () => {
    const [t] = useTranslation("app");

    return (
        <>
            <motion.div
                className="h-full flex flex-col justify-between mt-36"
                variants={variants}
                initial="initial"
                whileInView="animate">
                <motion.div
                    className="flex items-center justify-center"
                    variants={variants}>
                    <hr className="border border-cyan-300 dark:border-cyan-500 w-2/5" />
                    <p className="text-cyan-500 dark:text-cyan-300 font-bold text-center md:text-xl minimum:text-sm text-xs">
                        {t("weSolveProblems")}
                    </p>
                    <hr className="border border-cyan-300 dark:border-cyan-500 w-2/5" />
                </motion.div>
                <motion.div
                    className="flex flex-col items-center"
                    variants={variants}>
                    <h2 className="text-2xl minimum:text-[2rem] tiny:text-5xl sm:text-6xl md:text-7xl my-3 text-center lg:px-24 md:px-8 sm:px-5">
                        <motion.b className="transition duration-500">
                            <b className="text-black dark:text-white hover:text-cyan-500 dark:hover:text-cyan-300">
                                {t("simplicity")}
                            </b>
                        </motion.b>{" "}
                        {t("to")}{" "}
                        <motion.b className="transition duration-500">
                            <b className="text-black dark:text-white hover:text-cyan-500 dark:hover:text-cyan-300">
                                {t("touch")}{" "}
                            </b>
                        </motion.b>
                        {t("ofYour")}{" "}
                        <motion.b className="transition duration-500">
                            <b className="text-black dark:text-white hover:text-cyan-500 dark:hover:text-cyan-300">
                                {t("hand")}
                            </b>
                        </motion.b>
                        .
                    </h2>
                    {/* <button className="text-black bg-cyan-400 hover:bg-cyan-500 transition duration-300">
                            ¿QUÉ HACEMOS?
                        </button> */}
                </motion.div>
                <motion.div variants={variants}>
                    <motion.div className="box w-[98%] md:w-11/12 m-auto glass md:p-10 p-5 resp:text-justify mt-5">
                        <h2 className="text-xl minimum:text-[2rem] tiny:text-3xl sm:text-4xl md:text-5xl resp:text-center">
                            {t("aboutUs")}
                        </h2>
                        <p className="my-10">{t("whoWeAre")}</p>
                        <p>{t("description")}</p>
                        <br></br>
                        <p>
                            {t("message1")}{" "}
                            <Link
                                to="/signup"
                                className="underline text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-500">
                                {t("message2")}
                            </Link>
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};
