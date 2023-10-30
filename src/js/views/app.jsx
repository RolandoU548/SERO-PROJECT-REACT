import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";
import "../../css/appAnimation.css";
import { motion } from "framer-motion";

export const App = () => {
    const [t] = useTranslation("app");
    const navigate = useNavigate();
    const variants = {
        initial: {
            x: -500,
            y: 100,
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
    if (localStorage.getItem("token")) {
        navigate("/private");
    }
    return (
        <div className="font-serif dark:text-gray-200 text-black">
            <section>
                <h2 className="dark:mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-[200] text-center mt-72 text-black dark:text-white">
                    {t("title")}
                </h2>
                <h2 className="dark:mix-blend-difference lg:px-6 mt-8 text-lg minimum:text-xl tiny:text-2xl sm:text-3xl md:text-[45px] font-black z-[200] text-center text-black dark:text-white">
                    {t("subtitle")}
                </h2>
                <Link
                    className="w-[250px] hover:bg-[#00f2ff80] transition duration-300 m-auto block mt-16 p-4 text-3xl text-center border dark:border-white border-black rounded-full"
                    to="/signup">
                    {t("getStarted")}
                </Link>
            </section>
            <section>
                <motion.div
                    className="appAnimation mt-40"
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
                            <button className="text-black bg-cyan-300 hover:bg-cyan-400 transition duration-300">
                                QUE HACEMOS?
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
                            <p>
                                Somos un grupo de desarrolladores Full-Stack que
                                creó SERØ para solventar problemas de
                                organización de base de datos. Esta Web App se
                                especializa en automatizar todo aquello
                                relacionado a la información importante que
                                contenga una empresa, una firma de abogados, o
                                cualquier otra entidad que necesite simplicidad
                                en su sistema. SERØ está diseñado para ser fácil
                                de usar, incluso para usuarios sin conocimientos
                                técnicos. La aplicación cuenta con una interfaz
                                intuitiva que permite crear y gestionar bases de
                                datos sin esfuerzo.
                            </p>
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
                                <li>Organizar sus datos.</li>
                                <li>Crear una base de datos personalizada.</li>
                                <li>
                                    Crear formularios para rellenar su base de
                                    datos.
                                </li>
                                <li>Ver un resumen de sus datos.</li>
                                <li>Tener un listado de clientes.</li>
                                <li>
                                    Tener control sobre un historial de reportes
                                </li>
                                <li>Administrar sus pagos.</li>
                                <li>Pertenecer a una Organización.</li>
                            </ul>
                            <button>Ir</button>
                        </motion.div>
                        {/* <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quas ab provident, omnis voluptatem autem error distinctio odio minus sequi voluptatibus blanditiis corrupti assumenda ducimus optio vitae unde similique.</p>
                <button>Ir</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quas ab provident, omnis voluptatem autem error distinctio odio minus sequi voluptatibus blanditiis corrupti assumenda ducimus optio vitae unde similique.</p>
                <button>Ir</button>
            </motion.div> */}
                    </motion.div>
                </motion.div>
            </section>
            <section>
                <div className="glass w-4/5 p-12 mt-40 mb-10 m-auto text-2xl">
                    <h2 className="text-5xl">{t("aboutUs")}</h2>
                    <p className="my-10">{t("whoWeAre")}</p>
                    <p className="mt-10">{t("description")}</p>
                </div>
            </section>
            <h2 className="mix-blend-difference mt-28 lg:px-6 text-lg minimum:text-[0.5rem] tiny:text-3xl sm:text-3xl md:text-6xl font-black z-10 flex justify-end text-white mr-20">
                {t("services")}
            </h2>
            <div className="flex justify-end">
                <div className="glass w-9/12 p-12 mt-10 mb-10 mr-20 text-2xl ">
                    <p>{t("description1")}</p>
                    <p className="mt-10">{t("description2")}</p>
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
                    </ul>
                    <p className="mt-10">
                        {t("message1")}{" "}
                        <Link
                            to="/signup"
                            className="underline text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-500">
                            {t("message2")}
                        </Link>
                    </p>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-20 mt-20 mb-16 flex justify-between">
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDataBaseCardBGCrop.jpg?alt=media&token=2e184e84-c061-4204-8a57-0ed23ad73790&_gl=1*17loil3*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MDAwMS42MC4wLjA.')] bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group relative"
                    onClick={() => {
                        navigate("/signup");
                    }}>
                    <div className="bg-black absolute w-full h-[28rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10 text-center">{t("databaseCard")}</h2>
                </div>
                <div className="w-8/12 p-10 text-2xl items-center">
                    <p>{t("database1")}</p>
                    <p className="mt-10">{t("database2")}</p>
                    <p className="mt-10">{t("database3")}</p>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-64 mt-20 mb-16 flex justify-end">
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FFormCardBG.jpg?alt=media&token=f42d2fea-fe65-411a-a6fa-6140187eaea8&_gl=1*1eaq0ks*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MDUzNy41NS4wLjA.')] bg-center bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group relative"
                    onClick={() => {
                        navigate("/signup");
                    }}>
                    <div className="bg-black absolute w-full h-[28rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10 text-center">{t("formCard")}</h2>
                </div>
                <div className="w-8/12 p-10 text-2xl items-center">
                    <p>{t("form1")}</p>
                    <p className="mt-10">{t("form2")}</p>
                    <p className="mt-10">{t("form3")}</p>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-20 mt-20 mb-16 flex justify-between">
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FClientsCardBG.jpg?alt=media&token=f601f515-64e0-4fe4-a297-1b999876d15a&_gl=1*1odl6qd*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MDkwNC41My4wLjA.')] bg-center bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group relative"
                    onClick={() => {
                        navigate("/signup");
                    }}>
                    <div className="bg-black absolute w-full h-[28rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10 text-center">Clients</h2>
                </div>
                <div className="w-8/12 p-10 text-2xl items-center">
                    <p>{t("clients1")}</p>
                    <p className="mt-10">{t("clients2")}</p>
                    <p className="mt-10">{t("clients3")}</p>
                </div>
            </div>
            <div className="glass rounded-2xl w-9/12 ml-64 mt-20 mb-16 flex justify-end">
                <div
                    className="cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDashboardCardBG.jpg?alt=media&token=db56f99f-811d-4ba3-9a0c-57c0fffb6703&_gl=1*15ykx8a*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTg1NS4zMy4wLjA.')] bg-center bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group relative"
                    onClick={() => {
                        navigate("/signup");
                    }}>
                    <div className="bg-black absolute w-full h-[28rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    <h2 className="z-10 text-center">{t("dashboardCard")}</h2>
                </div>
                <div className="w-8/12 p-10 text-2xl items-center">
                    <p>{t("dashboard1")}</p>
                    <p className="mt-10">{t("dashboard2")}</p>
                    <p className="mt-10">{t("dashboard3")}</p>
                </div>
            </div>
        </div>
    );
};
