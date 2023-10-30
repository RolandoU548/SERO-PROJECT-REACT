import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../css/cursor.css";

export const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = e => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <>
            <div className="js-cursor">
                <div className="c-cursor__inner c-cursor__inner--circle js-cursor-inner">
                    <div className="c-cursor__side c-cursor__side--left js-cursor-right"></div>
                    <div className="c-cursor__side c-cursor__side--right js-cursor-left"></div>
                </div>
            </div>
            <motion.div
                className="cursor"
                animate={{ x: position.x, y: position.y }}></motion.div>
        </>
    );
};
