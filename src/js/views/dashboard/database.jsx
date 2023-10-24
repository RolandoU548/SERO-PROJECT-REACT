import { React, useState, useEffect } from "react";
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
    const [isOpen, setIsOpen] = useState(false);

    const [columns, setColumns] = useState([
        { data: "id", title: "ID" },
        { data: "name", title: "Name" },
        { data: "username", title: "Username" },
        { data: "email", title: "Email" },
        { data: "REU", title: "REDUX" }
    ]);

    useEffect(() => {
        function getData() {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(data => setUsers(data));
        }
        getData();
    }, []);

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
                    (isOpen ? "" : "hidden")
                }
                onSubmit={e => {
                    e.preventDefault();
                }}>
                <label className="text-cyan-600">
                    Data
                    <input type="text" placeholder="data" className="block" />
                </label>
                <label className="text-cyan-600">
                    Title
                    <input type="text" placeholder="title" className="block" />
                </label>
                <button>Submit</button>
            </form>
            <div className="font-serif text-gray-200 mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-white m-auto">
                    {t("database")}
                </h1>
                <div className="">
                    <div className="flex justify-end mr-12">
                        <div
                            className="flex justify-center items-center mr-5 w-36 h-8 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer"
                            onClick={() => {
                                // setColumns([
                                //     ...columns,
                                //     { data: "hola", title: "HOLA" }
                                // ]);
                                setIsOpen(!isOpen);
                            }}>
                            <p>New Column</p>
                            <i className="ml-4 fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className="flex justify-end ">
                        <div className="glass p-10 w-11/12 h-[30rem] mt-5 m-auto table2">
                            <div className="relative text-xl text-white force-overflow table1 shadow-md sm:rounded-lg">
                                {users && (
                                    <HotTable
                                        data={users}
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
            </div>
        </>
    );
};
