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
        img: "https://images.pexels.com/photos/15509517/pexels-photo-15509517/free-photo-of-skyscraper-towering-over-crowd-on-street-in-downtown.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non fugit, impedit recusandae tempora consectetur ducimus perferendis maxime provident obcaecati quisquam, maiores voluptates dolor sequi eos ullam repudiandae officiis vero dignissimos."
    },
    {
        id: 3,
        title: "Clientes",
        img: "https://images.pexels.com/photos/16933826/pexels-photo-16933826/free-photo-of-black-and-white-shot-of-a-vintage-car-on-a-tropical-town-street.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
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

    const { scrollYProgress } = useScroll({
        target: ref
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>Detalles</button>
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
                    <h1>Servicios</h1>
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
