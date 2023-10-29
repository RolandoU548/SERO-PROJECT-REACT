import React, { useState, useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { storage } from "../firebase/firebase";
import {
    getDownloadURL,
    deleteObject,
    ref as storageRef,
    listAll
} from "firebase/storage";

export const GetFilesBucket = () => {
    const { id: clientId } = useParams();
    const [buckets, setBuckets] = useState([]);
    const [filteredUrls, setFilteredUrls] = useState([]);

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
    }, [clientId]);

    const handleFileDelete = async index => {
        const fileUrl = filteredUrls[index];
        const fileName = fileUrl.split("/").pop();
        const fileRef = storageRef(storage, `clientFiles/${fileName}`);
        try {
            await deleteObject(fileRef);
            const newBuckets = [...buckets];
            newBuckets.splice(index, 1);
            setBuckets(newBuckets);
            const newFilteredUrls = [...filteredUrls];
            newFilteredUrls.splice(index, 1);
            setFilteredUrls(newFilteredUrls);
        } catch (error) {
            console.error("Error deleting file:", error);
        }
    };

    return (
        <>
            <div className="glass p-10 mt-5 m-auto w-11/12">
                <h2 className="text-2xl font-bold text-white">List of Files</h2>
                <ul className="mt-4">
                    {buckets.map((url, index) => (
                        <li
                            key={index}
                            className="flex items-center text-white">
                            <button
                                className="flex items-center cursor-pointer"
                                onClick={() => window.open(filteredUrls)}>
                                <FaFilePdf className="mr-2" />
                                {
                                    url
                                        .split(`clientFile_${clientId}_`)[1]
                                        .split("?alt")[0]
                                }
                            </button>
                            <button
                                className="ml-4 text-red-500 font-bold"
                                onClick={() => handleFileDelete(index)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
