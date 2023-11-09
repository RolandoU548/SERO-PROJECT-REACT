import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../../store/appContext";

export const Profile = () => {
    const [t] = useTranslation("profile");
    const { store, actions } = useContext(Context);

    const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);
    const [newPhoneNumber, setNewPhoneNumber] = useState(
        store.user.phoneNumber || ""
    );

    const handlePhoneNumberEdit = () => {
        setIsEditingPhoneNumber(true);
        setNewPhoneNumber(store.user.phoneNumber || "");
    };

    const handlePhoneNumberSave = async () => {
        const success = await actions.updateUser({
            ...store.user,
            phoneNumber: newPhoneNumber
        });

        if (success) {
            setIsEditingPhoneNumber(false);
            store.user.phoneNumber = newPhoneNumber;
        }
    };

    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fprofile%2FProfileBG.jpeg?alt=media&token=c90a4f9c-9ae6-4ce2-a4b2-0bb4af67e72e"
                className="invert fixed -z-50 -top-20 left-0 dark:invert-0 transition duration-500"
            />
            <div className="h-[22.2rem] dark:text-white mt-28 container mx-auto mb-5 p-5">
                <div className="md:flex no-wrap md:-mx-2 ">
                    <div className="w-full md:w-3/12 md:mx-2">
                        <div className="glass p-3">
                            <div className="image overflow-hidden">
                                <img
                                    className="h-48 w-48 rounded-full mx-auto"
                                    src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
                                    alt=""
                                />
                            </div>
                            <h1 className="font-bold text-xl text-center leading-8 my-1">
                                {store.user.name} {store.user.lastname}
                            </h1>
                            <ul className="hover:text-cyan-400 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>Status</span>
                                    <span className="ml-auto">
                                        <span
                                            className={`${
                                                store.user.status === "Active"
                                                    ? "bg-cyan-500"
                                                    : "bg-red-500"
                                            } py-1 px-2 rounded text-sm`}>
                                            {store.user.status}
                                        </span>
                                    </span>
                                </li>

                                <li className="flex items-center py-3">
                                    <span>Member since</span>
                                    <span className="ml-auto">
                                        {new Date(
                                            store.user.createdAt
                                        ).toLocaleDateString()}
                                    </span>
                                </li>
                            </ul>
                            <div className="grid text-sm">
                                    <div className="flex flex-row">
                                        <div className="px-4 py-2 font-semibold">
                                            Contact No.
                                        </div>
                                        <div className="px-4 py-2">
                                            {isEditingPhoneNumber ? (
                                                <>
                                                    <input
                                                        type="text"
                                                        value={newPhoneNumber}
                                                        onChange={e =>
                                                            setNewPhoneNumber(
                                                                e.target.value
                                                            )
                                                        }
                                                        className="border border-gray-300 p-1 text-black rounded-md"
                                                    />
                                                    <button
                                                        className="bg-blue-500 p-1 mx-auto text-white rounded-md"
                                                        onClick={
                                                            handlePhoneNumberSave
                                                        }>
                                                        Save
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setIsEditingPhoneNumber(
                                                                false
                                                            )
                                                        }
                                                        className="bg-red-500 p-1 gap-4 text-white rounded-md"
                                                        >
                                                        Cancel
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    {store.user.phoneNumber}
                                                    <button
                                                        className="bg-cyan-300 p-1 ml-14 text-black rounded-md"
                                                        onClick={
                                                            handlePhoneNumberEdit
                                                        }>
                                                        Edit
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-row">
                                        <div className="px-4 py-2 font-semibold">
                                            Address
                                        </div>
                                        <div className="px-4 py-2">
                                            Los Samanes, Caracas
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="px-4 py-2 font-semibold">
                                            Email
                                        </div>
                                        <div className="px-4 py-2">
                                            <a
                                                className="ææææææææææææææææææææææ"
                                                href="mailto:jane@example.com">
                                                {store.user.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="px-4 py-2 font-semibold">
                                            Birthday
                                        </div>
                                        <div className="px-4 py-2">
                                            Agosto 18, 2001
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="my-4"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
