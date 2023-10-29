import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HiArrowCircleLeft } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../firebase/firebase";
import { Context } from "../../store/appContext.jsx";
import { ClientProfile } from "./clientsprofile.jsx";
import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
    listAll
} from "firebase/storage";
import { FaFilePdf } from "react-icons/fa";

export const ClientCard = () => {
    const { store } = useContext(Context);
    let { id } = useParams();

    id = parseInt(id);
    const navigate = useNavigate();
    const [t] = useTranslation("clientcard");
    const client = store.clients.find(client => client.id === id);
    const [fileList, setFileList] = useState([]);
    const [bucket, setBucket] = useState([]);

    const fetchFiles = async () => {
        try {
            const filesRef = storageRef(storage, "clientFiles");
            const filesList = await listAll(filesRef);
            const clientFiles = filesList.items.filter(item =>
                item.name.startsWith(`clientFile_${id}`)
            );
            const urls = await Promise.all(
                clientFiles.map(async file => {
                    const url = await getDownloadURL(file);
                    return { name: file.name, url };
                })
            );
            setBucket(urls);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchFiles();
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

    return (
        <>
            <img
                src="ReportsBG.jpg"
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="font-serif text-gray-200 mt-28">
                <div className="flex items-center">
                    <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-black dark:text-white m-auto">
                        {t("Client Profile")}
                    </h1>
                </div>

                <div className="glass p-10 mt-5 m-auto w-11/12">
                    <HiArrowCircleLeft
                        className="h-12 w-12 text-gray-200 cursor-pointer"
                        onClick={() => navigate("/clients")}
                    />
                    <div className="flex justify-center items-center">
                        <div className="glass p-10 mt-5 m-auto w-11/12 shadow-lg overflow-hidden flex-1">
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
                                <div className="font-bold">Description:</div>
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
                            <div className="mt-8">
                                <ClientProfile
                                    key={client.id}
                                    client={client}
                                />
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
                                                        handleFileDelete(index)
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
                                        {bucket.map((file, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center text-white">
                                                <FaFilePdf className="mr-2" />
                                                <a
                                                    href={file.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-gray-400">
                                                    {file.name}
                                                </a>
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
};
