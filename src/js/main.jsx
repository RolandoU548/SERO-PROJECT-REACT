import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout.jsx";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./i18next-config.js";
import { AppLoader } from "./views/apploader.jsx";
import "../css/roundedMouse.css";

function App() {
    const [showLoader, setShowLoader] = useState(true);
    // const body = document.body;

    // const MathUtils = {
    //     lineEq: (y2, y1, x2, x1, currentVal) => {
    //         // y = mx + b
    //         const m = (y2 - y1) / (x2 - x1);
    //         const b = y1 - m * x1;
    //         return m * currentVal + b;
    //     },
    //     lerp: (a, b, n) => (1 - n) * a + n * b,
    //     getRandomFloat: (min, max) =>
    //         (Math.random() * (max - min) + min).toFixed(2)
    // };

    // const getMousePos = e => {
    //     let posx = 0;
    //     let posy = 0;
    //     if (!e) e = window.event;
    //     if (e.pageX || e.pageY) {
    //         posx = e.pageX;
    //         posy = e.pageY;
    //     } else if (e.clientX || e.clientY) {
    //         posx =
    //             e.clientX +
    //             body.scrollLeft +
    //             document.documentElement.scrollLeft;
    //         posy =
    //             e.clientY + body.scrollTop + document.documentElement.scrollTop;
    //     }
    //     return { x: posx, y: posy };
    // };

    // let winsize;
    // const calcWinsize = () =>
    //     (winsize = { width: window.innerWidth, height: window.innerHeight });
    // calcWinsize();
    // window.addEventListener("resize", calcWinsize);

    // let mousepos = { x: winsize.width / 2, y: winsize.height / 2 };
    // window.addEventListener("mousemove", ev => (mousepos = getMousePos(ev)));

    // // Custom cursor
    // class Cursor {
    //     constructor(el) {
    //         this.DOM = { el: el };
    //         this.DOM.circle = this.DOM.el.querySelector(".js-cursor-inner");
    //         this.DOM.arrows = {
    //             right: this.DOM.el.querySelector(".js-cursor-right"),
    //             left: this.DOM.el.querySelector(".js-cursor-left")
    //         };
    //         this.bounds = this.DOM.circle.getBoundingClientRect();
    //         this.lastMousePos = { x: 0, y: 0 };
    //         this.scale = 1;
    //         this.lastScale = 1;
    //         requestAnimationFrame(() => this.render());
    //     }

    //     render() {
    //         this.lastMousePos.x = MathUtils.lerp(
    //             this.lastMousePos.x,
    //             mousepos.x - this.bounds.width / 2,
    //             0.2
    //         );
    //         this.lastMousePos.y = MathUtils.lerp(
    //             this.lastMousePos.y,
    //             mousepos.y - this.bounds.height / 2,
    //             0.2
    //         );
    //         this.lastScale = MathUtils.lerp(this.lastScale, this.scale, 0.15);
    //         this.DOM.circle.style.transform = `translateX(${this.lastMousePos.x}px) translateY(${this.lastMousePos.y}px) scale(${this.lastScale})`;
    //         requestAnimationFrame(() => this.render());
    //     }

    //     enter() {
    //         this.scale = 1.9;
    //     }

    //     leave() {
    //         this.scale = 1;
    //     }

    //     click() {
    //         this.lastScale = 0.4;
    //     }

    //     // showArrows() {
    //     //     TweenMax.to(Object.values(this.DOM.arrows), 1, {
    //     //         ease: Expo.easeOut,
    //     //         startAt: { x: i => (i ? 10 : -10) },
    //     //         opacity: 1,
    //     //         x: 0
    //     //     });
    //     // }

    //     // hideArrows() {
    //     //     TweenMax.to(Object.values(this.DOM.arrows), 1, {
    //     //         ease: Expo.easeOut,
    //     //         x: i => (i ? 10 : -10),
    //     //         opacity: 0
    //     //     });
    //     // }
    // }

    // Custom mouse cursor
    // const cursor = new Cursor(document.querySelector(".js-cursor"));

    // // Activate the enter/leave/click methods of the custom cursor when hovering in/out on every <a> (and the close content ctrl)
    // const links = document.querySelectorAll(".js-link");

    // [...links].forEach(link => {
    //     link.addEventListener("mouseenter", () => cursor.enter());
    //     link.addEventListener("mouseleave", () => cursor.leave());
    // });

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <React.StrictMode>
            <I18nextProvider i18n={i18next}>
                <div className="js-cursor">
                    <div className="c-cursor__inner c-cursor__inner--circle js-cursor-inner">
                        <div className="c-cursor__side c-cursor__side--left js-cursor-right"></div>
                        <div className="c-cursor__side c-cursor__side--right js-cursor-left"></div>
                    </div>
                </div>
                {showLoader ? <AppLoader /> : <Layout />}
                {/* <Layout /> */}
            </I18nextProvider>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
