import { React, useState, useEffect, useRef, useContext } from "react";
import { Context } from "../../store/appContext.jsx";
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX, enUS } from "handsontable/i18n";
import "handsontable/dist/handsontable.full.min.css";
import { RingLoader } from "react-spinners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

registerAllModules();
registerLanguageDictionary(enUS);
registerLanguageDictionary(esMX);

export const Database = () => {
    const notify = () =>
        toast.success(t("savedTable"), {
            position: "bottom-right",
            style: {
                background: "rgba(23, 23, 23, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px 0 rgba(77, 208, 225, 0.37)",
                color: "#fff",
                borderRadius: "10px"
            }
        });
    const notifyDownload = () =>
        toast.success(t("downloadTable"), {
            position: "bottom-right",
            style: {
                background: "rgba(23, 23, 23, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px 0 rgba(77, 208, 225, 0.37)",
                color: "#fff",
                borderRadius: "10px"
            }
        });
    const { actions } = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
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
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        actions.getRows().then(rows => {
            if (rows.info?.text) {
                setRows(rows.info.text);
            }
        });
    }, []);

    const sendRow = async () => {
        const data = await actions.sendRow(rows);
        if (data.message === "Row created" || data.message === "Row updated") {
            notify();
        }
    };

    const downloadFile = () => {
        const downloadPlugin =
            hotTableComponent.current.hotInstance.getPlugin("exportFile");
        notifyDownload();
        downloadPlugin.downloadFile("csv", {
            filename: "DatabaseTable",
            fileExtension: "csv",
            mimeType: "text/csv"
        });
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <RingLoader color="#26C6DA" loading={isLoading} size={100} />
            </div>
        );
    } else {
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
    }
};
