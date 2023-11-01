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
};
