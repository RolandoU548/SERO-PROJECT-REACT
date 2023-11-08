import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
import { FaCreditCard, FaFileInvoice } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import PayPalButton from "./PayPalButton";

export const StepPayment = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const clients = store.clients;
    const client = clients.find(c => c.id === id);
    const [t] = useTranslation("steppayment");
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [paymentMethod, setPaymentMethod] = useState("creditCard");

    useEffect(() => {
        actions.getAllClients();
    }, []);

    const handleFormSubmit = e => {
        e.preventDefault();
        setStep(2);
    };

    const handlePaymentMethod = method => {
        const paymentMethod = method === "paypal" ? "Paypal" : "Credit Card";
        setFormData(prevFormData => ({
            ...prevFormData,
            method: paymentMethod
        }));
    };

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            method: "Credit Card"
        }));
    }, []);

    const handlePaymentSubmit = () => {
        actions.createPayment({ ...formData, status: "Paid" });
        setStep(3);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleReset = () => {
        setStep(1);
        setFormData({});
        setPaymentMethod("creditCard");
    };

    const generateInvoiceNumber = () => {
        const invoiceNumber = `INV-${Math.floor(Math.random() * 1000000)}`;
        setFormData(prevFormData => ({
            ...prevFormData,
            invoice: invoiceNumber
        }));
    };

    const generateCurrentDate = () => {
        const currentDate = new Date().toLocaleDateString();
        setFormData(prevFormData => ({
            ...prevFormData,
            date: currentDate
        }));
    };

    const handleServiceChange = e => {
        setFormData({
            ...formData,
            service: e.target.value
        });
    };

    const handleDescriptionChange = e => {
        setFormData({
            ...formData,
            description: e.target.value
        });
    };

    const handleClientChange = e => {
        const selectedClientId = e.target.value;
        const selectedClient = clients.find(
            client => client.name === selectedClientId
        );
        setFormData(prevFormData => ({
            ...prevFormData,
            client: selectedClient.id
        }));
    };

    const handleAmountChange = e => {
        const amount = parseFloat(e.target.value).toFixed(2);
        setFormData({
            ...formData,
            amount: amount
        });
    };

    return (
        <div className="font-serif text-gray-200 mt-28">
            <div className="flex items-center">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-black dark:text-white m-auto">
                    {t("Make a Payment")}
                </h1>
            </div>
            <div className="px-10 mt-5 m-auto w-11/12">
                <div className="font-serif text-black dark:text-white mt-16">
                    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                        <li
                            className={`flex md:w-full items-center ${
                                step >= 1
                                    ? "text-blue-600 dark:text-blue-500 sm:after:inline-block after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
                                    : ""
                            }`}>
                            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                <svg
                                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="mr-2">1</span>
                                Information
                            </span>
                        </li>
                        <li
                            className={`flex md:w-full items-center ${
                                step >= 2
                                    ? "text-blue-600 dark:text-blue-500 sm:after:inline-block after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
                                    : ""
                            }`}>
                            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                <svg
                                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="mr-2">2</span>
                                Payment
                            </span>
                        </li>
                        <li
                            className={`flex items-center ${
                                step >= 3
                                    ? "text-blue-600 dark:text-blue-500"
                                    : ""
                            }`}>
                            <svg
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="mr-2">3</span>
                            Confirmation
                        </li>
                    </ol>
                    {step === 1 && (
                        <div className="glass p-10 mt-5 m-auto w-11/12">
                            <form onSubmit={handleFormSubmit}>
                                <div className="flex flex-col-2 flex-row justify-center">
                                    <div className="w-full md:w-1/2 pr-10">
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
                                            onChange={handleClientChange}>
                                            <option value="">
                                                Select a client
                                            </option>
                                            {clients.map(client => (
                                                <option
                                                    key={client.id}
                                                    value={client.name}>
                                                    {client.name}
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
                                            onChange={handleServiceChange}>
                                            <option value="">
                                                Select a service
                                            </option>
                                            <option value="Service 1">
                                                Service 1
                                            </option>
                                            <option value="Service 2">
                                                Service 2
                                            </option>
                                            <option value="Service 3">
                                                Service 3
                                            </option>
                                        </select>
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
                                            onChange={
                                                handleDescriptionChange
                                            }></textarea>
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
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
                                                onChange={handleAmountChange}
                                            />
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                                <AiOutlineDollar className="h-5 w-5 text-gray-400" />
                                            </span>
                                        </div>
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
                                                readOnly
                                            />
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                                <FaFileInvoice className="h-5 w-5 text-gray-400" />
                                            </span>
                                        </div>
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
                                                readOnly
                                            />
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                                <MdDateRange className="h-5 w-5 text-gray-400" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
                                        Next
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-green-500 ml-2 text-white py-2 px-4 rounded-md mt-4"
                                        onClick={() => {
                                            generateInvoiceNumber();
                                            generateCurrentDate();
                                        }}>
                                        Generate
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="glass p-10 mt-5 m-auto w-11/12">
                            <form onSubmit={handlePaymentSubmit}>
                                <div className="flex justify-center items-center mb-10">
                                    <button
                                        type="button"
                                        className={`${
                                            paymentMethod === "creditCard"
                                                ? "bg-blue-500 text-white"
                                                : "bg-gray-200 text-gray-700"
                                        } py-2 px-4 rounded-l-lg`}
                                        onClick={() =>
                                            handlePaymentMethod("creditCard")
                                        }>
                                        <FaCreditCard className="h-5 w-5 mr-2" />
                                        Credit Card
                                    </button>
                                    <button
                                        type="button"
                                        className={`${
                                            paymentMethod === "paypal"
                                                ? "bg-blue-500 text-white"
                                                : "bg-gray-200 text-gray-700"
                                        } py-2 px-4 rounded-r-lg`}
                                        onClick={() =>
                                            handlePaymentMethod("paypal")
                                        }>
                                        <PayPalButton />
                                    </button>
                                </div>
                                {paymentMethod === "creditCard" && (
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="cardNumber"
                                            className="mb-2">
                                            Card Number
                                        </label>
                                        <input
                                            type="text"
                                            id="cardNumber"
                                            name="cardNumber"
                                            className="border border-gray-400 rounded-md py-2 px-3 mb-4 text-black"
                                            required
                                        />
                                        <label
                                            htmlFor="cardName"
                                            className="mb-2">
                                            Card Name
                                        </label>
                                        <input
                                            type="text"
                                            id="cardName"
                                            name="cardName"
                                            className="border border-gray-400 rounded-md py-2 px-3 mb-4 text-black"
                                            required
                                        />
                                        <label
                                            htmlFor="cardExpiration"
                                            className="mb-2">
                                            Card Expiration
                                        </label>
                                        <input
                                            type="text"
                                            id="cardExpiration"
                                            name="cardExpiration"
                                            className="border border-gray-400 rounded-md py-2 px-3 mb-4 text-black"
                                            required
                                        />
                                        <label
                                            htmlFor="cardCvv"
                                            className="mb-2">
                                            Card CVV
                                        </label>
                                        <input
                                            type="text"
                                            id="cardCvv"
                                            name="cardCvv"
                                            className="border border-gray-400 rounded-md py-2 px-3 mb-4 text-black"
                                            required
                                        />
                                    </div>
                                )}
                                <div className="flex justify-between">
                                    <button
                                        type="button"
                                        className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md mt-4"
                                        onClick={handleBack}>
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
                                        Pay
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    {step === 3 && (
                        <div className="glass p-10 mt-5 m-auto w-11/12">
                            <h1 className="text-2xl font-bold mb-4">
                                Payment Summary
                            </h1>
                            <p>Invoice: {formData.invoice}</p>
                            <p>Date: {formData.date}</p>
                            <p>Service: {formData.service}</p>
                            <p>Amount: {formData.amount}</p>
                            <p>Client: {formData.client}</p>
                            <p>Payment Method: {formData.method}</p>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md mt-4"
                                    onClick={handleBack}>
                                    Back
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-500 text-white py-2 px-4 rounded-md mt-4"
                                    onClick={handleReset}>
                                    Start Over
                                </button>
                                <button
                                    type="button"
                                    className="bg-green-500 text-white py-2 px-4 rounded-md mt-4"
                                    onClick={() => {
                                        handlePaymentSubmit();
                                    }}>
                                    Confirm
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
