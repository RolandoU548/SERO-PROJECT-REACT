import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Darkmode } from "./components/Darkmode.jsx";
import { LanguageButton } from "./components/LanguageButton.jsx";
import { BackArrow } from "./components/BackArrow.jsx";

import { App } from "./views/app.jsx";
import { LogIn } from "./views/login.jsx";
import { SignUp } from "./views/signup.jsx";
import { NotFound } from "./views/notfound.jsx";

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
                    <Route
                        path="/"
                        element={
                            <>
                                <App />
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        transition="fade"
                        element={
                            <>
                                <BackArrow
                                    to="/"
                                    className="absolute top-2 left-2 md:hidden"
                                />
                                <LanguageButton className="absolute top-3 left-16" />
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
                                <BackArrow
                                    to="/"
                                    className="absolute top-2 left-2 md:hidden"
                                />
                                <LanguageButton className="absolute top-3 left-16" />
                                <Darkmode className="text-[10%] absolute top-2 right-2" />
                                <SignUp />
                            </>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <>
                                <LanguageButton className="absolute top-7 left-10" />
                                <Darkmode className="text-[10%] absolute top-2 right-2" />
                                <NotFound />
                            </>
                        }
                    />
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default injectContext(Layout);
