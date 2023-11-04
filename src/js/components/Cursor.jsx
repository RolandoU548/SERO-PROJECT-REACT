import React, { useEffect } from "react";
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
    useEffect(() => {
        document.addEventListener("click", clickEffect);
        return () => {
            document.removeEventListener("click", clickEffect);
        };
    }, []);
};
