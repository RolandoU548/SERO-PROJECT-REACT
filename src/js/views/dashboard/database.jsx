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
            if (rows.info.text) {
                setRows(rows.info.text);
            }
        });
    }, []);

    const sendRow = async () => {
        const data = await actions.sendRow(rows);
        if (data.message === "Row created" || data.message === "Row updated") {
            alert(t("savedTable"));
        }
    };

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
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fdatabase%2FDatabaseBG.jpg?alt=media&token=3bf525b3-764b-4ff8-b1ec-e22c672f52d4"
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="font-serif mt-28">
                <div className="flex resp:block m-auto justify-between">
                    <h2 className="w-11/12 ml-16 text-black dark:text-white text-3xl minimum:text-4xl md:text-5xl lg:text-6xl font-black z-10 m-auto">
                        {t("database")}
                    </h2>
                    <div className="flex justify-end items-center mr-12">
                        <div
                            className="flex h-12 w-40 justify-center text-white items-center mr-5 bg-[rgba(0,0,0,0.85)] hover:bg-[rgba(0,0,0,0.6)] dark:bg-[rgba(255,255,255,0.2)] dark:hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer p-3 transition duration-300"
                            onClick={downloadFile}>
                            <p>{t("downloadFile")}</p>
                        </div>
                        <div
                            className="flex h-12 w-40 justify-center text-white items-center mr-5 bg-[rgba(0,0,0,0.85)] hover:bg-[rgba(0,0,0,0.6)] dark:bg-[rgba(255,255,255,0.2)] dark:hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer p-3 transition duration-300"
                            onClick={sendRow}>
                            <p>{t("saveTable")}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end ">
                    <div className="glass p-10 w-11/12 h-[30rem] my-5 m-auto table2">
                        <div
                            className="h-full p-0 m-0"
                            style={{ overflowX: "auto" }}>
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
