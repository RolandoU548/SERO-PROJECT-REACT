import React from "react";
import "../../../css/service.css";
import { motion } from "framer-motion";

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
    return (
        <>
            <div className="h-24"></div>
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
                        <h1>
                            <motion.b
                                className="transition duration-500"
                                whileHover={{ color: "cyan" }}>
                                <b>Sencillez</b>
                            </motion.b>{" "}
                            al
                        </h1>
                    </div>
                    <div className="title">
                        <h1>
                            Tacto de su{" "}
                            <motion.b
                                className="transition duration-500"
                                whileHover={{ color: "cyan" }}>
                                <b>Mano</b>
                            </motion.b>
                            .
                        </h1>
                        <button className="text-black bg-cyan-400 hover:bg-cyan-500 transition duration-300">
                            ¿QUÉ HACEMOS?
                        </button>
                    </div>
                </motion.div>
                <motion.div className="listContainer" variants={variants}>
                    <motion.div
                        className="box"
                        whileHover={{
                            background: "lightgray",
                            color: "black"
                        }}>
                        <h2>¿Quiénes somos?</h2>
                        <p>...</p>
                        <button>Ir</button>
                    </motion.div>
                    <motion.div
                        className="box"
                        whileHover={{
                            background: "lightgray",
                            color: "black"
                        }}>
                        <h2>Servicios</h2>
                        <ul>
                            <li>...</li>
                            <li>...</li>
                            <li>...</li>
                            <li>...</li>
                            <li>...</li>
                            <li>...</li>
                            <li>...</li>
                            <li>...</li>
                        </ul>
                        <button className="text-black">Ir</button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};
