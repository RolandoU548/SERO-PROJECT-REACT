import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

import "../../../css/app.css";
import "../../../css/glass.css";

export const ClientProfile = ({ client }) => {
    const { store, actions } = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);
    const [editableClient, setEditableClient] = useState(client);

    useEffect(() => {
        actions.getAllClients();
    }, [client]);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setEditableClient({ ...editableClient, [name]: value });
    };

    const handleSave = async () => {
        try {
            await actions.updateClient(client.id, editableClient);
            toggleModal();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <button
                className="px-2 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                onClick={toggleModal}>
                <FaEdit />
            </button>
            {isOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="fixed inset-0 transition-opacity"
                            aria-hidden="true">
                            <div className="absolute inset-0 bg-black opacity-75"></div>
                        </div>

                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true">
                            &#8203;
                        </span>

                        <div
                            className="inline-block align-bottom glass text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full rounded-t-lg"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline">
                            <div className="glass px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-t-lg">
                                <h3
                                    className="text-xl text-center leading-6 text-white font-bold"
                                    id="modal-headline">
                                    CLIENT DATA
                                </h3>
                                <div className="mt-5 flex justify-center items-center rounded-t-lg">
                                    <div className="flex flex-col space-y-2">
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="name"
                                                className="font-bold mr-6">
                                                Name:
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={editableClient.name}
                                                onChange={handleInputChange}
                                                className="rounded-md px-3 py-2 text-black text-center"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="email"
                                                className="font-bold mt-6 mr-6">
                                                Email:
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={editableClient.email}
                                                onChange={handleInputChange}
                                                className="rounded-md px-3 py-2 text-black text-center"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="phone"
                                                className="font-bold mt-6 mr-6">
                                                Phone:
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={editableClient.phone}
                                                onChange={handleInputChange}
                                                className="rounded-md px-3 py-2 text-black text-center"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="business"
                                                className="font-bold mt-6 mr-6">
                                                Business:
                                            </label>
                                            <input
                                                type="text"
                                                name="business"
                                                value={editableClient.business}
                                                onChange={handleInputChange}
                                                className="rounded-md px-3 py-2 text-black text-center"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="description"
                                                className="font-bold mt-6 mr-6">
                                                Description:
                                            </label>
                                            <textarea
                                                name="description"
                                                value={
                                                    editableClient.description
                                                }
                                                onChange={handleInputChange}
                                                className="rounded-md px-3 py-2 text-black text-center"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="status"
                                                className="font-bold mt-6 mr-6">
                                                Status:
                                            </label>
                                            <select
                                                name="status"
                                                value={editableClient.status}
                                                onChange={handleInputChange}
                                                className="rounded-md px-4 py-2 text-black text-center">
                                                <option value="active">
                                                    Active
                                                </option>
                                                <option value="inactive">
                                                    Inactive
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleSave}>
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={toggleModal}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

ClientProfile.propTypes = {
    client: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        business: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    }).isRequired
};
