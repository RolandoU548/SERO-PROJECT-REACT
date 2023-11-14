import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout.jsx";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./i18next-config.js";
import { AppLoader } from "./views/apploader.jsx";
import { ToastContainer } from "react-toastify";

function App() {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <React.StrictMode>
            <I18nextProvider i18n={i18next}>
                {showLoader ? <AppLoader /> : <Layout />}
                {/* <Layout /> */}
            </I18nextProvider>
            <ToastContainer />
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
