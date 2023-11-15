import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import { FaCreditCard, FaFileInvoice, FaFilePdf } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { storage } from "../../components/firebase/firebase";
import { ref as storageRef, uploadBytes } from "firebase/storage";
import ReactCardFlip from "react-card-flip";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const StepPayment = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const clients = store.clients;
    const [t] = useTranslation("payments");
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [paymentMethod, setPaymentMethod] = useState("creditCard");
    const [fileList, setFileList] = useState([]);
    const [filesUploaded, setFilesUploaded] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardExpiration, setCardExpiration] = useState("");
    const [cardCvv, setCardCvv] = useState("");
    const notify = () =>
        toast.success(t("paymentcreated"), {
            position: "bottom-right",
            style: {
                background: "rgba(23, 23, 23, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px 0 rgba(77, 208, 225, 0.37)",
                color: "#fff",
                borderRadius: "10px"
            }
        });
    const notifyFiles = () =>
        toast.success(t("fileuploaded"), {
            position: "bottom-right",
            style: {
                background: "rgba(23, 23, 23, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px 0 rgba(77, 208, 225, 0.37)",
                color: "#fff",
                borderRadius: "10px"
            }
        });

    useEffect(() => {
        actions.getAllClients();
        generateCurrentDate();
    }, []);

    const handleCardNameChange = e => {
        setCardName(e.target.value);
    };

    const handleCardNumberChange = e => {
        setCardNumber(e.target.value);
    };

    const handleCardExpirationChange = e => {
        setCardExpiration(e.target.value);
        if (e.target.value.length === 4) {
            setIsFlipped(true);
        } else if (e.target.value.length < 4) {
            setIsFlipped(false);
        }
    };

    const handleCardCvvChange = e => {
        setCardCvv(e.target.value);
        if (e.target.value.length === 3) {
            setIsFlipped(false);
        }
    };

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
        notify();
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

    const handleInvoiceChange = e => {
        const invoice = e.target.value;
        setFormData(prevFormData => ({
            ...prevFormData,
            invoice: invoice
        }));
        setFormData({
            ...formData,
            invoice
        });
    };

    const handleFileChange = event => {
        const newFiles = Array.from(event.target.files);
        setFileList([...fileList, ...newFiles]);
    };

    const handleFileDelete = index => {
        const newFiles = [...fileList];
        newFiles.splice(index, 1);
        setFileList(newFiles);
    };

    const handleSubmit = async () => {
        const archives = [];
        for (let i = 0; i < fileList.length; i++) {
            const file = fileList[i];
            const imageRef = storageRef(
                storage,
                `clientFiles/$clientFile_${formData.client}_${file.name}`
            );
            const uploadTask = uploadBytes(imageRef, file);
            archives.push(uploadTask);
        }
        await Promise.all(archives);
        setFilesUploaded(true);
        notifyFiles();
        setFileList([]);
    };

    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fpayments%2FPaymentsBG.jpg?alt=media&token=16cd6fa6-1f35-4e44-b8cb-cab31db160ea"
                className="invert w-screen h-screen -z-50 fixed object-cover bottom-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="font-serif text-gray-200 mt-28">
                <div className="flex items-center">
                    <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-black dark:text-white m-auto">
                        {t("createpayment")}
                    </h1>
                </div>
                <div className="px-10 mt-5 m-auto w-3/4">
                    <div className="font-serif text-black dark:text-white mt-16">
                        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                            <li
                                className={`flex md:w-full items-center ${
                                    step >= 1
                                        ? "text-cyan-300 dark:text-cyan-300 sm:after:inline-block after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
                                        : ""
                                }`}>
                                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-cyan-300 dark:after:text-cyan-300">
                                    <svg
                                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="mr-2">1</span>
                                    {t("information")}
                                </span>
                            </li>
                            <li
                                className={`flex md:w-full items-center ${
                                    step >= 2
                                        ? "text-cyan-300 dark:text-cyan-300 sm:after:inline-block after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
                                        : ""
                                }`}>
                                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-cyan-300 dark:after:text-cyan-300">
                                    <svg
                                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="mr-2">2</span>
                                    {t("pay")}
                                </span>
                            </li>
                            <li
                                className={`flex items-center ${
                                    step >= 3
                                        ? "text-cyan-300 dark:text-cyan-300"
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
                                {t("confirmation")}
                            </li>
                        </ol>
                        {step === 1 && (
                            <div className="glass p-10 mt-5 m-auto w-11/12">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="flex flex-col-2 flex-row justify-center">
                                        <div className="w-full md:w-1/2 pr-10">
                                            <label
                                                htmlFor="date"
                                                className="block text-white font-bold mb-2">
                                                {t("date")}
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
                                                    <MdDateRange className="h-5 w-5 text-cyan-400 " />
                                                </span>
                                            </div>
                                            <label
                                                htmlFor="client"
                                                className="block text-white font-bold mb-2">
                                                {t("client")}
                                            </label>
                                            <select
                                                id="client"
                                                name="client"
                                                className="border border-gray-400 text-black rounded-md py-2 px-3 mb-4 w-full"
                                                required
                                                onChange={handleClientChange}>
                                                <option value="">
                                                    {t("selectclient")}
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
                                                {t("services")}
                                            </label>
                                            <select
                                                id="services"
                                                name="services"
                                                className="border border-gray-400 text-black rounded-md py-2 px-3 mb-4 w-full"
                                                required
                                                onChange={handleServiceChange}>
                                                <option value="">
                                                    {t("selectServices")}
                                                </option>
                                                <option value="Service 1">
                                                    {t("service1")}
                                                </option>
                                                <option value="Service 2">
                                                    {t("service2")}
                                                </option>
                                                <option value="Service 3">
                                                    {t("service3")}
                                                </option>
                                            </select>
                                        </div>
                                        <div className="w-full md:w-1/2 px-2">
                                            <div>
                                                <label
                                                    htmlFor="invoice"
                                                    className="block text-white font-bold mb-2">
                                                    {t("invoice")}
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        id="invoice"
                                                        name="invoice"
                                                        className="border border-gray-400 text-black rounded-md py-2 px-3 mb-4 w-full pr-10"
                                                        required
                                                        onChange={
                                                            handleInvoiceChange
                                                        }
                                                    />
                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                                        <FaFileInvoice className="h-5 w-5 text-cyan-400" />
                                                    </span>
                                                </div>
                                                <label
                                                    htmlFor="amount"
                                                    className="block text-white font-bold mb-2">
                                                    {t("amount")}
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="number"
                                                        id="amount"
                                                        name="amount"
                                                        className="border border-gray-400 text-black rounded-md py-2 px-3 mb-4 w-full pr-10"
                                                        required
                                                        onChange={
                                                            handleAmountChange
                                                        }
                                                    />
                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                                        <AiOutlineDollar className="h-6 w-6 text-cyan-400" />
                                                    </span>
                                                </div>
                                                <label
                                                    htmlFor="description"
                                                    className="block text-white font-bold mb-2">
                                                    {t("description")}
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
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="bg-cyan-300 text-black py-2 px-4 rounded-md mt-4">
                                            {t("next")}
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
                                                    ? "bg-black text-cyan-300 border border-cyan-300"
                                                    : "bg-gray-200 text-gray-700"
                                            } py-2 px-4 rounded-l-lg`}
                                            onClick={() =>
                                                handlePaymentMethod(
                                                    "creditCard"
                                                )
                                            }>
                                            <FaCreditCard className="h-5 w-5 mr-2" />
                                            {t("creditcard")}
                                        </button>
                                        <button
                                            type="button"
                                            className={`${
                                                paymentMethod === "paypal"
                                                    ? "bg-black text-cyan-300 border border-cyan-300"
                                                    : "bg-black text-cyan-300 border border-cyan-300"
                                            } py-2 px-4 rounded-r-lg`}
                                            onClick={() =>
                                                navigate("/PayPalButton")
                                            }>
                                            <FaCreditCard className="h-5 w-5 mr-2" />
                                            {t("paypal")}
                                        </button>
                                    </div>
                                    {paymentMethod === "creditCard" && (
                                        <div>
                                            <ReactCardFlip
                                                isFlipped={isFlipped}
                                                flipDirection="horizontal">
                                                <div key="front">
                                                    <div
                                                        className={`glass w-128 h-72 m-auto bg-red-100 rounded-xxl relative text-white shadow-2xl`}
                                                        style={{
                                                            width: "512px",
                                                            height: "288px",
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            justifyContent:
                                                                "space-between",
                                                            padding: "20px",
                                                            boxSizing:
                                                                "border-box",
                                                            backgroundImage:
                                                                "url('../../../../public/bg-card.jpeg')",
                                                            backgroundColor:
                                                                "gray",
                                                            backgroundSize:
                                                                "cover",
                                                            backgroundPosition:
                                                                "center",
                                                            position:
                                                                "relative",
                                                            transformOrigin:
                                                                "center",
                                                            transitionProperty:
                                                                "transform"
                                                        }}>
                                                        <div className="flex justify-between">
                                                            <p className="font-bold">
                                                                {t("serobank")}
                                                            </p>
                                                            <div>
                                                                <img
                                                                    className="w-25 h-10 mt-2"
                                                                    src="../../../../public/visa-logo-png-2026.png"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="flex justify-between">
                                                            <div className="flex flex-col w-2/3">
                                                                <p className="font-light self-start mt-2">
                                                                    {t("name")}
                                                                </p>
                                                                <div className="flex justify-between">
                                                                    <input
                                                                        type="text"
                                                                        id="cardName"
                                                                        name="cardName"
                                                                        className="text-white bg-transparent border-b-2 border-white w-full"
                                                                        placeholder="Roberto J. Vargas"
                                                                        value={
                                                                            cardName
                                                                        }
                                                                        onChange={
                                                                            handleCardNameChange
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col w-full">
                                                            <div className="flex justify-between">
                                                                <p className="font-light">
                                                                    {t(
                                                                        "cardnumber"
                                                                    )}
                                                                </p>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <input
                                                                    type="text"
                                                                    id="cardNumber"
                                                                    name="cardNumber"
                                                                    className="text-white bg-transparent border-b-2 border-white w-full"
                                                                    placeholder="0000 0000 0000 0000"
                                                                    value={
                                                                        cardNumber
                                                                    }
                                                                    onChange={
                                                                        handleCardNumberChange
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <div className="flex flex-col w-1/2">
                                                                <div className="flex justify-between">
                                                                    <p className="font-light text-xs">
                                                                        {t(
                                                                            "expiry"
                                                                        )}
                                                                    </p>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <input
                                                                        type="text"
                                                                        id="cardExpiration"
                                                                        name="cardExpiration"
                                                                        className="text-white bg-transparent border-b-2 border-white w-full"
                                                                        placeholder={t(
                                                                            "expirydate"
                                                                        )}
                                                                        value={
                                                                            cardExpiration
                                                                        }
                                                                        onChange={e => {
                                                                            handleCardExpirationChange(
                                                                                e
                                                                            );
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div key="back">
                                                    <div
                                                        className={`glass w-128 h-72 m-auto bg-red-100 rounded-xxl relative text-white shadow-2xl `}
                                                        style={{
                                                            width: "512px",
                                                            height: "288px",
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            justifyContent:
                                                                "space-between",
                                                            padding: "20px",
                                                            boxSizing:
                                                                "border-box",
                                                            backgroundImage:
                                                                "url('../../../../public/bg-card.jpeg')",
                                                            backgroundColor:
                                                                "gray",
                                                            backgroundSize:
                                                                "cover",
                                                            backgroundPosition:
                                                                "center",
                                                            position:
                                                                "relative",
                                                            transformOrigin:
                                                                "center",
                                                            transitionDuration:
                                                                "2s",
                                                            transitionProperty:
                                                                "transform"
                                                        }}>
                                                        <div className="flex justify-between">
                                                            <p className="font-bold">
                                                                {t("serobank")}
                                                            </p>
                                                            <div>
                                                                <img
                                                                    className="w-25 h-10 mt-2"
                                                                    src="../../../../public/visa-logo-png-2026.png"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col justify-center items-center w-full mt-16">
                                                            <div className="flex flex-col justify-between">
                                                                <div className="flex justify-center">
                                                                    <p className="font-light text-xs">
                                                                        {t(
                                                                            "cvv"
                                                                        )}
                                                                    </p>
                                                                </div>
                                                                <div className="flex justify-between mb-24">
                                                                    <input
                                                                        type="text"
                                                                        id="cardCvv"
                                                                        name="cardCvv"
                                                                        className="text-white bg-transparent border-b-2 border-white w-full"
                                                                        placeholder="123"
                                                                        value={
                                                                            cardCvv
                                                                        }
                                                                        onChange={e => {
                                                                            handleCardCvvChange(
                                                                                e
                                                                            );
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ReactCardFlip>
                                        </div>
                                    )}
                                    <div className="flex justify-between">
                                        <button
                                            type="button"
                                            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md mt-4"
                                            onClick={handleBack}>
                                            {t("back")}
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-cyan-300 text-black py-2 px-4 rounded-md mt-4"
                                            onClick={() => setStep(3)}>
                                            {t("paynow")}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                        {step === 3 && (
                            <div className="glass p-10 mt-5 m-auto w-3/4">
                                <div className="p-5 m-auto w-15/12">
                                    <h2 className="text-2xl pb-5 font-bold mb-5 text-center">
                                        {t("paymentsummary")}
                                    </h2>
                                    <div className="grid grid-cols-2 justify-items-center">
                                        <div>
                                            <p className="font-bold text-lg">
                                                {t("invoice")}:
                                            </p>
                                            <p className="font-bold text-lg">
                                                {t("date")}:
                                            </p>
                                            <p className="font-bold text-lg">
                                                {t("services")}:
                                            </p>
                                            <p className="font-bold text-lg">
                                                {t("amount")}:
                                            </p>
                                            <p className="font-bold text-lg">
                                                {t("client")}:
                                            </p>
                                            <p className="font-bold text-lg">
                                                {t("mehtod")}:
                                            </p>
                                        </div>
                                        <div className="font-bold text-lg">
                                            <p>{formData.invoice}</p>
                                            <p>{formData.date}</p>
                                            <p>{formData.service}</p>
                                            <p>{formData.amount}</p>
                                            <p>
                                                {
                                                    store.clients.find(
                                                        client =>
                                                            client.id ===
                                                            formData.client
                                                    )?.name
                                                }{" "}
                                                {
                                                    store.clients.find(
                                                        client =>
                                                            client.id ===
                                                            formData.client
                                                    )?.lastname
                                                }
                                            </p>
                                            <p>{formData.method}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center mt-6">
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            id="fileInput"
                                            accept="application/pdf"
                                            multiple
                                        />
                                        <label
                                            htmlFor="fileInput"
                                            className="bg-cyan-300 hover:bg-cyan-400 text-black font-bold py-2 px-4 rounded">
                                            {t("selectpdf")}
                                        </label>
                                        {fileList.length > 0 && (
                                            <div className="mt-2 flex justify-center">
                                                {fileList.map((file, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center justify-between bg-gray-200 rounded-lg p-2 mt-2">
                                                        <div className="flex items-center">
                                                            <FaFilePdf className="text-red-500 mr-2" />
                                                            <div className="text-black">
                                                                {file.name.substring(
                                                                    0,
                                                                    20
                                                                )}
                                                            </div>
                                                        </div>
                                                        <button
                                                            className="text-red-500 font-bold ml-5"
                                                            onClick={() =>
                                                                handleFileDelete(
                                                                    index
                                                                )
                                                            }>
                                                            {t("delete")}
                                                        </button>
                                                    </div>
                                                ))}
                                                <button
                                                    className="mt-4 ml-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                                    onClick={handleSubmit}>
                                                    {t("uploadfiles")}
                                                </button>
                                            </div>
                                        )}
                                        {filesUploaded && (
                                            <div className="mt-2 flex justify-center">
                                                <p className="glass text-white font-bold py-2 px-4 rounded">
                                                    {t("filesuploaded")}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-evenly">
                                    <button
                                        type="button"
                                        className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md mt-4"
                                        onClick={handleBack}>
                                        {t("back")}
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-red-500 text-white py-2 px-4 rounded-md mt-4"
                                        onClick={handleReset}>
                                        {t("startover")}
                                    </button>
                                    <button
                                        type="button"
                                        className="bg-neutral-800 text-white py-2 px-4 rounded-md mt-4"
                                        onClick={() => {
                                            handlePaymentSubmit();
                                            navigate("/payments");
                                        }}>
                                        {t("confirm")}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
