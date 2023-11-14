import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HiArrowCircleLeft } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../firebase/firebase";
import { Context } from "../../store/appContext.jsx";
import { ClientProfile } from "./clientsprofile.jsx";
import {
    getDownloadURL,
    deleteObject,
    ref as storageRef,
    uploadBytes,
    listAll
} from "firebase/storage";
import { FaFilePdf, FaEdit } from "react-icons/fa";

export const ClientCard = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    // SELECCION DE FILES
    let { id } = useParams();
    id = parseInt(id);
    const [t] = useTranslation("clients");
    const client = store.clients.find(client => client.id === id);
    const [fileList, setFileList] = useState([]);

    // MOSTRAR FILES

    const { id: clientId } = useParams();
    const [buckets, setBuckets] = useState([]);
    const [filteredUrls, setFilteredUrls] = useState([]);

    useEffect(() => {
        actions.getAllClients();
    }, []);

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
                `clientFiles/$clientFile_${id}_${file.name}`
            );
            const uploadTask = uploadBytes(imageRef, file);
            archives.push(uploadTask);
        }
        await Promise.all(archives);
        alert("Files uploaded successfully!");
        setFileList([]);
    };

    useEffect(() => {
        const clientFilesRef = storageRef(storage, `clientFiles`);
        listAll(clientFilesRef).then(res => {
            Promise.all(res.items.map(file => getDownloadURL(file))).then(
                urls => {
                    const filteredUrls = urls.filter(url =>
                        url.includes(`clientFile_${clientId}`)
                    );
                    setFilteredUrls(filteredUrls);
                    const renderedUrls = filteredUrls.map(url => {
                        const fileName = url.split("/").pop();
                        const renderedUrl =
                            import.meta.env.VITE_CLIENTFILE_URL +
                            `/clientFiles/${fileName}`;
                        return renderedUrl;
                    });
                    setBuckets(renderedUrls);
                }
            );
        });
    }, [fileList]);

    const handleBucketDelete = async () => {
        const promises = filteredUrls.map(url => {
            const fileName = url.split("/").pop();
            const fileRef = storageRef(
                storage,
                import.meta.env.VITE_CLIENTEFILE_DELETE_URL + `${fileName}`
            );
            return deleteObject(fileRef);
        });
        await Promise.all(promises);
        setBuckets([]);
    };

    if (client) {
        return (
            <>
                {isOpen && (
                    <ClientProfile setIsOpen={setIsOpen} client={client} />
                )}
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fclients%2FClientsBG.jpeg?alt=media&token=2d8c8c81-a447-480b-b66b-087811f4cb1c"
                    className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
                />
                <div className="font-serif text-gray-200 mt-28">
                    <div className="flex items-center">
                        <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black text-black dark:text-white m-auto">
                            {t("clientprofile")}
                        </h1>
                    </div>
                    <div className="glass p-10 mt-2 m-auto w-11/12">
                        <HiArrowCircleLeft
                            className="h-12 w-12 text-gray-200 cursor-pointer"
                            onClick={() => navigate("/clients")}
                        />
                        <div className="flex justify-center items-center flex-col sm:flex-row">
                            <div className="border border-white rounded-xl p-8 mt-5 m-auto w-700 shadow-lg overflow-hidden flex-1">
                                <div className="container flex items-center mb-8 mr-10">
                                    <div className="px-4 py-2 text-center">
                                        {client.image !== "noImage" ? (
                                            <img
                                                src={client.image}
                                                alt={client.name}
                                                className="w-32 h-32 object-cover rounded-full inline-block border-2 border-gray-200"
                                            />
                                        ) : (
                                            <i
                                                className="fa-regular fa-circle-user text-9xl mx-4 invert dark:invert-0"
                                                style={{ color: "#ffffff" }}
                                            />
                                        )}
                                    </div>
                                    <h1 className="text-2xl font-bold text-white ml-20">
                                        {client.name} {client.lastname}
                                    </h1>
                                    <div className="relative left-36 bottom-14">
                                        <button
                                            className="m-1 p-3 text-sm rounded-lg bg-neutral-950 border border-neutral-300 text-white hover:text-cyan-300 hover:border-cyan-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                            onClick={() => {
                                                setIsOpen(true);
                                            }}>
                                            <FaEdit />
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-white">
                                    <div className="font-bold">
                                        {t("email")}:
                                    </div>
                                    <div>{client.email}</div>
                                    <div className="font-bold">
                                        {t("phone")}:
                                    </div>
                                    <div>{client.phone}</div>
                                    <div className="font-bold">
                                        {t("business")}:
                                    </div>
                                    <div>{client.business}</div>
                                    <div className="font-bold">
                                        {t("description")}:
                                    </div>
                                    <div>{client.description}</div>
                                    <div className="font-bold">
                                        {t("status")}:
                                    </div>
                                    <div
                                        className={
                                            client.status === "Active"
                                                ? "text-green-500 font-bold"
                                                : "text-red-500 font-bold"
                                        }>
                                        {client.status}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="border border-white rounded-xl p-10 mt-5 m-auto w-11/12">
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
                                        className="bg-cyan-300 hover:bg-cyan-400 transition duration-300 text-black font-bold py-2 px-4 rounded">
                                        {t("selectpdf")}
                                    </label>
                                    {fileList.length > 0 && (
                                        <div className="mt-2">
                                            {fileList.map((file, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center justify-between bg-gray-200 rounded-lg p-2 mt-3">
                                                    <div className="flex items-center">
                                                        <i className="far fa-file-pdf text-red-500 mr-2"></i>
                                                        <div className="text-black">
                                                            {file.name.substring(
                                                                0,
                                                                20
                                                            )}
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="text-red-500 font-bold"
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
                                                className="mt-4 bg-black hover:text-cyan-300 border border-neutral-500  hover:border-cyan-300 transition duration-300 text-white font-bold py-2 px-4 rounded-md"
                                                onClick={handleSubmit}>
                                                {t("uploadfiles")}
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="border border-white rounded-xl p-10 mt-5 m-auto w-11/12">
                                        <h2 className="text-2xl font-bold text-white">
                                            {t("listfiles")}
                                        </h2>
                                        <ul className="mt-4">
                                            {buckets.map((url, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center text-white">
                                                    <button
                                                        className="flex items-center cursor-pointer"
                                                        onClick={() =>
                                                            window.open(
                                                                filteredUrls
                                                            )
                                                        }>
                                                        <FaFilePdf className="mr-2" />
                                                        {
                                                            url
                                                                .split(
                                                                    `clientFile_${clientId}_`
                                                                )[1]
                                                                .split(
                                                                    "?alt"
                                                                )[0]
                                                        }
                                                    </button>
                                                    <button
                                                        className="ml-4 text-red-500 font-bold"
                                                        onClick={() =>
                                                            handleBucketDelete(
                                                                index
                                                            )
                                                        }>
                                                        {t("delete")}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};
