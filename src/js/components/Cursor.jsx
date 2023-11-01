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
    const innerCursor = document.querySelector(".c-cursor__inner");

    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
        const x = e.clientX;
        const y = e.clientY;

        innerCursor.style.left = `${x}px`;
        innerCursor.style.top = `${y}px`;
    }

    const links = Array.from(document.querySelectorAll("a"));

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            innerCursor.classList.add("plus");
        });
        link.addEventListener("mouseleave", () => {
            innerCursor.classList.remove("plus");
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
