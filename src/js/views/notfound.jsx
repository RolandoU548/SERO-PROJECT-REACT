import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const NotFound = () => {
    const [t] = useTranslation("notfound");
    return (
        <>
            <h1 className="dark:text-white text-center text-4xl mt-5">
                {t("notfound")}!
            </h1>
            <Link
                to="/"
                className="w-52 block m-auto text-3xl bg-gray-300 hover:bg-gray-400 w-40 my-5 p-2 pb-3 text-center font-medium rounded-full dark:text-white dark:bg-blue-500 dark:hover:bg-blue-600">
                {t("backHome")}
            </Link>
        </>
    );
};
