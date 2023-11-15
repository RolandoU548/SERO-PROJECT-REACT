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
    const [fromDateFilter, setFromDateFilter] = useState("");
    const [toDateFilter, setToDateFilter] = useState("");
    const [invoiceFilter, setInvoiceFilter] = useState("");
    const [paymentsData, setPaymentData] = useState(store.payments);
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

    const sortedPayments = paymentsData.sort((a, b) => {
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
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        actions.getAllPayments();
        actions.getAllClients();
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setPaymentData(store.payments);
    }, [store.payments]);

    const handleAddPayment = () => {
        navigate("/steppayment");
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
                    src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fpayments%2FPaymentsBG.jpg?alt=media&token=16cd6fa6-1f35-4e44-b8cb-cab31db160ea"
                    className="invert w-screen h-screen -z-50 fixed object-cover bottom-0 left-0 dark:invert-0 transition duration-500"
                />
                <div className="font-serif text-black dark:text-white mt-28">
                    <h2 className="w-10/12 text-3xl minimum:text-4xl md:text-5xl lg:text-6xl font-black z-10 m-auto">
                        {t("payments")}
                    </h2>
                    <div className="glass p-10 mt-5 m-auto w-11/12">
                        <div className="flex justify-between items-center mb-5 gap-6">
                            <div className="flex items-center">
                                <label htmlFor="customerFilter">
                                    {t("client")}:
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="customerFilter"
                                        value={customerFilter}
                                        onChange={e =>
                                            setCustomerFilter(e.target.value)
                                        }
                                        placeholder="Filter by customer"
                                        className="border border-gray-400 rounded py-1 px-2 text-gray-400"
                                    />
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                                        <FaSearch className="w-4 h-4 text-gray-400" />
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label
                                    htmlFor="fromDateFilter"
                                    className="mr-2 ml-2">
                                    {t("from")}:
                                </label>
                                <input
                                    type="date"
                                    id="fromDateFilter"
                                    value={fromDateFilter}
                                    onChange={e =>
                                        setFromDateFilter(e.target.value)
                                    }
                                    className="border border-gray-400 rounded py-1 px-2 text-gray-400"
                                />
                                <label
                                    htmlFor="toDateFilter"
                                    className="mr-2 ml-2">
                                    {t("to")}:
                                </label>
                                <input
                                    type="date"
                                    id="toDateFilter"
                                    value={toDateFilter}
                                    onChange={e =>
                                        setToDateFilter(e.target.value)
                                    }
                                    className="border border-gray-400 rounded py-1 px-2 text-gray-400"
                                />
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="invoiceFilter">
                                    {t("invoice")}:
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="invoiceFilter"
                                        value={invoiceFilter}
                                        onChange={e =>
                                            setInvoiceFilter(e.target.value)
                                        }
                                        className="border border-gray-400 rounded py-1 px-2 pl-8 text-black ml-2"
                                    />
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                                        <FaSearch className="w-4 h-4 text-gray-400" />
                                    </span>
                                </div>
                            </div>
                            <button
                                className="flex items-center bg-cyan-400 hover:bg-cyan-500 text-black  text-md font-bold px-4 py-2 rounded-full"
                                onClick={handleAddPayment}>
                                <FaPlus className="mr-2" />
                                {t("add")}
                            </button>
                        </div>
                        <table className="table-auto w-full text-center">
                            <thead>
                                <tr className="border-b-4 border-y-blue-300">
                                    <th
                                        className=" py-4 text-lg font-bold cursor-pointer"
                                        onClick={() => handleSort("status")}>
                                        {t("status")}{" "}
                                        {sortColumn === "status" &&
                                            (sortDirection === "asc" ? (
                                                <FaSortUp className="inline-block ml-1" />
                                            ) : (
                                                <FaSortDown className="inline-block ml-1" />
                                            ))}
                                        {!sortColumn.includes("status") && (
                                            <FaSort className="inline-block ml-1" />
                                        )}
                                    </th>
                                    <th
                                        className="py-4 text-lg font-bold cursor-pointer"
                                        onClick={() => handleSort("method")}>
                                        {t("method")}{" "}
                                        {sortColumn === "method" &&
                                            (sortDirection === "asc" ? (
                                                <FaSortUp className="inline-block ml-1" />
                                            ) : (
                                                <FaSortDown className="inline-block ml-1" />
                                            ))}
                                        {!sortColumn.includes("method") && (
                                            <FaSort className="inline-block ml-1" />
                                        )}
                                    </th>
                                    <th
                                        className="py-4 text-lg font-bold cursor-pointer"
                                        onClick={() => handleSort("date")}>
                                        {t("date")}{" "}
                                        {sortColumn === "date" &&
                                            (sortDirection === "asc" ? (
                                                <FaSortUp className="inline-block ml-1" />
                                            ) : (
                                                <FaSortDown className="inline-block ml-1" />
                                            ))}
                                        {!sortColumn.includes("date") && (
                                            <FaSort className="inline-block ml-1" />
                                        )}
                                    </th>
                                    <th
                                        className="py-4 text-lg font-bold cursor-pointer"
                                        onClick={() => handleSort("client")}>
                                        {t("client")}{" "}
                                        {sortColumn === "client" &&
                                            (sortDirection === "asc" ? (
                                                <FaSortUp className="inline-block ml-1" />
                                            ) : (
                                                <FaSortDown className="inline-block ml-1" />
                                            ))}
                                        {!sortColumn.includes("client") && (
                                            <FaSort className="inline-block ml-1" />
                                        )}
                                    </th>
                                    <th
                                        className="py-4 text-lg font-bold cursor-pointer"
                                        onClick={() => handleSort("amount")}>
                                        {t("amount")}{" "}
                                        {sortColumn === "amount" &&
                                            (sortDirection === "asc" ? (
                                                <FaSortUp className="inline-block ml-1" />
                                            ) : (
                                                <FaSortDown className="inline-block ml-1" />
                                            ))}
                                        {!sortColumn.includes("amount") && (
                                            <FaSort className="inline-block ml-1" />
                                        )}
                                    </th>
                                    <th
                                        className="py-4 text-lg font-bold cursor-pointer"
                                        onClick={() => handleSort("invoice")}>
                                        {t("involice")}{" "}
                                        {sortColumn === "invoice" &&
                                            (sortDirection === "asc" ? (
                                                <FaSortUp className="inline-block ml-1" />
                                            ) : (
                                                <FaSortDown className="inline-block ml-1" />
                                            ))}
                                        {!sortColumn.includes("invoice") && (
                                            <FaSort className="inline-block ml-1" />
                                        )}
                                    </th>
                                    <th className="py-4 text-lg font-bold">
                                        {t("actions")}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {paymentsData.map(payment => (
                                    <tr key={payment.id}>
                                        <td className=" py-4">
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    payment.status !== "Paid"
                                                        ? "bg-red-700 text-white font-bold"
                                                        : "bg-green-700 text-white font-bold"
                                                }`}>
                                                {payment.status}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            {payment.method}
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
                                                className="ml-2 px-2 py-1 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
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
            </>
        );
    }
};
