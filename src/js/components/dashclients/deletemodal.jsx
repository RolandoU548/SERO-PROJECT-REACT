import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { FaTrash } from "react-icons/fa";

import PropTypes from "prop-types";

export function DeleteModal({ client }) {
    const { actions } = useContext(Context);
    const [isOpen, setIsOpen] = useState(false);
    const [deleteClient, setDeleteClient] = useState(client);

    const handleClientDelete = async id => {
        try {
            await actions.deleteClient(id);
            setDeleteClient(prevState => {
                const newState = { ...prevState };
                delete newState[id];
                return newState;
            });
            setIsOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <button
                className="ml-2 px-2 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                onClick={() => setIsOpen(true)}>
                <FaTrash />
            </button>
            {isOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="fixed inset-0 transition-opacity"
                            aria-hidden="true">
                            <div className="absolute inset-0 bg-black opacity-75"></div>
                        </div>
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="bg-white rounded-lg px-4 pt-5 pb-4 text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg
                                            className="h-6 w-6 text-red-600 cursor-pointer"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            onClick={() => setIsOpen(false)}>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>

                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3
                                            className="text-lg leading-6 font-medium text-gray-900"
                                            id="modal-headline">
                                            Delete Client
                                        </h3>

                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to delete
                                                this client? This action cannot
                                                be undone.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        onClick={() => {
                                            handleClientDelete(deleteClient.id);
                                            setIsOpen(false);
                                        }}
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                        No
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
DeleteModal.propTypes = {
    client: PropTypes.object.isRequired
};
