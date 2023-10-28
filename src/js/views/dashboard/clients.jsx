import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../../../css/app.css";
import "../../../css/glass.css";

import { ClientProfile } from "../../components/dashclients/clientsprofile";
import { DeleteModal } from "../../components/dashclients/deletemodal";

export const Clients = () => {
    const { store, actions } = useContext(Context);
    const [t] = useTranslation("Clients");
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [clientsPerPage] = useState(5);
    const [clients, setClients] = useState(store.clients);
    const [sortOrder, setSortOrder] = useState({
        column: "name",
        ascending: true
    });

    useEffect(() => {
        actions.getAllClients();
    }, []);

    // const handleClientDelete = id => {
    //     actions.deleteClient(id);
    //     const updatedClients = clients.filter(client => client.id !== id);
    //     setClients(updatedClients);
    // };

    // Usuario actual
    const indexOfLastClient = currentPage * clientsPerPage;
    const indexOfFirstClient = indexOfLastClient - clientsPerPage;
    const currentClients = store.clients
        .filter(client =>
            client.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(indexOfFirstClient, indexOfLastClient);

    // Labels Filtrados
    const sortClients = (clients, column, ascending) => {
        return clients.sort((a, b) => {
            const aValue = a[column];
            const bValue = b[column];
            if (aValue < bValue) {
                return ascending ? -1 : 1;
            } else if (aValue > bValue) {
                return ascending ? 1 : -1;
            } else {
                return 0;
            }
        });
    };

    const handleSort = column => {
        setSortOrder({
            column,
            ascending: sortOrder.column === column ? !sortOrder.ascending : true
        });
    };

    const sortedClients = sortClients(
        currentClients,
        sortOrder.column,
        sortOrder.ascending
    );

    // Cambiar de Pagina
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-screen h-screen -z-50 fixed top-0 left-0 object-cover invert dark:invert-0 transition duration-500">
                <source src="ClientsBG.mp4" type="video/mp4" />
            </video>
            <div className=" font-serif text-gray-200 mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-black dark:text-white m-auto">
                    {t("Clients")}
                </h1>
                <div className="glass p-10 mt-5 m-auto w-11/12">
                    <div className="flex justify-between items-center mb-5">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search clients"
                                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-900 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white w-96"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                            <span className="absolute top-0 right-0 mt-3 mr-4">
                                <FaSearch className="h-4 w-4 fill-current text-gray-800 dark:text-gray-500" />
                            </span>
                        </div>
                        <button
                            className="bg-orange-300 hover:bg-orange-400 px-4 py-2 rounded-lg dark:bg-cyan-300 text-black dark:hover:bg-cyan-400 focus:outline-none focus:ring-2 transition duration-300 focus:ring-blue-600 border border-black focus:ring-opacity-50"
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
                                        className="px-4 py-2"
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
                                            {client.email}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {client.phone}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {client.business}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {client.description}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <button
                                                className={`px-4 py-2 rounded-lg ${
                                                    client.status === "Active"
                                                        ? "bg-green-600 text-white"
                                                        : "bg-red-600 text-white"
                                                }`}>
                                                {client.status}
                                            </button>
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <ClientProfile
                                                key={client.id}
                                                client={client}
                                            />
                                            <DeleteModal
                                                key={client.id}
                                                client={client}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        <div>
                            <span className=" text-gray-700 dark:text-gray-600">
                                Showing {indexOfFirstClient + 1} to{" "}
                                {indexOfLastClient} of {store.clients.length}{" "}
                                entries
                            </span>
                        </div>
                        <div>
                            <nav className="block">
                                <ul
                                    className="flex pl-0 rounded list-none flex-wrap"
                                    style={{ gap: 0 }}>
                                    <li>
                                        <button
                                            className="relative block py-2 px-3 leading-tight text-orange-300 hover:text-orange-400 dark:text-cyan-300 border-r-0 ml-0 rounded-l bg-black dark:hover:text-cyan-400 transition duration-300 border border-black focus:outline-none"
                                            onClick={() =>
                                                paginate(currentPage - 1)
                                            }
                                            disabled={currentPage === 1}>
                                            <span>Previous</span>
                                        </button>
                                    </li>
                                    {Array.from(
                                        {
                                            length: Math.ceil(
                                                store.clients.length /
                                                    clientsPerPage
                                            )
                                        },
                                        (_, i) => (
                                            <li key={i}>
                                                <button
                                                    className={`relative block py-2 px-3 leading-tight bg-w text-blue-700 border-r-0 hover:bg-gray-200 focus:outline-none ${
                                                        currentPage === i + 1
                                                            ? "z-10 bg-blue-500 text-white"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        paginate(i + 1)
                                                    }>
                                                    {i + 1}
                                                </button>
                                            </li>
                                        )
                                    )}
                                    <li>
                                        <button
                                            className="bg-orange-300 hover:bg-orange-400 relative block py-2 px-3 leading-tight bg-w text-black dark:bg-cyan-300 rounded-r dark:hover:bg-cyan-400 transition duration-300 border border-black focus:outline-none"
                                            onClick={() =>
                                                paginate(currentPage + 1)
                                            }
                                            disabled={
                                                currentPage ===
                                                Math.ceil(
                                                    store.clients.length /
                                                        clientsPerPage
                                                )
                                            }>
                                            <span>Next</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
