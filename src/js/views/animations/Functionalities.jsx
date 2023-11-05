import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Funcionality } from "../../components/appFuncionalities/Funcionality";

export const Functionalities = () => {
    const ref = useRef();
    const [t] = useTranslation("app");

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    return (
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
            <Funcionality
                title={t("databaseCard")}
                paragraph={t("database1")}
                image="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDatabaseCardBG.jpg?alt=media&token=1f987d91-e459-4705-b95e-7edb47bfb442"
            />
            {/* Formularios */}
            <Funcionality
                title={t("formCard")}
                paragraph={t("form1")}
                image="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FFormCardBG.jpg?alt=media&token=f42d2fea-fe65-411a-a6fa-6140187eaea8"
            />
            {/* Clientes */}
            <Funcionality
                title={t("clientsCard")}
                paragraph={t("clients1")}
                image="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FClientsCardBG.jpg?alt=media&token=f601f515-64e0-4fe4-a297-1b999876d15a"
            />
            {/* Panel de Control */}
            <Funcionality
                title={t("dashboardCard")}
                paragraph={t("dashboard1")}
                image="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDashboardCardBG.jpg?alt=media&token=db56f99f-811d-4ba3-9a0c-57c0fffb6703"
            />
        </div>
    );
};
