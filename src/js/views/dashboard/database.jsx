/* eslint-disable no-unreachable-loop */
/* eslint-disable no-undef */
import { React, useState, useEffect, useRef, useContext } from "react";
import { Context } from "../../store/appContext.jsx";
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX, enUS } from "handsontable/i18n";
import "handsontable/dist/handsontable.full.min.css";

registerAllModules();
registerLanguageDictionary(enUS);
registerLanguageDictionary(esMX);

export const Database = () => {
    const { actions } = useContext(Context);
    const [t] = useTranslation("database");
    const i18n = useTranslation("global")[1];
    const [rows, setRows] = useState([
        ["ID", "Name", "Lastname"],
        ["1", "Jose", "García"],
        ["2", "Ramón", "Pérez"]
    ]);
    registerAllModules();
    const hotTableComponent = useRef(null);

    useEffect(() => {
        actions.getRows().then(rows => {
            if (rows.text) {
                setRows(rows.text);
            }
        });
    }, []);

    const downloadFile = () => {
        const downloadPlugin =
            hotTableComponent.current.hotInstance.getPlugin("exportFile");

        downloadPlugin.downloadFile("csv", {
            filename: "DatabaseTable",
            fileExtension: "csv",
            mimeType: "text/csv"
        });
    };

    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="invert w-screen h-screen -z-50 fixed top-0 left-0 object-cover dark:invert-0 transition duration-500">
                <source src="DatabaseBG.mp4" type="video/mp4" />
            </video>
            <div className="font-serif text-gray-200 mt-28">
                <h1 className="w-10/12 text-black dark:text-white text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 m-auto">
                    {t("database")}
                </h1>
                <div className="flex justify-end mr-12">
                    <div
                        className="flex justify-center text-white items-center mr-5 bg-[rgba(0,0,0,0.85)] hover:bg-[rgba(0,0,0,0.6)] dark:bg-[rgba(255,255,255,0.2)] dark:hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer p-3 transition duration-300"
                        onClick={() => downloadFile()}>
                        <p>{t("downloadFile")}</p>
                    </div>
                    <div
                        className="flex justify-center text-white items-center mr-5 bg-[rgba(0,0,0,0.85)] hover:bg-[rgba(0,0,0,0.6)] dark:bg-[rgba(255,255,255,0.2)] dark:hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer p-3 transition duration-300"
                        onClick={() => {
                            actions.sendRow(rows);
                        }}>
                        <p>{t("saveTable")}</p>
                    </div>
                </div>
                <div className="flex justify-end ">
                    <div className="glass p-10 w-11/12 h-[30rem] my-5 m-auto table2">
                        <div className="relative text-xl text-white force-overflow table1 shadow-md sm:rounded-lg">
                            {rows.length > 0 && (
                                <HotTable
                                    ref={hotTableComponent}
                                    data={rows}
                                    language={
                                        i18n.language === "es"
                                            ? esMX.languageCode
                                            : enUS.languageCode
                                    }
                                    licenseKey="non-commercial-and-evaluation"
                                    colHeaders={true}
                                    rowHeaders={true}
                                    mergeCells={true}
                                    columnSorting={true}
                                    contextMenu={true}
                                    dropdownMenu={true}
                                    filters={true}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
