import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../../css/app.css";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";
import { FaPlus, FaSearch, FaEdit } from "react-icons/fa";
import { ModalDeletePayment } from "../../components/dashpayments/deletepaymentmodal";
// import * as XLSX from "xlsx";

export const Payments = () => {
    const { store, actions } = useContext(Context);
    const [t] = useTranslation("payments");
    const navigate = useNavigate();
    const [customerFilter, setCustomerFilter] = useState("");
    const [fromDateFilter, setFromDateFilter] = useState("");
    const [toDateFilter, setToDateFilter] = useState("");
    const [invoiceFilter, setInvoiceFilter] = useState("");
    const [paymentsData, setPaymentData] = useState(store.payments);

    useEffect(() => {
        actions.getAllPayments();
        actions.getAllClients();
    }, []);

    useEffect(() => {
        setPaymentData(store.payments);
    }, [store.payments]);

    const handleAddPayment = () => {
        navigate("/steppayment");
        generateCurrentDate();
    };

    const handleEditPayment = id => {
        navigate(`/editpayment/${id}`);
    };

    const deletePayment = id => {
        const updatedPayments = paymentsData.filter(
            payment => payment.id !== id
        );
        setPaymentData(updatedPayments);
        actions.deletePayment(id);
    };

    // const handleExport = async () => {
    //     const headers = [
    //         "ID",
    //         "Customer",
    //         "Invoice",
    //         "Payment Date",
    //         "Payment Method",
    //         "Amount",
    //         "Status"
    //     ];
    //     const data = paymentsData.map(payment => [
    //         payment.id,
    //         payment.customer,
    //         payment.invoice,
    //         payment.payment_date,
    //         payment.payment_method,
    //         payment.amount,
    //         payment.status
    //     ]);
    //     const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    //     const workbook = XLSX.utils.book_new();
    //     XLSX.utils.book_append_sheet(workbook, worksheet, "Payments");
    //     XLSX.writeFile(workbook, "payments.xlsx");

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
                        {/* <button onClick={handleExport}>Export to Excel</button> */}
                        <button
                            className="flex items-center bg-cyan-400 hover:bg-cyan-500 text-black  text-md font-bold px-4 py-2 rounded-full"
                            onClick={handleAddPayment}>
                            <FaPlus className="mr-2" />
                            Add
                        </button>
                    </div>
                    <table className="table-auto w-full text-center">
                        <thead>
                            <tr className="border-b-4 border-y-blue-300">
                                <th className=" py-4 text-lg font-bold">
                                    Status
                                </th>
                                <th className="py-4 text-lg font-bold">
                                    Method
                                </th>
                                <th className="py-4 text-lg font-bold">Date</th>
                                <th className="py-4 text-lg font-bold">
                                    Customer
                                </th>
                                <th className="py-4 text-lg font-bold">
                                    Amount
                                </th>
                                <th className="py-4 text-lg font-bold">
                                    Invoice
                                </th>
                                <th className="py-4 text-lg font-bold">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentsData.map(payment => (
                                <tr key={payment.id}>
                                    <td className=" py-4">
                                        <span
                                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                payment.status === "paid"
                                                    ? "bg-red-700 text-white font-bold"
                                                    : "bg-green-700 text-white font-bold"
                                            }`}>
                                            {payment.status}
                                        </span>
                                    </td>
                                    <td className="py-4">{payment.method}</td>
                                    <td className="py-4">{payment.date}</td>
                                    <td className="py-4">
                                        {
                                            store.clients.find(
                                                client =>
                                                    client.id === payment.client
                                            )?.name
                                        }{" "}
                                        {
                                            store.clients.find(
                                                client =>
                                                    client.id === payment.client
                                            )?.lastname
                                        }
                                    </td>
                                    <td className="py-4">{payment.amount}</td>
                                    <td className="py-4">{payment.invoice}</td>
                                    <td className="py-4">
                                        <button
                                            className="ml-2 px-2 py-1 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                            onClick={() =>
                                                handleEditPayment(payment.id)
                                            }>
                                            <FaEdit />
                                        </button>
                                        <ModalDeletePayment
                                            id={payment.id}
                                            deletePayment={deletePayment}
                                        />
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
