import React from "react";
import "../../../css/service.css";
import "../../../css/glass.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const variants = {
    initial: {
        x: -500,
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
            <div className="h-64"></div>
            <motion.div
                className="services"
                variants={variants}
                initial="initial"
                whileInView="animate">
                <motion.div className="textContainer" variants={variants}>
                    <p>
                        Solucionamos todos
                        <br /> sus problemas
                    </p>
                    <hr />
                </motion.div>
                <motion.div className="titleContainer" variants={variants}>
                    <div className="title">
                        <h2>
                            <motion.b
                                className="transition duration-500"
                                whileHover={{ color: "cyan" }}>
                                <b>Sencillez</b>
                            </motion.b>{" "}
                            al
                        </h2>
                    </div>
                    <div className="title">
                        <h2>
                            Tacto de su{" "}
                            <motion.b
                                className="transition duration-500"
                                whileHover={{ color: "cyan" }}>
                                <b>Mano</b>
                            </motion.b>
                            .
                        </h2>
                        {/* <button className="text-black bg-cyan-400 hover:bg-cyan-500 transition duration-300">
                            ¿QUÉ HACEMOS?
                        </button> */}
                    </div>
                </motion.div>
                <motion.div className="listContainer flex flex-col" variants={variants}>
                    <motion.div className="box w-[80rem] glass">
                        <h2 className="text-5xl">{t("aboutUs")}</h2>
                        <p className="my-10">{t("whoWeAre")}</p>
                        <p className="">{t("description")}</p>
                        <br></br>
                        {/* <h2 className="text-5xl mt-5">
                            {t("services")}
                        </h2>
                        <p className="my-10">{t("description1")}</p>
                        <p className="">{t("description2")}</p>
                        <br></br>
                        <ul>
                            <li>{t("list1")}</li>
                            <li>{t("list2")}</li>
                            <li>{t("list3")}</li>
                            <li>{t("list4")}</li>
                            <li>{t("list5")}</li>
                            <li>{t("list6")}</li>
                            <li>{t("list7")}</li>
                            <li>{t("list8")}</li>
                        </ul> */}
                        <p className="mt-10">
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
