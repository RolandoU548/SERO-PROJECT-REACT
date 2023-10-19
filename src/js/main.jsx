import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout.jsx";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./i18next-config.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
    <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
        <React.StrictMode>
            <I18nextProvider i18n={i18next}>
                <Layout />
            </I18nextProvider>
        </React.StrictMode>
    </GoogleOAuthProvider>
);
