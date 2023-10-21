import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Darkmode } from "./components/Darkmode.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { BackgroundVideo } from "./components/BackgroundVideo.jsx";
import { LanguageButton } from "./components/LanguageButton.jsx";
import { BackArrow } from "./components/BackArrow.jsx";

import { App } from "./views/app.jsx";
import { Database } from "./views/database.jsx";
import { Form } from "./views/form.jsx";
import { PrivateHome } from "./views/privateHome.jsx";
import { Contact } from "./views/contact.jsx";
import { LoginSignupCard } from "./views/login-signup.jsx";
import { PrivateNavbar } from "./components/PrivateNavbar.jsx";
import { Dashboard } from "./views/dashboard.jsx";
import { Clients } from "./views/clients.jsx";
import { Reports } from "./views/reports.jsx";
import { Payments } from "./views/payments.jsx";
import { Settings } from "./views/settings.jsx";
import { SebastianLopez } from "./views/sebastianlopez.jsx";
import { SebastianCastroRajbe } from "./views/sebastiancastrorajbe.jsx";
import { RobertoVargas } from "./views/robertovargas.jsx";
import { RolandoUzcategui } from "./views/rolandouzcategui.jsx";

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
                        element={<LoginSignupCard flip={true} />}
                    />
                    <Route
                        path="/signup"
                        transition="fade"
                        element={<LoginSignupCard flip={false} />}
                    />
                    <Route
                        path="/database"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <Database />
                            </>
                        }
                    />
                    <Route
                        path="/form"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <Form />
                            </>
                        }
                    />
                    <Route
                        path="/private"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <PrivateHome />
                            </>
                        }
                    />
                    <Route
                        path="/dashboard"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <Dashboard />
                            </>
                        }
                    />
                    <Route
                        path="/clients"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <Clients />
                            </>
                        }
                    />
                    <Route
                        path="/reports"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <Reports />
                            </>
                        }
                    />
                    <Route
                        path="/payments"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <Payments />
                            </>
                        }
                    />
                    <Route
                        path="/settings"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <Settings />
                            </>
                        }
                    />
                    <Route
                        path="contact/SebastianLopez"
                        transition="fade"
                        element={
                            <>
                                <BackgroundVideo />
                                <Navbar />
                                <SebastianLopez />
                            </>
                        }
                    />
                    <Route
                        path="contact/SebastianCastroRajbe"
                        transition="fade"
                        element={
                            <>
                                <BackgroundVideo />
                                <Navbar />
                                <SebastianCastroRajbe />
                            </>
                        }
                    />
                    <Route
                        path="contact/RobertoVargas"
                        transition="fade"
                        element={
                            <>
                                <BackgroundVideo />
                                <Navbar />
                                <RobertoVargas />
                            </>
                        }
                    />
                    <Route
                        path="contact/RolandoUzcategui"
                        transition="fade"
                        element={
                            <>
                                <BackgroundVideo />
                                <Navbar />
                                <RolandoUzcategui />
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
