import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop.jsx";
import { Darkmode } from "./component/Darkmode.jsx";

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
    console.log(basename);
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
                                <Darkmode className="text-[10%] absolute top-2 right-2" />
                                <SignUp />
                            </>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <h1 className="dark:text-white">Not found!</h1>
                        }
                    />
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default injectContext(Layout);
