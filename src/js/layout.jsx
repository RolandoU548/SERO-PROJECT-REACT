import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ScrollToTop } from "./components/ScrollToTop.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { BackgroundVideo } from "./components/BackgroundVideo.jsx";
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
import { Kanban } from "./views/dashboard/kanban";
import { Payments } from "./views/dashboard/payments.jsx";
import { Settings } from "./views/dashboard/settings.jsx";
import { Profile } from "./views/dashboard/profile.jsx";
import { UserProfile } from "./views/dashboard/userprofile.jsx";
import { CreateClient } from "./views/dashboard/createclient.jsx";
import { ClientForm } from "./views/dashboard/clientForm.jsx";
import { DatabaseForm } from "./views/dashboard/databaseForm.jsx";
import { InviteClientForm } from "./views/dashboard/inviteClientForm.jsx";
import { InviteDatabaseForm } from "./views/dashboard/inviteDatabaseForm.jsx";
import { FormSuccessful } from "./views/dashboard/formSuccessful.jsx";
import { FormExpired } from "./views/dashboard/formExpired.jsx";
import { CreateUser } from "./views/dashboard/createUser.jsx";
import { ContactMessages } from "./views/dashboard/contactMessages.jsx";
import { TryDatabase } from "./views/tryDatabase.jsx";
import { TryForms } from "./views/tryForms.jsx";
import { TryCreateClient } from "./views/tryCreateClient.jsx";
import { TryInviteClientForm } from "./views/tryInviteClientForm.jsx";
import { TryInviteDatabaseForm } from "./views/tryInviteDatabaseForm.jsx";

import { NotFound } from "./views/notfound.jsx";

import injectContext from "./store/appContext.jsx";
import { ClientCard } from "./components/dashclients/clientcard.jsx";
import { StepPayment } from "./components/dashpayments/steppayment.jsx";
import { PayPalButton } from "./components/dashpayments/PayPalButton.jsx";
import { CreditMemo } from "./components/dashpayments/creditmemo.jsx";
import { TryClients } from "./views/tryClients.jsx";
import { TryDashboard } from "./views/tryDashboard.jsx";

const Layout = () => {
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
                            <Navbar />
                            <Cursor />
                            <BackgroundVideo />
                            <SpecificFounder />
                        </>
                    }
                />
                {/* <Route
                    path="/kanban"
                    element={
                        <>
                            <Navbar />
                            <Kanban />
                        </>
                    }
                /> */}
                <Route
                    path="/tryDatabase"
                    element={
                        <>
                            <Navbar />
                            <TryDatabase />
                        </>
                    }
                />
                <Route
                    path="/tryForms"
                    element={
                        <>
                            <Navbar />
                            <TryForms />
                        </>
                    }
                />
                <Route
                    path="/tryInviteClientForm"
                    element={
                        <>
                            <Navbar />
                            <TryInviteClientForm />
                        </>
                    }
                />
                <Route
                    path="/tryInviteDatabaseForm"
                    element={
                        <>
                            <Navbar />
                            <TryInviteDatabaseForm />
                        </>
                    }
                />
                <Route
                    path="/tryClients"
                    element={
                        <>
                            <Navbar />
                            <TryClients />
                        </>
                    }
                />
                <Route
                    path="/trycreateclient"
                    element={
                        <>
                            <Navbar />
                            <TryCreateClient />
                        </>
                    }
                />
                <Route
                    path="/tryDashboard"
                    element={
                        <>
                            <Navbar />
                            <TryDashboard />
                        </>
                    }
                />

                <Route
                    path="/clientForm/:clienthash"
                    transition="fade"
                    element={
                        <>
                            <Navbar />
                            <ClientForm />
                        </>
                    }
                />
                <Route
                    path="/databaseForm/:dbhash"
                    transition="fade"
                    element={
                        <>
                            <Navbar />
                            <DatabaseForm />
                        </>
                    }
                />
                <Route
                    path="/formSuccessful"
                    transition="fade"
                    element={
                        <>
                            <Navbar />
                            <FormSuccessful />
                        </>
                    }
                />
                <Route
                    path="/formExpired"
                    transition="fade"
                    element={
                        <>
                            <Navbar />
                            <FormExpired />
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
                        path="/forms"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <Form />
                            </>
                        }
                    />
                    <Route
                        path="/tasks"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <Kanban />
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
                            </>
                        }
                    />
                    <Route
                        path="/PayPalButton"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <PayPalButton />
                            </>
                        }
                    />
                    <Route
                        path="/creditmemo/:id"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <CreditMemo />
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
                        path="/inviteClientForm"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <InviteClientForm />
                            </>
                        }
                    />
                    <Route
                        path="/inviteDatabaseForm"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <InviteDatabaseForm />
                            </>
                        }
                    />
                    <Route
                        path="/createUser"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <CreateUser />
                            </>
                        }
                    />
                </Route>
                <Route element={<ProtectedRoute role={["admin"]} />}>
                    <Route
                        path="/admin"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <Admin />
                            </>
                        }
                    />
                    <Route
                        path="/contactMessages"
                        transition="fade"
                        element={
                            <>
                                <PrivateNavbar />
                                <ContactMessages />
                            </>
                        }
                    />
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default injectContext(Layout);
