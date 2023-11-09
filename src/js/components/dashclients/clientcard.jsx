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
    const [t] = useTranslation("clientcard");
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
                <div className="font-serif text-gray-200 mt-28">
                    <div className="flex items-center">
                        <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black text-black dark:text-white m-auto">
                            {t("Client Profile")}
                        </h1>
                    </div>
                    <div className="glass p-10 mt-2 m-auto w-11/12">
                        <HiArrowCircleLeft
                            className="h-12 w-12 text-gray-200 cursor-pointer"
                            onClick={() => navigate("/clients")}
                        />
                        <div className="flex justify-center items-center flex-col sm:flex-row">
                            <div className="glass p-8 mt-5 m-auto w-700 shadow-lg overflow-hidden flex-1">
                                <button
                                    className="m-1 p-3 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                    onClick={() => {
                                        setIsOpen(true);
                                    }}>
                                    <FaEdit />
                                </button>
                                <div className="flex items-center justify-between mb-8">
                                    <h1 className="text-2xl font-bold text-white">
                                        {client.name} {client.lastname}
                                    </h1>
                                    <img
                                        src={client.image}
                                        alt="User photo"
                                        className="w-32 h-32 rounded-full border-2 border-gray-200"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-white">
                                    <div className="font-bold">Email:</div>
                                    <div>{client.email}</div>
                                    <div className="font-bold">Phone:</div>
                                    <div>{client.phone}</div>
                                    <div className="font-bold">Business:</div>
                                    <div>{client.business}</div>
                                    <div className="font-bold">
                                        Description:
                                    </div>
                                    <div>{client.description}</div>
                                    <div className="font-bold">Status:</div>
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
                                <div className="glass p-10 mt-5 m-auto w-11/12">
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
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Select PDF Files
                                    </label>
                                    {fileList.length > 0 && (
                                        <div className="mt-2">
                                            {fileList.map((file, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center justify-between bg-gray-200 rounded-lg p-2 mt-2">
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
                                                        Delete
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={handleSubmit}>
                                                Upload Files
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="glass p-10 mt-5 m-auto w-11/12">
                                        <h2 className="text-2xl font-bold text-white">
                                            List of Files
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
                                                        Delete
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
