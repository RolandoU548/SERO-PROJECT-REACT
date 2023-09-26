import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Darkmode } from "./components/Darkmode.jsx";
import { BackArrow } from "./components/BackArrow.jsx";

import { App } from "./views/app.jsx";
import { LogIn } from "./views/login.jsx";
import { SignUp } from "./views/signup.jsx";

// import { devCard } from "./views/devcard.jsx";

import injectContext from "./store/appContext.jsx";

const Layout = () => {
    // the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    // const basename = process.env.BASENAME || "";
    const basename = import.meta.env.VITE_BASENAME || "";
    return (
        <BrowserRouter basename={basename}>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route
                        path="/login"
                        transition="fade"
                        element={
                            <>
                                <BackArrow className="absolute top-2 left-2 md:hidden" />
                                <Darkmode className="text-[10%] absolute top-2 right-2" />
                                <LogIn />
                            </>
                        }
                    />
                    <Route
                        path="/signup"
                        transition="fade"
                        element={
                            <>
                                <BackArrow className="absolute top-2 left-2 md:hidden" />
                                <Darkmode className="text-[10%] absolute top-2 right-2" />
                                <SignUp />
                            </>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <>
                                <h1 className="dark:text-white text-center text-4xl mt-5">
                                    Not found!
                                </h1>
                                <Link
                                    to="/"
                                    className="block m-auto text-3xl bg-gray-300 w-40 my-5 p-2 pb-3 text-center font-medium rounded-full dark:text-white dark:bg-blue-500 ">
                                    Go Home
                                </Link>
                            </>
                        }
                    />
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default injectContext(Layout);
