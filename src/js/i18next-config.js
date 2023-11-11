import i18next from "i18next";
import appEs from "./translations/es/app.json";
import appEn from "./translations/en/app.json";
import loginEs from "./translations/es/login.json";
import loginEn from "./translations/en/login.json";
import signupEs from "./translations/es/signup.json";
import signupEn from "./translations/en/signup.json";
import notfoundEs from "./translations/es/notfound.json";
import notfoundEn from "./translations/en/notfound.json";
import privateEs from "./translations/es/private.json";
import privateEn from "./translations/en/private.json";
import loginformEs from "./translations/es/loginform.json";
import loginformEn from "./translations/en/loginform.json";
import signupformEs from "./translations/es/signupform.json";
import signupformEn from "./translations/en/signupform.json";
import loginsignupEs from "./translations/es/loginsignup.json";
import loginsignupEn from "./translations/en/loginsignup.json";
import specificFounderEs from "./translations/es/specificFounder.json";
import specificFounderEn from "./translations/en/specificFounder.json";
import foundersEs from "./translations/es/founders.json";
import foundersEn from "./translations/en/founders.json";
import privateNavbarEs from "./translations/es/dashboard/privateNavbar.json";
import privateNavbarEn from "./translations/en/dashboard/privateNavbar.json";
import dashboardEs from "./translations/es/dashboard/dashboard.json";
import dashboardEn from "./translations/en/dashboard/dashboard.json";
import clientsEs from "./translations/es/dashboard/clients.json";
import clientsEn from "./translations/en/dashboard/clients.json";
import databaseEs from "./translations/es/dashboard/database.json";
import databaseEn from "./translations/en/dashboard/database.json";
import formEs from "./translations/es/dashboard/form.json";
import formEn from "./translations/en/dashboard/form.json";
import reportsEs from "./translations/es/dashboard/reports.json";
import reportsEn from "./translations/en/dashboard/reports.json";
import paymentsEs from "./translations/es/dashboard/payments.json";
import paymentsEn from "./translations/en/dashboard/payments.json";
import settingsEs from "./translations/es/dashboard/settings.json";
import settingsEn from "./translations/en/dashboard/settings.json";
import createclientEs from "./translations/es/createclient.json";
import createclientEn from "./translations/en/createclient.json";
import createUserEs from "./translations/es/createUser.json";
import createUserEn from "./translations/en/createUser.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: localStorage.getItem("language") || navigator.language,
    fallbackLng: "en",
    resources: {
        es: {
            app: appEs,
            login: loginEs,
            signup: signupEs,
            notfound: notfoundEs,
            private: privateEs,
            loginform: loginformEs,
            signupform: signupformEs,
            loginsignup: loginsignupEs,
            specificFounder: specificFounderEs,
            founders: foundersEs,
            privateNavbar: privateNavbarEs,
            dashboard: dashboardEs,
            clients: clientsEs,
            database: databaseEs,
            form: formEs,
            reports: reportsEs,
            settings: settingsEs,
            payments: paymentsEs,
            createclient: createclientEs,
            createUser: createUserEs
        },
        en: {
            app: appEn,
            login: loginEn,
            signup: signupEn,
            notfound: notfoundEn,
            private: privateEn,
            loginform: loginformEn,
            signupform: signupformEn,
            loginsignup: loginsignupEn,
            specificFounder: specificFounderEn,
            founders: foundersEn,
            privateNavbar: privateNavbarEn,
            dashboard: dashboardEn,
            clients: clientsEn,
            database: databaseEn,
            form: formEn,
            reports: reportsEn,
            payments: paymentsEn,
            settings: settingsEn,
            createclient: createclientEn,
            createUser: createUserEn
        }
    }
});
