import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../../../css/glass.css";
import { RingLoader } from "react-spinners";

import { ClientProfile } from "../../components/dashclients/clientsprofile";
import { DeleteModal } from "../../components/dashclients/deletemodal";
import { ClientCardButton } from "../../components/dashclients/clientcardbutton";

export const Clients = () => {
    const { store, actions } = useContext(Context);
    const [t] = useTranslation("clients");
    const [isLoading, setIsLoading] = useState(true);
    const [client, setClient] = useState();
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [clientsPerPage] = useState(5);
    const [sortOrder, setSortOrder] = useState({
        column: "name",
        ascending: true
    });

    useEffect(() => {
        actions.getAllClients().then(() => {
            setIsLoading(false);
        });
    }, []);

    // Usuario actual
    const indexOfLastClient = currentPage * clientsPerPage;
    const indexOfFirstClient = indexOfLastClient - clientsPerPage;
    const currentClients =
        store.clients &&
        store.clients
            .filter(
                client =>
                    client.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    client.lastname
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    client.email
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    client.phone
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    client.business
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    client.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    client.status
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
            )
            .sort((a, b) =>
                sortOrder.ascending
                    ? a[sortOrder.column].localeCompare(b[sortOrder.column])
                    : b[sortOrder.column].localeCompare(a[sortOrder.column])
            )
            .slice(indexOfFirstClient, indexOfLastClient);

    // Labels Filtrados
    const sortClients = (clients, column, ascending) => {
        return clients.sort((a, b) => {
            const aValue = a[column];
            const bValue = b[column];
            return ascending
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
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

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <RingLoader color="#26C6DA" loading={isLoading} size={100} />
            </div>
        );
    }
    return (
        <>
            {isOpenEdit && (
                <ClientProfile setIsOpen={setIsOpenEdit} client={client} />
            )}
            {isOpenDelete && (
                <DeleteModal setIsOpen={setIsOpenDelete} client={client} />
            )}
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fclients%2FClientsBG.jpeg?alt=media&token=2d8c8c81-a447-480b-b66b-087811f4cb1c"
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className=" font-serif text-gray-200 mt-28">
                <h2 className="w-10/12 text-3xl minimum:text-4xl md:text-5xl lg:text-6xl font-black z-10 text-black dark:text-white m-auto">
                    {t("clients")}
                </h2>
                <div className="glass p-[3vw] my-5 m-auto tiny:w-11/12 w-[98%]">
                    <div className="flex justify-between items-center mb-5">
                        <div className="relative w-96 max-w-[65%]">
                            <input
                                type="text"
                                placeholder={t("searchclients")}
                                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-900 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white w-full"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                            <span className="absolute top-0 md:right-4 tiny:right-2 right-1 mt-3 pointer-events-none">
                                <FaSearch className="h-4 w-4 fill-current text-gray-800 dark:text-gray-500" />
                            </span>
                        </div>
                        <button
                            className="bg-orange-300 hover:bg-orange-400 sm:px-4 p-2 rounded-lg dark:bg-cyan-300 text-black dark:hover:bg-cyan-400 focus:outline-none focus:ring-2 transition duration-300 focus:ring-blue-600 border border-black focus:ring-opacity-50"
                            onClick={() => navigate("/createclient")}>
                            {t("addClient")}
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="text-black dark:text-white table w-full">
                            <thead>
                                <tr>
                                    <th
                                        className="px-4 py-2"
                                        onClick={() => handleSort("image")}>
                                        {t("image")}{" "}
                                        {sortOrder.column === "image" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th
                                        className="px-4 py-2"
                                        onClick={() => handleSort("name")}>
                                        {t("name")}{" "}
                                        {sortOrder.column === "name" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th
                                        className="px-4 py-2"
                                        onClick={() => handleSort("lastname")}>
                                        {t("lastName")}{" "}
                                        {sortOrder.column === "lastname" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th
                                        className="px-4 py-2"
                                        onClick={() => handleSort("email")}>
                                        {t("email")}{" "}
                                        {sortOrder.column === "email" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th
                                        className="px-4 py-2"
                                        onClick={() => handleSort("phone")}>
                                        {t("phone")}{" "}
                                        {sortOrder.column === "phone" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th
                                        className="px-4 py-2"
                                        onClick={() => handleSort("business")}>
                                        {t("business")}{" "}
                                        {sortOrder.column === "business" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th
                                        className="px-4 py-2 overflow-hidden"
                                        onClick={() =>
                                            handleSort("description")
                                        }>
                                        {t("description")}{" "}
                                        {sortOrder.column === "description" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th
                                        className="px-4 py-2"
                                        onClick={() => handleSort("status")}>
                                        {t("status")}{" "}
                                        {sortOrder.column === "status" &&
                                            (sortOrder.ascending ? "▲" : "▼")}
                                    </th>
                                    <th className="px-4 py-2">
                                        {t("actions")}{" "}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentClients.map(client => (
                                    <tr key={client.id}>
                                        <td className="px-4 py-2 text-center">
                                            {client.image !== "noImage" ? (
                                                <img
                                                    src={client.image}
                                                    alt={client.name}
                                                    className="h-20 w-20 object-cover rounded-full inline-block"
                                                />
                                            ) : (
                                                <i
                                                    className="fa-regular fa-circle-user text-5xl mx-4 invert dark:invert-0"
                                                    style={{
                                                        color: "#ffffff"
                                                    }}
                                                />
                                            )}
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
                                        <td className="py-2 text-center h-full gap-x-1">
                                            <div className="flex">
                                                <ClientCardButton
                                                    key={client.id}
                                                    client={client}
                                                />
                                                <button
                                                    className="m-1 p-1.5 text-xs rounded-lg bg-black text-white border border-neutral-600 hover:bg-neutral-700  hover:border-cyan-300 hover:text-cyan-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                                    onClick={() => {
                                                        setClient(client);
                                                        setIsOpenEdit(true);
                                                    }}>
                                                    <FaEdit />
                                                </button>
                                                <button
                                                    className="m-1 p-1.5 text-xs rounded-lg bg-red-600 text-white hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                                    onClick={() => {
                                                        setClient(client);
                                                        setIsOpenDelete(true);
                                                    }}>
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                        <div className="tiny:w-96 text-gray-700 dark:text-gray-600">
                            {t("showing")} {indexOfFirstClient + 1} {t("to")}{" "}
                            {indexOfLastClient} {t("of")} {store.clients.length}{" "}
                            {t("entries")}
                        </div>
                        <div className="w-full overflow-auto flex justify-end">
                            <ul
                                className="flex rounded list-none"
                                style={{ gap: 0 }}>
                                <li>
                                    <button
                                        className="relative block p-2.5 leading-tight text-white border-r-0 rounded-l bg-neutral-950 border border-neutral-700 transition duration-300 focus:outline-none"
                                        onClick={() =>
                                            setCurrentPage(currentPage - 1)
                                        }
                                        disabled={currentPage === 1}>
                                        <span>{t("previous")} </span>
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
                                                className={`transition duration-300 relative block p-2.5 leading-tight border border-neutral-700 border-r-0 bg-neutral-900 focus:outline-none ${
                                                    currentPage === i + 1
                                                        ? "z-10 text-orange-500 dark:text-cyan-300"
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
                                        className="relative block p-2.5 leading-tight bg-w text-white rounded-r bg-neutral-950 border border-neutral-700 transition duration-300 focus:outline-none"
                                        onClick={() =>
                                            setCurrentPage(currentPage + 1)
                                        }
                                        disabled={
                                            currentPage ===
                                                Math.ceil(
                                                    store.clients.length /
                                                        clientsPerPage
                                                ) || store.clients.length < 1
                                        }>
                                        <span>{t("next")}</span>
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
