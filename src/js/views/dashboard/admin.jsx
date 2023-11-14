import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import "../../../css/app.css";
import "../../../css/glass.css";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import { UpdateUserModal } from "../../components/adminView/UpdateUserModal";
import { DeleteUserModal } from "../../components/adminView/DeleteUserModal";
import { useTranslation } from "react-i18next";

export const Admin = () => {
    const [t] = useTranslation("createUser");
    const navigate = useNavigate();
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [user, setUser] = useState();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllUsers(store.token);
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    // const [clients, setClients] = useState(store.clients);
    const [sortOrder, setSortOrder] = useState({
        column: "name",
        "[{}]": "role",
        ascending: true
    });
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers =
        store.users?.filter(user => {
            return user.id !== store.user.id;
        }) &&
        store.users
            ?.filter(user => {
                return user.id !== store.user.id;
            })
            .filter(
                user =>
                    user.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    user.lastname
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    user.email
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    user.role.includes(searchTerm.toLowerCase())
            )
            // eslint-disable-next-line array-callback-return
            .sort((a, b) => {
                if (
                    Array.isArray(a[sortOrder.column]) &&
                    Array.isArray(b[sortOrder.column])
                ) {
                    return sortOrder.ascending
                        ? a[sortOrder.column]
                              .sort((a, b) => a.localeCompare(b))[0]
                              .localeCompare(
                                  b[sortOrder.column].sort((a, b) =>
                                      a.localeCompare(b)
                                  )[0]
                              )
                        : b[sortOrder.column]
                              .sort((a, b) => a.localeCompare(b))[0]
                              .localeCompare(
                                  a[sortOrder.column].sort((a, b) =>
                                      a.localeCompare(b)
                                  )[0]
                              );
                } else {
                    return sortOrder.ascending
                        ? a[sortOrder.column].localeCompare(b[sortOrder.column])
                        : b[sortOrder.column].localeCompare(
                              a[sortOrder.column]
                          );
                }
            })
            .slice(indexOfFirstUser, indexOfLastUser);

    const handleSort = column => {
        setSortOrder({
            column,
            ascending: sortOrder.column === column ? !sortOrder.ascending : true
        });
    };

    if (currentUsers) {
        return (
            <>
                {isOpenEdit && (
                    <UpdateUserModal setIsOpen={setIsOpenEdit} user={user} />
                )}
                {isOpenDelete && (
                    <DeleteUserModal setIsOpen={setIsOpenDelete} user={user} />
                )}
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fadmin%2FAdminBG.jpeg?alt=media&token=bb862525-094d-4ea4-bd01-ad4ed93518fe"
                    className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
                />
                <div className=" font-serif text-gray-200 mt-28">
                    <h2 className="w-10/12 text-3xl minimum:text-4xl md:text-5xl lg:text-6xl font-black z-10 text-black dark:text-white m-auto">
                        {t("admin")}
                    </h2>
                    <div className="glass p-[3vw] my-5 m-auto tiny:w-11/12 w-[98%]">
                        <div className="flex justify-between items-center mb-5">
                            <div className="relative w-96 max-w-[65%]">
                                <input
                                    type="text"
                                    placeholder={t("searchuser")}
                                    className="px-4 py-2 rounded-lg bg-gray-100 text-gray-900 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white w-full"
                                    value={searchTerm}
                                    onChange={e =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                                <span className="absolute top-0 md:right-4 tiny:right-2 right-1 mt-3 pointer-events-none">
                                    <FaSearch className="h-4 w-4 fill-current text-gray-800 dark:text-gray-500" />
                                </span>
                            </div>
                            <button
                                className="bg-orange-300 hover:bg-orange-400 sm:px-4 p-2 rounded-lg dark:bg-cyan-300 text-black dark:hover:bg-cyan-400 focus:outline-none focus:ring-2 transition duration-300 focus:ring-blue-600 border border-black focus:ring-opacity-50"
                                onClick={() => navigate("/createUser")}>
                                {t("adduser")}
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="text-black dark:text-white table w-full">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-4 py-2"
                                            onClick={() => handleSort("name")}>
                                            {t("name")}{" "}
                                            {sortOrder.column === "name" &&
                                                (sortOrder.ascending
                                                    ? "▲"
                                                    : "▼")}
                                        </th>
                                        <th
                                            className="px-4 py-2"
                                            onClick={() =>
                                                handleSort("lastname")
                                            }>
                                            {t("lastname")}{" "}
                                            {sortOrder.column === "lastname" &&
                                                (sortOrder.ascending
                                                    ? "▲"
                                                    : "▼")}
                                        </th>
                                        <th
                                            className="px-4 py-2"
                                            onClick={() => handleSort("email")}>
                                            {t("email")}{" "}
                                            {sortOrder.column === "email" &&
                                                (sortOrder.ascending
                                                    ? "▲"
                                                    : "▼")}
                                        </th>
                                        <th
                                            className="px-4 py-2"
                                            onClick={() => handleSort("role")}>
                                            {t("role")}{" "}
                                            {sortOrder.column === "role" &&
                                                (sortOrder.ascending
                                                    ? "▲"
                                                    : "▼")}
                                        </th>
                                        <th className="px-4 py-2">
                                            {t("actions")}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentUsers.map(user => (
                                        <tr key={user.id}>
                                            <td className="px-4 py-2 text-center">
                                                {user.name}
                                            </td>
                                            <td className="px-4 py-2 text-center">
                                                {user.lastname}
                                            </td>
                                            <td className="px-4 py-2 text-center">
                                                {user.email}
                                            </td>
                                            <td className="px-4 py-2 text-center">
                                                {user.role
                                                    .sort((a, b) =>
                                                        a.localeCompare(b)
                                                    )
                                                    .map((role, i) => {
                                                        return (
                                                            <button
                                                                key={i}
                                                                className="m-1 p-1 rounded-md bg-green-600 text-white">
                                                                {role}
                                                            </button>
                                                        );
                                                    })}
                                            </td>
                                            <td className="py-2 text-center">
                                                <button
                                                    key={user.id}
                                                    className="m-1 p-1.5 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mr-3"
                                                    onClick={() => {
                                                        setUser(user);
                                                        setIsOpenEdit(true);
                                                    }}>
                                                    <FaEdit />
                                                </button>
                                                <button
                                                    key={user.id}
                                                    className="p-1.5 text-xs rounded-lg bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                                                    onClick={() => {
                                                        setUser(user);
                                                        setIsOpenDelete(true);
                                                    }}>
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div className="tiny:w-96 text-gray-700 dark:text-gray-600">
                                {t("showing")} {indexOfFirstUser + 1} {t("to")}{" "}
                                {indexOfLastUser} {t("of")}{" "}
                                {
                                    store.users?.filter(user => {
                                        return user.id !== store.user.id;
                                    }).length
                                }{" "}
                                {t("entries")}
                            </div>
                            <div className="w-full overflow-auto flex justify-end">
                                <ul className="flex rounded list-none">
                                    <li>
                                        <button
                                            className="relative block p-2.5 leading-tight text-black border-r-0 rounded-l bg-orange-300 hover:bg-orange-400 dark:bg-cyan-300 dark:hover:bg-cyan-400 transition duration-300 focus:outline-none"
                                            onClick={() =>
                                                setCurrentPage(currentPage - 1)
                                            }
                                            disabled={currentPage === 1}>
                                            <span>{t("previous")}</span>
                                        </button>
                                    </li>
                                    {Array.from(
                                        {
                                            length: Math.ceil(
                                                store.users?.filter(user => {
                                                    return (
                                                        user.id !==
                                                        store.user.id
                                                    );
                                                }).length / usersPerPage
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
                                            className="bg-orange-300 hover:bg-orange-400 relative block p-2.5 leading-tight bg-w text-black dark:bg-cyan-300 rounded-r dark:hover:bg-cyan-400 transition duration-300 focus:outline-none"
                                            onClick={() =>
                                                setCurrentPage(currentPage + 1)
                                            }
                                            disabled={
                                                currentPage ===
                                                    Math.ceil(
                                                        store.users?.filter(
                                                            user => {
                                                                return (
                                                                    user.id !==
                                                                    store.user
                                                                        .id
                                                                );
                                                            }
                                                        ).length / usersPerPage
                                                    ) ||
                                                store.users?.filter(user => {
                                                    return (
                                                        user.id !==
                                                        store.user.id
                                                    );
                                                }).length < 1
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
    }
};
