import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";
import { FaPlus, FaSearch } from "react-icons/fa";

const paymentsData = [
    {
        id: 1,
        status: "Paid",
        method: "Credit Card",
        date: "2022-01-01",
        customer: "Samuel Carmona",
        amount: 5000.0,
        invoice: "INV-001"
    },
    {
        id: 2,
        status: "Paid",
        method: "Paypal",
        date: "2022-01-02",
        customer: "Rolando Uzcátegui",
        amount: 600.0,
        invoice: "INV-002"
    },
    {
        id: 3,
        status: "Paid",
        method: "Bank Transfer",
        date: "2022-01-03",
        customer: "Roberto Vargas",
        amount: 50.0,
        invoice: "INV-003"
    },
    {
        id: 4,
        status: "Pending",
        method: "Bank Transfer",
        date: "2022-01-03",
        customer: "Alexande De Matteo",
        amount: 500.0,
        invoice: "INV-004"
    },
    {
        id: 5,
        status: "Paid",
        method: "Bank Transfer",
        date: "2022-01-03",
        customer: "Sebastian Castro",
        amount: 20000000.0,
        invoice: "INV-005"
    },
    {
        id: 6,
        status: "Paid",
        method: "Paypal",
        date: "2022-01-03",
        customer: "Sebastian Lopez",
        amount: 300.0,
        invoice: "INV-006"
    }
];

export const Payments = () => {
    const [t] = useTranslation("payments");
    const navigate = useNavigate();
    const [customerFilter, setCustomerFilter] = useState("");
    const [fromDateFilter, setFromDateFilter] = useState("");
    const [toDateFilter, setToDateFilter] = useState("");
    const [invoiceFilter, setInvoiceFilter] = useState("");

    const filteredPaymentsData = paymentsData.filter(payment => {
        return (
            payment.customer
                .toLowerCase()
                .includes(customerFilter.toLowerCase()) &&
            payment.invoice
                .toLowerCase()
                .includes(invoiceFilter.toLowerCase()) &&
            (fromDateFilter === "" ||
                new Date(payment.date) >= new Date(fromDateFilter)) &&
            (toDateFilter === "" ||
                new Date(payment.date) <= new Date(toDateFilter))
        );
    });

    const handleAddPayment = () => {
        navigate("/steppayment");
    };

    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fpayments%2FPaymentsBG.jpg?alt=media&token=63e70794-5b13-4160-b6f8-0cdc1f68f7c1&_gl=1*uwspi8*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU2MTY2Ny4zLjAuMA.."
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="font-serif text-black dark:text-white mt-28">
                <h2 className="w-10/12 text-3xl minimum:text-4xl md:text-5xl lg:text-6xl font-black z-10 m-auto">
                    {t("payments")}
                </h2>
                <div className="glass p-10 mt-5 m-auto w-11/12">
                    <div className="flex justify-between items-center mb-5 gap-6">
                        <div className="flex items-center">
                            <label htmlFor="customerFilter">Customer:</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="customerFilter"
                                    value={customerFilter}
                                    onChange={e =>
                                        setCustomerFilter(e.target.value)
                                    }
                                    className="border border-gray-400 rounded py-1 px-2 pl-8 text-black ml-2"
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
                                From:
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
                            <label htmlFor="toDateFilter" className="mr-2 ml-2">
                                To:
                            </label>
                            <input
                                type="date"
                                id="toDateFilter"
                                value={toDateFilter}
                                onChange={e => setToDateFilter(e.target.value)}
                                className="border border-gray-400 rounded py-1 px-2 text-gray-400"
                            />
                        </div>
                        {/* <div className="flex items-center">
                        </div> */}
                        <div className="flex items-center">
                            <label htmlFor="invoiceFilter">Invoice:</label>
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
                            Add
                        </button>
                    </div>
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="border-b-4 border-y-blue-300">
                                <th className="px-4 py-4 text-lg font-bold">
                                    Status
                                </th>
                                <th className="px-4 py-4 text-lg font-bold">
                                    Method
                                </th>
                                <th className="px-4 py-4 text-lg font-bold">
                                    Date
                                </th>
                                <th className="px-4 py-4 text-lg font-bold">
                                    Customer
                                </th>
                                <th className="px-4 py-4 text-lg font-bold">
                                    Amount
                                </th>
                                <th className="px-4 py-4 text-lg font-bold">
                                    Invoice
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPaymentsData.map(payment => (
                                <tr
                                    key={payment.id}
                                    className="border-b-2 border-gray-400 text-center">
                                    <td className="px-4 py-4 text-md font-bold">
                                        <button
                                            className={`rounded-full ${
                                                payment.status === "Paid"
                                                    ? "bg-green-500"
                                                    : "bg-red-500"
                                            } text-white font-bold py-2 px-4 rounded`}>
                                            {payment.status}
                                        </button>
                                    </td>
                                    <td className="px-4 py-4 text-md">
                                        {payment.method}
                                    </td>
                                    <td className="px-4 py-4 text-md">
                                        {payment.date}
                                    </td>
                                    <td className="px-4 py-4 text-md">
                                        {payment.customer}
                                    </td>
                                    <td className="px-4 py-4 text-md">
                                        {payment.amount}
                                    </td>
                                    <td className="px-4 py-4 text-md">
                                        {payment.invoice}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
