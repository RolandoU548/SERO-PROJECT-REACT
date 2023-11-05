import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ScrollToTop } from "./components/ScrollToTop.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { BackgroundVideo } from "./components/BackgroundVideo.jsx";
import { BackgroundClientsVideo } from "./components/BackgroundClientsVideo.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { Cursor } from "./components/Cursor.jsx";

import { App } from "./views/app.jsx";
import { PrivateHome } from "./views/privateHome.jsx";
import { Admin } from "./views/dashboard/admin.jsx";
import { Founder } from "./views/founders.jsx";
import { LoginSignupCard } from "./views/login-signup.jsx";
import { PrivateNavbar } from "./components/PrivateNavbar.jsx";
import { SpecificFounder } from "./views/specificFounder.jsx";
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

import { NotFound } from "./views/notfound.jsx";

import injectContext from "./store/appContext.jsx";
import { ClientCard } from "./components/dashclients/clientcard.jsx";
import { StepPayment } from "./components/dashpayments/steppayment.jsx";
import PayPalButton from "./components/dashpayments/PayPalButton.jsx";

const Layout = () => {
    // the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    // const basename = process.env.BASENAME || "";
    const basename = import.meta.env.VITE_BASENAME || "";
    return (
        <BrowserRouter basename={basename}>
            <ScrollToTop />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Cursor />
                            <BackgroundVideo />
                            <Navbar />
                            <App />
                            <Cursor />
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
                    path="/founders"
                    element={
                        <>
                            <Cursor />
                            <BackgroundVideo />
                            <Navbar />
                            <Founder />
                        </>
                    }
                />
                <Route
                    path="founders/:founder"
                    transition="fade"
                    element={
                        <>
                            <Cursor />
                            <BackgroundVideo />
                            <SpecificFounder />
                        </>
                    }
                />

                <Route element={<ProtectedRoute />}>
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
                        path="/profile"
                        element={
                            <>
                                <PrivateNavbar />
                                <Profile />
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
                                <BackgroundClientsVideo />
                                <PrivateNavbar />
                                <Clients />
                            </>
                        }
                    />
                    <Route
                        path="/createclient"
                        transition="fade"
                        element={
                            <>
                                <BackgroundClientsVideo />
                                <PrivateNavbar />
                                <CreateClient />
                            </>
                        }
                    />
                    <Route
                        path="/clientcard/:id"
                        transition="fade"
                        element={
                            <>
                                <BackgroundClientsVideo />
                                <PrivateNavbar />
                                <ClientCard />
                            </>
                        }
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
                        path="/steppayment"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <StepPayment />
                                <PayPalButton />
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
                </Route>
                <Route
                    path="/admin"
                    transition="fade"
                    element={
                        <ProtectedRoute role={["admin"]}>
                            <PrivateNavbar />
                            <Admin />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default injectContext(Layout);
