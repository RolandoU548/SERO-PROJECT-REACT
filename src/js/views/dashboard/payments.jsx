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
    const [sortOrder, setSortOrder] = useState({
        column: "status",
        ascending: true
    });

    useEffect(() => {
        actions.getAllPayments();
        actions.getAllClients();
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const currentPayments =
        store.payments &&
        store.payments.filter(payment => {
            if (customerFilter) {
                const client = store.clients.find(client =>
                    `${client.name} ${client.lastname}`
                        .toLowerCase()
                        .includes(customerFilter.toLowerCase())
                );
                if (client) {
                    return payment.client === client.id;
                }
            }
            return true;
        });

    // Labels Filtrados
    currentPayments &&
        currentPayments.sort((a, b) => {
            const isAsc = sortOrder.ascending ? 1 : -1;
            console.log("a: ", a);
            console.log("b: ", b);
            if (a[sortOrder.column] < b[sortOrder.column]) {
                return -1 * isAsc;
            } else if (a[sortOrder.column] > b[sortOrder.column]) {
                return 1 * isAsc;
            } else {
                return 0;
            }
        });

    const handleSort = column => {
        setSortOrder({
            column,
            ascending: sortOrder.column === column ? !sortOrder.ascending : true
        });
    };

    // sortPayments(currentPayments, sortOrder);

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
                                        <div className="flex items-center justify-center">
                                            {t("status")}{" "}
                                            {sortOrder.column === "status" ? (
                                                <div className="ml-1">
                                                    {sortOrder.ascending ? (
                                                        <FaSortUp className="inline-block" />
                                                    ) : (
                                                        <FaSortDown className="inline-block" />
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="ml-1">
                                                    <FaSort className="inline-block" />
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                    <th
                                        className="py-2 px-4 text-center text-md font-bold"
                                        onClick={() => handleSort("method")}>
                                        <div className="flex items-center justify-center">
                                            {t("method")}{" "}
                                            {sortOrder.column === "method" ? (
                                                <div className="ml-1">
                                                    {sortOrder.ascending ? (
                                                        <FaSortUp className="inline-block" />
                                                    ) : (
                                                        <FaSortDown className="inline-block" />
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="ml-1">
                                                    <FaSort className="inline-block" />
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                    <th
                                        className="py-2 px-4 text-center text-md font-bold"
                                        onClick={() => handleSort("date")}>
                                        <div className="flex items-center justify-center">
                                            {t("date")}{" "}
                                            {sortOrder.column === "date" ? (
                                                <div className="ml-1">
                                                    {sortOrder.ascending ? (
                                                        <FaSortUp className="inline-block" />
                                                    ) : (
                                                        <FaSortDown className="inline-block" />
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="ml-1">
                                                    <FaSort className="inline-block" />
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                    <th
                                        className="py-2 px-4 text-center text-md font-bold"
                                        onClick={() => handleSort("client")}>
                                        <div className="flex items-center justify-center">
                                            {t("client")}{" "}
                                            {sortOrder.column === "client" ? (
                                                <div className="ml-1">
                                                    {sortOrder.ascending ? (
                                                        <FaSortUp className="inline-block" />
                                                    ) : (
                                                        <FaSortDown className="inline-block" />
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="ml-1">
                                                    <FaSort className="inline-block" />
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                    <th
                                        className="py-2 px-4 text-center text-md font-bold"
                                        onClick={() => handleSort("amount")}>
                                        <div className="flex items-center justify-center">
                                            {t("amount")}{" "}
                                            {sortOrder.column === "amount" ? (
                                                <div className="ml-1">
                                                    {sortOrder.ascending ? (
                                                        <FaSortUp className="inline-block" />
                                                    ) : (
                                                        <FaSortDown className="inline-block" />
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="ml-1">
                                                    <FaSort className="inline-block" />
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                    <th
                                        className="py-2 px-4 text-center text-md font-bold"
                                        onClick={() => handleSort("invoice")}>
                                        <div className="flex items-center justify-center">
                                            {t("invoice")}{" "}
                                            {sortOrder.column === "invoice" ? (
                                                <div className="ml-1">
                                                    {sortOrder.ascending ? (
                                                        <FaSortUp className="inline-block" />
                                                    ) : (
                                                        <FaSortDown className="inline-block" />
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="ml-1">
                                                    <FaSort className="inline-block" />
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                    <th className=" py-2 px-4 text-center text-md font-bold">
                                        {t("actions")}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentPayments?.map(payment => (
                                    <tr key={payment.id}>
                                        <td className=" py-2">
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    payment.status !== "Paid"
                                                        ? "bg-red-700 text-white font-bold"
                                                        : "bg-green-700 text-white font-bold"
                                                }`}>
                                                {t(payment.status)}
                                            </span>
                                        </td>
                                        <td className="py-2">
                                            {t(payment.method.toLowerCase())}
                                        </td>
                                        <td className="py-2">{payment.date}</td>
                                        <td className="py-2">
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
                                        <td className="py-2">
                                            {payment.amount}
                                        </td>
                                        <td className="py-2">
                                            {payment.invoice}
                                        </td>
                                        <td className="py-2">
                                            <button
                                                className="ml-2 px-2 py-1 text-xs rounded-lg bg-black text-white border border-neutral-600 hover:bg-neutral-700  hover:border-cyan-300 hover:text-cyan-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
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
