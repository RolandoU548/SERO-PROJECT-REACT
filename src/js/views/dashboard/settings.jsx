import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";

export const Settings = () => {
    const { store } = useContext(Context);
    const [t] = useTranslation("settings");
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [clientsPerPage] = useState(5);
    const [sortOrder, setSortOrder] = useState({
        column: "name",
        ascending: true
    });
    const clients = [
        {
            id: 1,
            name: "Juan",
            lastname: "perez",
            email: "jaunito@gmail.com",
            phone: "131237123",
            business: "Negocio",
            description: "Descripcion",
            status: "Active"
        },
        {
            id: 2,
            name: "Yisus",
            lastname: "Ramon",
            email: "jaunito@gmail.com",
            phone: "131237123",
            business: "Negocio",
            description: "Es un negocio con mucho futuro",
            status: "Inactive"
        }
    ];
    const indexOfLastClient = currentPage * clientsPerPage;
    const indexOfFirstClient = indexOfLastClient - clientsPerPage;
    const currentClients =
        clients &&
        clients
            .filter(client =>
                client.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) =>
                sortOrder.ascending
                    ? a[sortOrder.column].localeCompare(b[sortOrder.column])
                    : b[sortOrder.column].localeCompare(a[sortOrder.column])
            )
            .slice(indexOfFirstClient, indexOfLastClient);

    const handleSort = column => {
        setSortOrder({
            column,
            ascending: sortOrder.column === column ? !sortOrder.ascending : true
        });
    };

    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fsettings%2FSettingsBG.jpg?alt=media&token=d9fc16d3-d17e-493a-8687-66a510db7e2b&_gl=1*c2g6eh*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MTM1Mi4xNi4wLjA."
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className=" font-serif text-gray-200 mt-28">
                <h2 className="w-10/12 text-3xl minimum:text-4xl md:text-5xl lg:text-6xl font-black z-10 text-black dark:text-white m-auto">
                    {t("settings")}
                </h2>
                <div className="glass p-[3vw] mt-5 m-auto tiny:w-11/12 w-[98%]">
                    <div className="flex justify-between items-center mb-5">
                        <div className="relative w-96 max-w-[65%]">
                            <input
                                type="text"
                                placeholder="Search clients"
                                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-900 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white w-full"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                            <span className="absolute top-0 md:right-4 tiny:right-2 right-1 mt-3">
                                <FaSearch className="h-4 w-4 fill-current text-gray-800 dark:text-gray-500" />
                            </span>
                        </div>
                        <button
                            className="bg-orange-300 hover:bg-orange-400 sm:px-4 p-2 rounded-lg dark:bg-cyan-300 text-black dark:hover:bg-cyan-400 focus:outline-none focus:ring-2 transition duration-300 focus:ring-blue-600 border border-black focus:ring-opacity-50"
                            onClick={() => navigate("/createclient")}>
                            Add Client
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="text-black dark:text-white table w-full">
                            <thead>
                                <tr>
                                    <th
                                        className="px-4 py-2"
                                        onClick={() => handleSort("image")}>
                                        Image{" "}
                                        {sortOrder.column === "image" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th
                                        className="px-4 py-2"
                                        onClick={() => handleSort("name")}>
                                        Name{" "}
                                        {sortOrder.column === "name" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th
                                        className="px-4 py-2"
                                        onClick={() => handleSort("lastname")}>
                                        Lastname{" "}
                                        {sortOrder.column === "lastname" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th
                                        className="px-4 py-2"
                                        onClick={() => handleSort("email")}>
                                        Email{" "}
                                        {sortOrder.column === "email" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th
                                        className="px-4 py-2"
                                        onClick={() => handleSort("phone")}>
                                        Phone{" "}
                                        {sortOrder.column === "phone" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th
                                        className="px-4 py-2"
                                        onClick={() => handleSort("business")}>
                                        Business{" "}
                                        {sortOrder.column === "business" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th
                                        className="px-4 py-2 overflow-hidden"
                                        onClick={() =>
                                            handleSort("description")
                                        }>
                                        Description{" "}
                                        {sortOrder.column === "description" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th
                                        className="px-4 py-2"
                                        onClick={() => handleSort("status")}>
                                        Status{" "}
                                        {sortOrder.column === "status" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentClients.map(client => (
                                    <tr key={client.id}>
                                        <td className="px-4 py-2 text-center">
                                            <img
                                                src={client.image}
                                                alt={client.name}
                                                className="h-20 w-20 rounded-full inline-block"
                                            />
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {client.name}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {client.lastname}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {client.email}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {client.phone}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {client.business.substring(0, 30)}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {client.description.substring(
                                                0,
                                                30
                                            )}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <div
                                                className={`px-4 py-2 rounded-full ${
                                                    client.status === "Active"
                                                        ? "bg-green-600 text-white"
                                                        : "bg-red-600 text-white"
                                                }`}>
                                                {client.status}
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            Hola
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        <div className="tiny:w-96 text-gray-700 dark:text-gray-600">
                            Showing {indexOfFirstClient + 1} to{" "}
                            {indexOfLastClient} of {clients.length} entries
                        </div>
                        <div className="w-full overflow-auto flex justify-end">
                            <ul
                                className="flex rounded list-none"
                                style={{ gap: 0 }}>
                                <li>
                                    <button
                                        className="relative block p-2.5 leading-tight text-black border-r-0 rounded-l bg-orange-300 hover:bg-orange-400 dark:bg-cyan-300 dark:hover:bg-cyan-400 transition duration-300 focus:outline-none"
                                        onClick={() =>
                                            setCurrentPage(currentPage - 1)
                                        }
                                        disabled={currentPage === 1}>
                                        <span>Previous</span>
                                    </button>
                                </li>
                                {Array.from(
                                    {
                                        length: Math.ceil(
                                            clients.length / clientsPerPage
                                        )
                                    },
                                    (_, i) => (
                                        <li key={i}>
                                            <button
                                                className={`transition duration-300 relative block p-2.5 leading-tight text-blue-900 border-r-0 bg-orange-300 hover:bg-orange-400 dark:bg-cyan-300 dark:hover:bg-cyan-400 focus:outline-none ${
                                                    currentPage === i + 1
                                                        ? "z-10 bg-orange-400 hover:bg-orange-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    setCurrentPage(i + 1)
                                                }>
                                                {i + 1}
                                            </button>
                                        </li>
                                    )
                                )}
                                <li>
                                    <button
                                        className="bg-orange-300 hover:bg-orange-400 relative block p-2.5 leading-tight bg-w text-black dark:bg-cyan-300 rounded-r dark:hover:bg-cyan-400 text-black transition duration-300 focus:outline-none"
                                        onClick={() =>
                                            setCurrentPage(currentPage + 1)
                                        }
                                        disabled={
                                            currentPage ===
                                            Math.ceil(
                                                clients.length /
                                                    clientsPerPage ||
                                                    clients.length < 1
                                            )
                                        }>
                                        <span>Next</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
