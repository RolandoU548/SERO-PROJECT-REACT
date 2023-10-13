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
import privateEn from "./translations/en/private.json"

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
            private: privateEs
        },
        en: {
            app: appEn,
            login: loginEn,
            signup: signupEn,
            notfound: notfoundEn,
            private: privateEn
        }
    }
});
