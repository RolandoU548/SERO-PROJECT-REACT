import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { BackgroundVideo } from "./components/BackgroundVideo.jsx";
import { LanguageButton } from "./components/LanguageButton.jsx";

import { App } from "./views/app.jsx";
import { PrivateHome } from "./views/privateHome.jsx";
import { Contact } from "./views/contact.jsx";
import { LoginSignupCard } from "./views/login-signup.jsx";
import { PrivateNavbar } from "./components/PrivateNavbar.jsx";
import { SpecificContact } from "./views/specificContact.jsx";
import { Form } from "./views/dashboard/form.jsx";
import { Database } from "./views/dashboard/database.jsx";
import { Dashboard } from "./views/dashboard/dashboard.jsx";
import { Clients } from "./views/dashboard/clients.jsx";
import { Reports } from "./views/dashboard/reports.jsx";
import { Payments } from "./views/dashboard/payments.jsx";
import { Settings } from "./views/dashboard/settings.jsx";
import { Profile } from "./views/dashboard/profile.jsx";
import { UserProfile } from "./views/dashboard/userprofile.jsx";
import { CreateClient } from "./views/dashboard/createclient.jsx";
import { ClientCard } from "./components/dashclients/clientinside.jsx";

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
                        path="/profile"
                        element={
                            <>
                                <PrivateNavbar />
                                <Profile />
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
                        path="/userprofile"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <UserProfile />
                            </>
                        }
                    />
                    <Route
                        path="/createclient"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <CreateClient />
                            </>
                        }
                    />
                    <Route
                        path="/clientinside"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <ClientCard />
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
                        path="contact/:contact"
                        transition="fade"
                        element={
                            <>
                                <BackgroundVideo />
                                <SpecificContact />
                            </>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default injectContext(Layout);
