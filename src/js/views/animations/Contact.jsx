import React, { useRef, useContext } from "react";
import { Context } from "../../store/appContext.jsx";
import "../../../css/contact.css";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const variants = {
    initial: {
        y: 300,
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

export const Contact = () => {
    const { store } = useContext(Context);
    const ref = useRef();
    const [t] = useTranslation("app");

    const isInView = useInView(ref, { margin: "-100px" });
    return (
        <div className="dark:text-white">
            <motion.div
                ref={ref}
                className="h-full w-[90%] m-auto flex resp:flex-col lg:gap-16 md:gap-0 resp:gap-20 items-center justify-center mb-10"
                variants={variants}
                initial="initial"
                whileInView="animate">
                <motion.div
                    variants={variants}
                    className="flex flex-col gap-8 mb-auto md:w-[55%] lg:w-[45%] w-full] md:px-10">
                    <motion.h1
                        className="text-4xl minimum:text-[2.5rem] tiny:text-5xl sm:text-6xl resp:text-center"
                        variants={variants}>
                        {t("contactUs")}
                    </motion.h1>
                    <motion.div className="item" variants={variants}>
                        <h2 className="font-bold">{t("email")}</h2>
                        <span>sero@gmail.com</span>
                    </motion.div>
                    <motion.div className="item" variants={variants}>
                        <h2 className="font-bold">{t("address")}</h2>
                        <span>Venezuela, Panama, USA</span>
                    </motion.div>
                    <motion.div className="item" variants={variants}>
                        <h2 className="font-bold">{t("phoneNumber")}</h2>
                        <span>+58 4124020391</span>
                    </motion.div>
                </motion.div>
                <motion.div className="flex relative md:w-[40%] w-full">
                    <motion.div
                        className="absolute top-0 left-0 stroke-cyan-500 dark:stroke-cyan-300 -z-50 w-full h-full"
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }}
                        transition={{ delay: 3, duration: 1 }}>
                        <svg viewBox="0 0 24 24" className="w-full h-full">
                            <motion.path
                                strokeWidth={0.2}
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={isInView && { pathLength: 1 }}
                                transition={{ duration: 2.5 }}
                                d="M 15.5562 14.5477 L 15.1007 15.0272 C 15.1007 15.0272 14.0181 16.167 11.0631 13.0559 C 8.10812 9.94484 9.1907 8.80507 9.1907 8.80507 L 9.47752 8.50311 C 10.1841 7.75924 10.2507 6.56497 9.63424 5.6931 L 8.37326 3.90961 C 7.61028 2.8305 6.13596 2.68795 5.26145 3.60864 L 3.69185 5.26114 C 3.25823 5.71766 2.96765 6.30945 3.00289 6.96594 C 3.09304 8.64546 3.81071 12.259 7.81536 16.4752 C 12.0621 20.9462 16.0468 21.1239 17.6763 20.9631 C 18.1917 20.9122 18.6399 20.6343 19.0011 20.254 L 20.4217 18.7584 C 21.3806 17.7489 21.1102 16.0182 19.8833 15.312 L 17.9728 14.2123 C 17.1672 13.7486 16.1858 13.8848 15.5562 14.5477 Z"
                            />
                        </svg>
                    </motion.div>
                    <motion.form
                        className="flex flex-col md:w-full tiny:w-[80%] w-full m-auto gap-5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 4, duration: 1 }}
                        onSubmit={e => {
                            e.preventDefault();
                        }}>
                        <input
                            className={
                                "p-5 bg-transparent border border-black dark:border-white rounded input-" +
                                (store.theme === "dark" ? "dark" : "light")
                            }
                            type="text"
                            required
                            placeholder={t("nameAndLastname")}
                        />
                        <input
                            className={
                                "p-5 bg-transparent border border-black dark:border-white rounded input-" +
                                (store.theme === "dark" ? "dark" : "light")
                            }
                            type="email"
                            required
                            placeholder={t("email")}
                        />
                        <textarea
                            className={
                                "p-5 bg-transparent border border-black dark:border-white rounded input-" +
                                (store.theme === "dark" ? "dark" : "light")
                            }
                            rows={6}
                            required
                            placeholder={t("message")}
                        />
                        <button className="text-black bg-cyan-400 hover:bg-cyan-500 rounded-lg p-2">
                            {t("send")}
                        </button>
                    </motion.form>
                </motion.div>
            </motion.div>
        </div>
    );
};
