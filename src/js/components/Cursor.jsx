import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../css/cursor.css";

export const Cursor = () => {
    // Efecto de click
    function clickEffect(e) {
        const d = document.createElement("div");
        d.className = "clickEffect";
        d.style.top = e.clientY + "px";
        d.style.left = e.clientX + "px";
        document.body.appendChild(d);
        d.addEventListener("animationend", function () {
            d.parentElement.removeChild(d);
        });
    }
    document.addEventListener("click", clickEffect);

    // Cursor circular
    const cursor = document.querySelector(".c-cursor__inner");

    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
        const x = e.clientX;
        const y = e.clientY;

        cursor.style.left = `${x - 12}px`;
        cursor.style.top = `${y - 8}px`;
    }

    const links = Array.from(document.querySelectorAll("a"));

    links.forEach(link => {
        link.addEventListener("mouseover", (e) => {
            const x = e.clientX;
            const y = e.clientY;
            cursor.classList.add("plus");
            cursor.style.left.add = `${x - 12}px`;
            cursor.style.top.add = `${y - 8}px`;
        });
        link.addEventListener("mouseleave", (e) => {
            const x = e.clientX;
            const y = e.clientY;
            cursor.classList.remove("plus");
            cursor.style.left.remove = `${x - 12}px`;
            cursor.style.top.remove = `${y - 8}px`;
        });
    });

    return (
        <>
            <div className="js-cursor">
                <div className="c-cursor__inner c-cursor__inner--circle js-cursor-inner">
                    <div className="c-cursor__side c-cursor__side--left js-cursor-right"></div>
                    <div className="c-cursor__side c-cursor__side--right js-cursor-left"></div>
                </div>
            </div>
        </>
    );
};
