import React, { useRef } from "react";
import "../../../css/functionalities.css";
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

// const items = [

//     {
//         id: 1,
//         title: "Base de Datos",
//         img: "https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDatabaseCardBG.jpg?alt=media&token=1f987d91-e459-4705-b95e-7edb47bfb442",
//         desc: "epale"
//     },
//     {
//         id: 2,
//         title: "Formularios",
//         img: "https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FFormCardBG.jpg?alt=media&token=f42d2fea-fe65-411a-a6fa-6140187eaea8&_gl=1*1eaq0ks*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MDUzNy41NS4wLjA",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit, impedit recusandae tempora consectetur ducimus perferendis maxime provident obcaecati quisquam, maiores voluptates dolor sequi eos ullam repudiandae officiis vero dignissimos."
//     },
//     {
//         id: 3,
//         title: "Clientes",
//         img: "https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FClientsCardBG.jpg?alt=media&token=f601f515-64e0-4fe4-a297-1b999876d15a&_gl=1*1odl6qd*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MDkwNC41My4wLjA",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit, impedit recusandae tempora consectetur ducimus perferendis maxime provident obcaecati quisquam, maiores voluptates dolor sequi eos ullam repudiandae officiis vero dignissimos."
//     },
//     {
//         id: 4,
//         title: "Panel de Control",
//         img: "https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDashboardCardBG.jpg?alt=media&token=db56f99f-811d-4ba3-9a0c-57c0fffb6703&_gl=1*15ykx8a*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTg1NS4zMy4wLjA",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit, impedit recusandae tempora consectetur ducimus perferendis maxime provident obcaecati quisquam, maiores voluptates dolor sequi eos ullam repudiandae officiis vero dignissimos."
//     }
// ];

// const Single = ({ item }) => {
//     const ref = useRef();

//     const { scrollYProgress } = useScroll({
//         target: ref
//         // offset: ["start start", "end start"]
//     });

//     const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

//     return (
//         <>
//             <div className="container">
//                 <div className="wrapper">
//                     <div
//                         className="my-40 ml-24 cursor-pointer ease-out duration-300 hover:scale-105 w-96 rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group relative"
//                         style={{
//                             backgroundImage: "https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDatabaseCardBG.jpg?alt=media&token=1f987d91-e459-4705-b95e-7edb47bfb442",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center'
//                         }}
//                         onClick={() => {
//                             navigate("/signup");
//                         }}>
//                         <div className="bg-black absolute w-full h-[28rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
//                     </div>
//                     <motion.div className="textContainer">
//                         <div>
//                             <h2>{t("databaseCard")}</h2>
//                             <p>{t("database1")}</p>
//                             <button>Detalles</button>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </>
//     );
// };

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
            <div className="portfolio" ref={ref}>
                <div className="progress z-10">
                    <h2 className="m-12">{t("services")}</h2>
                    <motion.div
                        style={{ scaleX }}
                        className="progressBar"></motion.div>
                </div>

                {/* Base de Datos */}
                <div className="container m-auto">
                    <div className="wrapper">
                        <div
                            className="my-40 cursor-pointer ease-out duration-300 hover:scale-105 w-96 rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group relative"
                            style={{
                                backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDatabaseCardBG.jpg?alt=media&token=1f987d91-e459-4705-b95e-7edb47bfb442')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                            onClick={() => {
                                navigate("/signup");
                            }}>
                            <div className="bg-black absolute w-full h-[28rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                        </div>
                        <motion.div className="textContainer">
                            <div className="mb-56">
                                <h2>{t("databaseCard")}</h2>
                                <p>{t("database1")}</p>
                                <button className="text-black text-xl mt-10">
                                    {t("Try it")}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Formularios */}
                <div className="container m-auto">
                    <div className="wrapper">
                        <div
                            className="my-40 ml-24 cursor-pointer ease-out duration-300 hover:scale-105 w-96 rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group relative"
                            style={{
                                backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FFormCardBG.jpg?alt=media&token=f42d2fea-fe65-411a-a6fa-6140187eaea8')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                            onClick={() => {
                                navigate("/signup");
                            }}>
                            <div className="bg-black absolute w-full h-[28rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                        </div>
                        <motion.div className="textContainer">
                            <div className="mb-56">
                                <h2>{t("formCard")}</h2>
                                <p>{t("form1")}</p>
                                <button className="text-black text-xl mt-10">
                                    {t("Try it")}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Clientes */}
                <div className="container m-auto">
                    <div className="wrapper">
                        <div
                            className="my-40 ml-24 cursor-pointer ease-out duration-300 hover:scale-105 w-96 rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group relative"
                            style={{
                                backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FClientsCardBG.jpg?alt=media&token=f601f515-64e0-4fe4-a297-1b999876d15a')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                            onClick={() => {
                                navigate("/signup");
                            }}>
                            <div className="bg-black absolute w-96 h-[28rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                        </div>
                        <motion.div className="textContainer">
                            <div className="mb-56">
                                <h2>{t("clientsCard")}</h2>
                                <p>{t("clients1")}</p>
                                <button className="text-black text-xl mt-10">
                                    {t("Try it")}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Panel de Control */}
                <div className="container m-auto">
                    <div className="wrapper">
                        <div
                            className="mt-40 ml-24 cursor-pointer ease-out duration-300 hover:scale-105 w-96 rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group relative"
                            style={{
                                backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDashboardCardBG.jpg?alt=media&token=db56f99f-811d-4ba3-9a0c-57c0fffb6703')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                            onClick={() => {
                                navigate("/signup");
                            }}>
                            <div className="bg-black absolute w-96 h-[28rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                        </div>
                        <motion.div className="textContainer">
                            <div className="mb-56">
                                <h2>{t("dashboardCard")}</h2>
                                <p>{t("dashboard1")}</p>
                                <button className="text-black text-xl mt-10">
                                    {t("Try it")}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};
