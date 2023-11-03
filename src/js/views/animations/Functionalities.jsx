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

const items = [
    {
        id: 1,
        title: "Base de Datos",
        img: "https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FDataBaseCardBGCrop.jpg?alt=media&token=2e184e84-c061-4204-8a57-0ed23ad73790&_gl=1*17loil3*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MDAwMS42MC4wLjA.",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit, impedit recusandae tempora consectetur ducimus perferendis maxime provident obcaecati quisquam, maiores voluptates dolor sequi eos ullam repudiandae officiis vero dignissimos."
    },
    {
        id: 2,
        title: "Formularios",
        img: "https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FFormCardBG.jpg?alt=media&token=f42d2fea-fe65-411a-a6fa-6140187eaea8&_gl=1*1eaq0ks*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MDUzNy41NS4wLjA",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit, impedit recusandae tempora consectetur ducimus perferendis maxime provident obcaecati quisquam, maiores voluptates dolor sequi eos ullam repudiandae officiis vero dignissimos."
    },
    {
        id: 3,
        title: "Clientes",
        img: "https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FClientsCardBG.jpg?alt=media&token=f601f515-64e0-4fe4-a297-1b999876d15a&_gl=1*1odl6qd*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MDkwNC41My4wLjA",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit, impedit recusandae tempora consectetur ducimus perferendis maxime provident obcaecati quisquam, maiores voluptates dolor sequi eos ullam repudiandae officiis vero dignissimos."
    },
    {
        id: 4,
        title: "Panel de Control",
        img: "https://images.pexels.com/photos/16933826/pexels-photo-16933826/free-photo-of-black-and-white-shot-of-a-vintage-car-on-a-tropical-town-street.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit, impedit recusandae tempora consectetur ducimus perferendis maxime provident obcaecati quisquam, maiores voluptates dolor sequi eos ullam repudiandae officiis vero dignissimos."
    }
];

const Single = ({ item }) => {
    const ref = useRef();
    const navigate = useNavigate();

    const { scrollYProgress } = useScroll({
        target: ref
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

    return (
        <>
            <div className="container">
                <div className="wrapper">
                    {/* <div className="w-[30rem] h-96 my-40 ml-24" ref={ref}>
                        <img src={item.img} className="" alt="" />
                    </div> */}
                    <div
                        className="my-40 ml-24 cursor-pointer ease-out duration-300 hover:scale-105 w-96 bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fapp%2FClientsCardBG.jpg?alt=media&token=f601f515-64e0-4fe4-a297-1b999876d15a&_gl=1*1odl6qd*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MDkwNC41My4wLjA.')] bg-center bg-cover rounded-2xl h-[28rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white group relative"
                        onClick={() => {
                            navigate("/signup");
                        }}>
                        <div className="bg-black absolute w-full h-[28rem] rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
                    </div>
                    <motion.div className="textContainer">
                        <div className="mt-40">
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <button>Detalles</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export const Functionalities = () => {
    const ref = useRef();

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
                <div className="progress">
                    <div className="h-12"></div>
                    <h2>Funcionalidades</h2>
                    <motion.div
                        style={{ scaleX }}
                        className="progressBar"></motion.div>
                </div>
                {items.map(item => (
                    <Single item={item} key={item.id} />
                ))}
            </div>
        </>
    );
};
