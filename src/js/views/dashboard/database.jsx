import { React, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/app.css";
import "../../../css/glass.css";
// import "../../../css/database.css";
// import "../../../css/handsontable.css";
import { useTranslation } from "react-i18next";
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";

export const Database = () => {
    const [t] = useTranslation("database");
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    registerAllModules();
    const hotTableComponent = useRef(null);

    useEffect(() => {
        function getData() {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(data => setUsers(data));
        }
        getData();
    }, []);

    const downloadFile = () => {
        const downloadPlugin =
            hotTableComponent.current.hotInstance.getPlugin("exportFile");

        downloadPlugin.downloadFile("csv", {
            filename: "DatabaseTable",
            fileExtension: "csv",
            mimeType: "text/csv",
            columnHeaders: true
        });
    };

    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-screen h-screen -z-50 fixed top-0 left-0 object-cover">
                <source src="DatabaseBlackBG.mp4" type="video/mp4" />
            </video>
            <div className="font-serif text-gray-200 mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-white m-auto">
                    {t("database")}
                </h1>
                <div className="">
                    <div className="flex justify-end mr-12">
                    <div
                            className="flex justify-center items-center mr-5 w-36 h-8 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer"
                            onClick={() => downloadFile()}>
                            <p>Download File Here</p>
                        </div>
                        <div
                            className="flex justify-center items-center mr-5 w-36 h-8 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer"
                            >
                            <p>New Column</p>
                            <i className="ml-4 fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className="flex justify-end ">
                        <div className="glass p-10 w-11/12 h-[30rem] mt-5 m-auto table2">
                            <div className="relative text-xl text-white force-overflow table1 shadow-md sm:rounded-lg">
                                {users && (
                                    <HotTable
                                    ref={hotTableComponent}
                                        data={users}
                                        licenseKey="non-commercial-and-evaluation"
                                        colHeaders={true}
                                        rowHeaders={true}
                                        columnSorting={true}
                                        contextMenu={true}>
                                        <HotColumn
                                            data="id"
                                            title="ID"
                                            readOnly={true}
                                        />
                                        <HotColumn data="name" title="Name" />
                                        <HotColumn
                                            data="username"
                                            title="Username"
                                        />
                                        <HotColumn data="email" title="Email" />
                                    </HotTable>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
