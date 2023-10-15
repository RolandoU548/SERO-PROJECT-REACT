import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Darkmode } from "./components/Darkmode.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { BackgroundVideo } from "./components/BackgroundVideo.jsx";
import { LanguageButton } from "./components/LanguageButton.jsx";
import { BackArrow } from "./components/BackArrow.jsx";

import { App } from "./views/app.jsx";
import { LogIn } from "./views/login.jsx";
import { SignUp } from "./views/signup.jsx";
import { Database } from "./views/database.jsx";
import { Form } from "./views/form.jsx";
import { Private } from "./views/private.jsx";
import { Services } from "./views/services.jsx";
import { Contact } from "./views/contact.jsx";

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
                                <BackgroundVideo />
                                <Navbar />
                                <App />
                            </>
                        }
                    />
                    <Route
                        path="/services"
                        element={
                            <>
                                <BackgroundVideo />
                                <Navbar />
                                <Services />
                            </>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <>
                                <BackgroundVideo />
                                <Navbar />
                                <Contact />
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
                                <SignUp />
                            </>
                        }
                    />
                    <Route
                        path="/database"
                        transition="fade"
                        element={
                            <>
                                <BackArrow
                                    to="/"
                                    className="absolute top-2 left-2 md:hidden"
                                />
                                <Database />
                            </>
                        }
                    />
                    <Route
                        path="/form"
                        transition="fade"
                        element={
                            <>
                                <BackArrow
                                    to="/"
                                    className="absolute top-2 left-2 md:hidden"
                                />
                                <Form />
                            </>
                        }
                    />
                    <Route
                        path="/private"
                        transition="fade"
                        element={
                            <>
                                <BackgroundVideo />
                                <Navbar />
                                <Private />
                            </>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <>
                                <LanguageButton className="absolute top-7 left-10 w-6 h-4" />
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
