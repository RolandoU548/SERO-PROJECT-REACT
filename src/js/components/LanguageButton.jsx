import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const LanguageButton = ({ className }) => {
    const i18n = useTranslation("global")[1];
    return (
        <button
            className={"z-50" + " " + className}
            onClick={() => {
                i18n.language === "es"
                    ? i18n.changeLanguage("en")
                    : i18n.changeLanguage("es");
                localStorage.language = i18n.language;
            }}>
            <img
                className="w-full h-full"
                src={
                    i18n.language === "en"
                        ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/300px-Flag_of_the_United_States.svg.png"
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/300px-Bandera_de_Espa%C3%B1a.svg.png"
                }
            />
        </button>
    );
};

LanguageButton.propTypes = {
    className: PropTypes.string
};
