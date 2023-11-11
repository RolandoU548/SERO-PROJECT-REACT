import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../../store/appContext";

export const Profile = () => {
    const [t] = useTranslation("profile");
    const { store, actions } = useContext(Context);

    const [editingField, setEditingField] = useState(null);
    const [editedValue, setEditedValue] = useState("");
    const [newUser, setNewUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setNewUser(storedUser);
        } else {
            actions.getAllUsers(setNewUser);
        }
    }, [actions]);

    const handleFieldEdit = fieldName => {
        setEditingField(fieldName);
        setEditedValue(newUser[fieldName] || "");
    };

    const handleFieldSave = async () => {
        const updatedInfo = {
            ...newUser,
            [editingField]: editedValue
        };

        const success = await actions.updateUser(updatedInfo);

        if (success) {
            setEditingField(null);
            const updatedUser = { ...newUser, [editingField]: editedValue };
            setNewUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
        }
    };

    if (!newUser) {
        return null;
    }

    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fprofile%2FProfileBG.jpeg?alt=media&token=c90a4f9c-9ae6-4ce2-a4b2-0bb4af67e72e"
                className="invert w-full fixed -z-50 bottom-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="dark:text-white mt-28 w-5/12 m-auto mb-5 p-5">
                <div className="">
                    <div className="">
                        <div className="border border-black dark:border-white transition duration-300 rounded-xl p-3">
                            <div className="mx-auto text-center flex flex-col justify-center items-center my-6">
                                <i
                                    className="fa-regular fa-circle-user text-8xl invert dark:invert-0 rounded-full mx-auto text-center"
                                    style={{ color: "#ffffff" }}
                                />
                            </div>
                            <h2 className="font-bold text-xl text-center leading-8 my-1">
                                {newUser.name} {newUser.lastname}
                            </h2>
                            <ul className="py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>Status</span>
                                    <span className="ml-auto">
                                        <span
                                            className={`${
                                                newUser.status === "Active"
                                                    ? "bg-cyan-500"
                                                    : "bg-red-500"
                                            } py-1 px-2 rounded text-sm`}>
                                            {newUser.status}
                                        </span>
                                    </span>
                                </li>
                                <li className="flex items-center py-3">
                                    <span>Member since</span>
                                    <span className="ml-auto">
                                        {new Date(
                                            newUser.createdAt
                                        ).toLocaleDateString()}
                                    </span>
                                </li>
                            </ul>
                            <div className="grid text-sm">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="px-4 py-2 font-semibold">
                                        Email
                                    </div>
                                    <div className="flex">
                                        <div className="px-4 py-4">
                                            <a
                                                href={`mailto:${newUser.email}`}>
                                                {newUser.email}
                                            </a>
                                        </div>
                                        <div className="bg-neutral-400 px-3 py-1 my-3 ml-14 mr-4 text-neutral-300 border border-neutral-300 rounded-md cursor-not-allowed">
                                            Edit
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between items-center mb-3">
                                    <div className="px-4 font-semibold">
                                        Contact No.
                                    </div>
                                    <div className="px-4 gap-3 flex">
                                        {editingField === "phone" ? (
                                            <>
                                                <input
                                                    type="text"
                                                    value={editedValue}
                                                    onChange={e =>
                                                        setEditedValue(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="border border-gray-300 text-black rounded-md"
                                                />
                                                <button
                                                    className="bg-sky-400 px-3 py-1 mx-auto text-white rounded-md"
                                                    onClick={handleFieldSave}>
                                                    Save
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setEditingField(null)
                                                    }
                                                    className="bg-red-500 px-3 gap-4 text-white rounded-md">
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                {newUser.phone}
                                                <button
                                                    className="hover:text-cyan-300 hover:border-cyan-300 bg-neutral-900 px-3 py-1 ml-14 text-white border border-white rounded-md transition duration-300"
                                                    onClick={() =>
                                                        handleFieldEdit("phone")
                                                    }>
                                                    Edit
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="px-4 font-semibold">
                                        Address
                                    </div>
                                    <div className="px-4 gap-3 flex ">
                                        {editingField === "address" ? (
                                            <>
                                                <input
                                                    type="text"
                                                    value={editedValue}
                                                    onChange={e =>
                                                        setEditedValue(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 text-black rounded-md"
                                                />
                                                <button
                                                    className="bg-sky-400 py-1 px-3 mx-auto text-white rounded-md"
                                                    onClick={handleFieldSave}>
                                                    Save
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setEditingField(null)
                                                    }
                                                    className="bg-red-500 px-3 gap-4 text-white rounded-md">
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                {newUser.address}
                                                <button
                                                    className="hover:text-cyan-300 hover:border-cyan-300 bg-neutral-900 px-3 py-1 ml-14 text-white border border-white rounded-md transition duration-300"
                                                    onClick={() =>
                                                        handleFieldEdit(
                                                            "address"
                                                        )
                                                    }>
                                                    Edit
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between mt-3">
                                    <div className="px-4 font-semibold">
                                        Birthday
                                    </div>
                                    <div className="px-4 gap-3 flex ">
                                        {editingField === "birthday" ? (
                                            <>
                                                <input
                                                    type="date"
                                                    value={editedValue}
                                                    onChange={e =>
                                                        setEditedValue(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 text-black rounded-md"
                                                />
                                                <button
                                                    className="bg-sky-400 py-1 px-3 mx-auto text-white rounded-md"
                                                    onClick={handleFieldSave}>
                                                    Save
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setEditingField(null)
                                                    }
                                                    className="bg-red-500 px-3 gap-4 text-white rounded-md">
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                {newUser.birthday}
                                                <button
                                                    className="hover:text-cyan-300 hover:border-cyan-300 bg-neutral-900 px-3 py-1 ml-14 text-white border border-white rounded-md transition duration-300"
                                                    onClick={() =>
                                                        handleFieldEdit(
                                                            "birthday"
                                                        )
                                                    }>
                                                    Edit
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
// a
