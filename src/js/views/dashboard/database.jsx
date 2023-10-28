/* eslint-disable no-unreachable-loop */
/* eslint-disable no-undef */
import { React, useState, useEffect, useRef } from "react";
import "../../../css/app.css";
import "../../../css/glass.css";
// import "../../../css/database.css";
// import "../../../css/handsontable.css";
import { useTranslation } from "react-i18next";
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";
import { useForm } from "react-hook-form";

export const Database = () => {
    const [t] = useTranslation("database");
    const [users, setUsers] = useState([]);
    registerAllModules();
    const hotTableComponent = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const [columns, setColumns] = useState([{ data: "id", title: "ID" }]);

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

    const submit = async data => {
        setColumns([
            ...columns,
            { data: data.title.toLowerCase(), title: data.title }
        ]);
        reset();
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
            <div
                className={
                    "z-50 fixed h-screen w-screen top-0 left-0" +
                    " " +
                    (isOpen ? "" : "hidden")
                }
                onClick={() => {
                    setIsOpen(false);
                }}></div>
            <form
                className={
                    "w-96 h-96 fixed z-50 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 glass flex justify-center items-center flex-col gap-10" +
                    " " +
                    (isOpen !== true && "hidden")
                }
                onSubmit={handleSubmit(submit)}>
                <label>
                    <span className="font-bold text-cyan-600">Title</span>
                    <input
                        type="text"
                        placeholder="title"
                        className="block p-1"
                        {...register("title", {
                            required: {
                                value: true,
                                message: "Title required"
                            },
                            maxLength: {
                                value: 30,
                                message: "Title max-length"
                            },
                            pattern: {
                                value: /^[a-z0-9A-ZÀ-ÿ\u00f1\u00d1_\-|']+$/,
                                message: "Invalid title"
                            },
                            validate: value => {
                                for (const column of columns) {
                                    if (value.toLowerCase() === column.data) {
                                        return "Repeated title";
                                    }
                                }
                                return true;
                            }
                        })}
                    />
                    {errors.title && (
                        <span className="text-sm text-red-500">
                            {errors.title.message}
                        </span>
                    )}
                </label>
                <button className="bg-gray-100 rounded px-3 py-1 font-bold">
                    Submit
                </button>
            </form>
            <div className="font-serif text-gray-200 mt-28">
                <h1 className="w-10/12 text-black dark:text-white text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 m-auto">
                    {t("database")}
                </h1>
                <div className="flex justify-end mr-12">
                    <div
                        className="flex justify-center text-white items-center mr-5 bg-[rgba(0,0,0,0.85)] hover:bg-[rgba(0,0,0,0.6)] dark:bg-[rgba(255,255,255,0.2)] dark:hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer p-3 transition duration-300"
                        onClick={() => downloadFile()}>
                        <p>Download File Here</p>
                    </div>
                    <div
                        className="flex justify-center text-white items-center mr-5 bg-[rgba(0,0,0,0.85)] hover:bg-[rgba(0,0,0,0.6)] dark:bg-[rgba(255,255,255,0.2)] dark:hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer p-3 transition duration-300"
                        onClick={() => {
                            setIsOpen(true);
                        }}>
                        <p>New Column</p>
                        <i className="ml-4 fa-solid fa-plus"></i>
                    </div>
                </div>
                <div className="flex justify-end ">
                    <div className="glass p-10 w-11/12 h-[30rem] my-5 m-auto table2">
                        <div className="relative text-xl text-white force-overflow table1 shadow-md sm:rounded-lg">
                            {users && (
                                <HotTable
                                    ref={hotTableComponent}
                                    data={columns}
                                    licenseKey="non-commercial-and-evaluation"
                                    colHeaders={true}
                                    rowHeaders={true}
                                    columnSorting={true}
                                    contextMenu={true}>
                                    {columns.map((column, i) => {
                                        return (
                                            <HotColumn
                                                key={i}
                                                data={column.data}
                                                title={column.title}
                                            />
                                        );
                                    })}
                                </HotTable>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
