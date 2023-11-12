import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";

export const CreditMemo = ({ id }) => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        invoice: "",
        date: "",
        service: "",
        amount: "",
        client: "",
        method: "",
        description: ""
    });

    useEffect(() => {
        actions.getAllClients();
        const payment = store.payments.find(payment => payment.id === id);
        if (payment) {
            setFormData({
                invoice: payment.invoice,
                date: payment.date,
                service: payment.service,
                amount: payment.amount,
                client: payment.client,
                method: payment.method,
                description: payment.description
            });
        }
    }, [id]);

    console.log(formData.date);

    const handleFormSubmit = () => {
        actions.createPayment(formData);
    };

    return (
        <div className="font-serif text-gray-200 mt-28">
            <div className="flex items-center">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-black dark:text-white m-auto">
                    Create Credit
                </h1>
            </div>
            <div className="glass p-10 mt-5 m-auto w-11/12">
                <form onSubmit={handleFormSubmit}>
                    <div className="flex flex-col-2 flex-row justify-center">
                        <div className="w-full md:w-1/2 pr-10">
                            <label
                                htmlFor="date"
                                className="block text-white font-bold mb-2">
                                Date
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="date"
                                    name="date"
                                    className="border border-gray-400 text-black rounded-md py-2 px-3 mb-4 w-full pr-10"
                                    required
                                    value={formData.date}
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <MdDateRange className="h-5 w-5 text-cyan-400 " />
                                </span>
                            </div>
                            <label
                                htmlFor="client"
                                className="block text-white font-bold mb-2">
                                Client
                            </label>
                            <select
                                id="client"
                                name="client"
                                className="border border-gray-400 text-black rounded-md py-2 px-3 mb-4 w-full"
                                required
                                value={formData.client}>
                                <option value="">Select a client</option>
                                {store.clients.map(client => (
                                    <option key={client.id} value={client.id}>
                                        {client.name} {client.lastname}
                                    </option>
                                ))}
                            </select>
                            <label
                                htmlFor="services"
                                className="block text-white font-bold mb-2">
                                Services
                            </label>
                            <select
                                id="services"
                                name="services"
                                className="border border-gray-400 text-black rounded-md py-2 px-3 mb-4 w-full"
                                required
                                value={formData.service}>
                                <option value="">Select a service</option>
                                <option value="Service 1">Service 1</option>
                                <option value="Service 2">Service 2</option>
                                <option value="Service 3">Service 3</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <div>
                                <label
                                    htmlFor="invoice"
                                    className="block text-white font-bold mb-2">
                                    Invoice
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="invoice"
                                        name="invoice"
                                        className="border border-gray-400 text-black rounded-md py-2 px-3 mb-4 w-full pr-10"
                                        required
                                        value={formData.invoice}
                                    />
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <FaFileInvoice className="h-5 w-5 text-cyan-400" />
                                    </span>
                                </div>
                                <label
                                    htmlFor="amount"
                                    className="block text-white font-bold mb-2">
                                    Amount
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        id="amount"
                                        name="amount"
                                        className="border border-gray-400 text-black rounded-md py-2 px-3 mb-4 w-full pr-10"
                                        required
                                        value={formData.amount}
                                    />
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <AiOutlineDollar className="h-6 w-6 text-cyan-400" />
                                    </span>
                                </div>
                                <label
                                    htmlFor="description"
                                    className="block text-white font-bold mb-2">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    className="border border-gray-400 text-black rounded-md py-2 px-3 mb-4 w-full"
                                    required
                                    value={formData.description}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-cyan-300 text-black py-2 px-4 rounded-md mt-4"
                            onClick={() => {
                                handleFormSubmit();
                                navigate("/payments");
                            }}>
                            Create Credit Memo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
CreditMemo.propTypes = {
    id: PropTypes.number
};
