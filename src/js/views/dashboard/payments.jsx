import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";
import { RingLoader } from "react-spinners";
import {
    FaPlus,
    FaSearch,
    FaFileAlt,
    FaSort,
    FaSortUp,
    FaSortDown
} from "react-icons/fa";

export const Payments = () => {
    const { store, actions } = useContext(Context);
    const [t] = useTranslation("payments");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [customerFilter, setCustomerFilter] = useState("");
    const [paymentsData, setPaymentData] = useState(store.payments);

    useEffect(() => {
        actions.getAllPayments();
        actions.getAllClients();
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const filterPayment = () => {
        if (store.clients.length > 0 && paymentsData.length > 0) {
            if (customerFilter) {
                const client = store.clients.find(client =>
                    `${client.name} ${client.lastname}`
                        .toLowerCase()
                        .includes(customerFilter.toLowerCase())
                );
                if (client) {
                    return paymentsData.filter(payment => {
                        const paymentClient = store.clients.find(
                            client => client.id === payment.client
                        );
                        return client.name === paymentClient.name;
                    });
                }
                return [];
            }
            return paymentsData;
        }
    };
    const [currentPayments, setCurrentPayments] = useState(filterPayment());

    const [sortColumn, setSortColumn] = useState("status");
    const [sortDirection, setSortDirection] = useState("asc");

    const handleSort = column => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    };

    currentPayments &&
        currentPayments.sort((a, b) => {
            const isAsc = sortDirection === "asc" ? 1 : -1;
            if (a[sortColumn] < b[sortColumn]) {
                return -1 * isAsc;
            } else if (a[sortColumn] > b[sortColumn]) {
                return 1 * isAsc;
            } else {
                return 0;
            }
        });

    useEffect(() => {
        setPaymentData(store.payments);
        setCurrentPayments(filterPayment());
    }, [store.payments]);

    useEffect(() => {
        setCurrentPayments(filterPayment());
    }, [customerFilter]);

    const handleAddPayment = () => {
        navigate("/steppayment");
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <RingLoader color="#26C6DA" loading={isLoading} size={100} />
            </div>
        );
    }
    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fpayments%2FPaymentsBG.jpg?alt=media&token=16cd6fa6-1f35-4e44-b8cb-cab31db160ea"
                className="invert w-screen h-screen -z-50 fixed object-cover bottom-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="font-serif text-black dark:text-white mt-28">
                <h2 className="w-10/12 text-3xl minimum:text-4xl md:text-5xl lg:text-6xl font-black z-10 text-black dark:text-white m-auto">
                    {t("payments")}
                </h2>
                <div className="glass p-[3vw] my-5 m-auto tiny:w-11/12 w-[98%]">
                    <div className="flex justify-between items-center mb-5 gap-6">
                        <div className="relative w-96 max-w-[65%]">
                            <input
                                type="text"
                                id="customerFilter"
                                value={customerFilter}
                                onChange={e =>
                                    setCustomerFilter(e.target.value)
                                }
                                placeholder={t("filterByCustomer")}
                                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-900 dark:text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:bg-white w-full"
                            />
                            <span className="absolute top-0 md:right-4 tiny:right-2 right-1 mt-3 pointer-events-none">
                                <FaSearch className="h-4 w-4 fill-current text-gray-800 dark:text-gray-500" />
                            </span>
                        </div>

                        <button
                            className="bg-orange-300 hover:bg-orange-400 sm:px-4 p-2 rounded-lg dark:bg-cyan-300 text-black dark:hover:bg-cyan-400 focus:outline-none focus:ring-2 transition duration-300 focus:ring-blue-600 border border-black focus:ring-opacity-50 flex items-center"
                            onClick={handleAddPayment}>
                            <span className="mr-2">{t("add")}</span>
                            <FaPlus />
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="text-black dark:text-white table w-full text-center">
                            <thead>
                                <tr className="border-b-4 border-y-blue-300">
                                    <th
                                        className="py-2 px-4 text-md font-bold"
                                        onClick={() => handleSort("status")}>
                                        <div className="flex items-center">
                                            {t("status")}{" "}
                                            {sortColumn === "status" && (
                                                <div className="ml-1">
                                                    {sortDirection === "asc" ? (
                                                        <FaSortUp className="inline-block" />
                                                    ) : (
                                                        <FaSortDown className="inline-block" />
                                                    )}
                                                </div>
                                            )}
                                            {!sortColumn.includes("status") && (
                                                <div className="ml-1">
                                                    <FaSort className="inline-block" />
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                    <th
                                        className="py-2 px-4 text-md font-bold"
                                        onClick={() => handleSort("method")}>
                                        <div className="flex items-center">
                                            {t("method")}{" "}
                                            {sortColumn === "method" && (
                                                <div className="ml-1">
                                                    {sortDirection === "asc" ? (
                                                        <FaSortUp className="inline-block" />
                                                    ) : (
                                                        <FaSortDown className="inline-block" />
                                                    )}
                                                </div>
                                            )}
                                            {!sortColumn.includes("method") && (
                                                <div className="ml-1">
                                                    <FaSort className="inline-block" />
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                    <th
                                        className="py-2 px-4 text-md font-bold"
                                        onClick={() => handleSort("date")}>
                                        <div className="flex items-center">
                                            {t("date")}{" "}
                                            {sortColumn === "date" && (
                                                <div className="ml-1">
                                                    {sortDirection === "asc" ? (
                                                        <FaSortUp className="inline-block" />
                                                    ) : (
                                                        <FaSortDown className="inline-block" />
                                                    )}
                                                </div>
                                            )}
                                            {!sortColumn.includes("date") && (
                                                <div className="ml-1">
                                                    <FaSort className="inline-block" />
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                    <th
                                        className="py-2 px-4 text-md font-bold"
                                        onClick={() => handleSort("client")}>
                                        <div className="flex items-center">
                                            {t("client")}{" "}
                                            {sortColumn === "client" && (
                                                <div className="ml-1">
                                                    {sortDirection === "asc" ? (
                                                        <FaSortUp className="inline-block" />
                                                    ) : (
                                                        <FaSortDown className="inline-block" />
                                                    )}
                                                </div>
                                            )}
                                            {!sortColumn.includes("client") && (
                                                <div className="ml-1">
                                                    <FaSort className="inline-block" />
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                    <th
                                        className="py-2 px-4 text-md font-bold"
                                        onClick={() => handleSort("amount")}>
                                        <div className="flex items-center">
                                            {t("amount")}{" "}
                                            {sortColumn === "amount" && (
                                                <div className="ml-1">
                                                    {sortDirection === "asc" ? (
                                                        <FaSortUp className="inline-block" />
                                                    ) : (
                                                        <FaSortDown className="inline-block" />
                                                    )}
                                                </div>
                                            )}
                                            {!sortColumn.includes("amount") && (
                                                <div className="ml-1">
                                                    <FaSort className="inline-block" />
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                    <th
                                        className="py-2 px-4 text-md font-bold"
                                        onClick={() => handleSort("invoice")}>
                                        <div className="flex items-center">
                                            {t("invoice")}{" "}
                                            {sortColumn === "invoice" && (
                                                <div className="ml-1">
                                                    {sortDirection === "asc" ? (
                                                        <FaSortUp className="inline-block" />
                                                    ) : (
                                                        <FaSortDown className="inline-block" />
                                                    )}
                                                </div>
                                            )}
                                            {!sortColumn.includes(
                                                "invoice"
                                            ) && (
                                                <div className="ml-1">
                                                    <FaSort className="inline-block" />
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                    <th className=" py-2 px-4 text-md font-bold">
                                        {t("actions")}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentPayments?.map(payment => (
                                    <tr key={payment.id}>
                                        <td className=" py-4">
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    payment.status !== "Paid"
                                                        ? "bg-red-700 text-white font-bold"
                                                        : "bg-green-700 text-white font-bold"
                                                }`}>
                                                {t(payment.status)}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            {t(
                                                payment.method
                                                    .replace(" ", "")
                                                    .toLowerCase()
                                            )}
                                        </td>
                                        <td className="py-4">{payment.date}</td>
                                        <td className="py-4">
                                            {
                                                store.clients.find(
                                                    client =>
                                                        client.id ===
                                                        payment.client
                                                )?.name
                                            }{" "}
                                            {
                                                store.clients.find(
                                                    client =>
                                                        client.id ===
                                                        payment.client
                                                )?.lastname
                                            }
                                        </td>
                                        <td className="py-4">
                                            {payment.amount}
                                        </td>
                                        <td className="py-4">
                                            {payment.invoice}
                                        </td>
                                        <td className="py-4">
                                            <button
                                                className="ml-2 px-2 py-1 text-xs rounded-lg bg-black dark:hover:text-black dark:text-cyan-300 border hover:text-black transition duration-300 border-black dark:border-cyan-300 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 bg-orange-300 hover:bg-orange-400 dark:bg-black dark:hover:bg-cyan-400"
                                                onClick={() =>
                                                    navigate(
                                                        `/creditmemo/${payment.id}`
                                                    )
                                                }>
                                                <FaFileAlt />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
