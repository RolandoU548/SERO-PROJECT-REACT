import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import { useTranslation } from "react-i18next";

export const DeleteUserModal = ({ setIsOpen, userId }) => {
    const { t } = useTranslation("createUser");
    const { actions } = useContext(Context);

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true">
                    <div
                        className="absolute inset-0 bg-black opacity-75"
                        onClick={() => {
                            setIsOpen(false);
                        }}></div>
                </div>

                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true">
                    &#8203;
                </span>

                <form className="inline-block align-bottom glass text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-white">
                        <h3
                            className="text-xl text-center leading-6 font-bold"
                            id="modal-headline">
                            {t("deleteuser")}
                        </h3>
                        <p className="mt-2 text-sm text-gray-100">{t("sure")}</p>
                    </div>
                    <div className="bg-neutral-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            onClick={async () => {
                                const deleteResult =
                                    await actions.deleteUserById(userId);
                                if (
                                    deleteResult.message ===
                                    "User deleted successfully"
                                ) {
                                    actions.getAllUsers();
                                }
                                setIsOpen(false);
                            }}
                            type="button"
                            className="-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 sm:ml-3 sm:w-auto sm:text-sm">
                            {t("yes")}
                        </button>
                        <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-gray-50 text-base font-medium text-black transition duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => {
                                setIsOpen(false);
                            }}>
                            {t("no")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

DeleteUserModal.propTypes = {
    setIsOpen: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired
};
