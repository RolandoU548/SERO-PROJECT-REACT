import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { Context } from "../../store/appContext";

export const Profile = () => {
    const [t] = useTranslation("profile");
    const { store, actions } = useContext(Context);

    const [editingField, setEditingField] = useState(null);
    const [editedValue, setEditedValue] = useState("");
    const user = store.user;
    const [userStatus, setUserStatus] = useState(store.user.status);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const handleFieldEdit = fieldName => {
        setEditingField(fieldName);
    };

    const handleFieldSave = async () => {
        const updatedInfo = {
            ...user,
            [editingField]: editedValue
        };
        await actions.updateUser(updatedInfo);
        await actions.identificateUser(store.token);
        setEditedValue("");
        setEditingField(null);
    };

    const changeStatus = async status => {
        await actions.updateUser({ ...user, status });
        await actions.identificateUser(store.token);
    };

    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fprofile%2FProfileBG.jpeg?alt=media&token=c90a4f9c-9ae6-4ce2-a4b2-0bb4af67e72e"
                className="invert w-full fixed -z-50 top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="dark:text-white mt-28 w-[30rem] max-w-full m-auto mb-5 p-5">
                <div className="border border-black dark:border-white transition duration-300 rounded-xl p-3">
                    <div className="mx-auto text-center flex flex-col justify-center items-center my-6">
                        <i
                            className="fa-regular fa-circle-user text-8xl invert dark:invert-0 rounded-full mx-auto text-center"
                            style={{ color: "#ffffff" }}
                        />
                    </div>
                    <h2 className="font-bold text-xl text-center leading-8 my-1">
                        {user.name} {user.lastname}
                    </h2>
                    <ul className="py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex justify-between items-center py-3">
                            <span>Status</span>
                            <select
                                name="status"
                                id="status"
                                className={
                                    "py-1 rounded text-sm" +
                                    " " +
                                    (store.user.status === "Active"
                                        ? "bg-cyan-500"
                                        : "bg-red-500")
                                }
                                value={userStatus}
                                defaultValue={store.user.status}
                                onChange={e => {
                                    setUserStatus(e.target.value);
                                    changeStatus(e.target.value);
                                }}>
                                <option value="Active" className="bg-cyan-500">
                                    Active
                                </option>
                                <option value="Inactive" className="bg-red-500">
                                    Inactive
                                </option>
                            </select>
                        </li>
                        <li className="flex items-center py-3">
                            <span>Member since</span>
                            <span className="ml-auto">
                                {user.createdAt?.toLocaleDateString()}
                            </span>
                        </li>
                    </ul>
                    <table className="w-full">
                        <tbody className="flex flex-col gap-3 text-sm px-5">
                            <tr className="flex flex-row justify-between items-center">
                                <td className="font-semibold">Email</td>
                                <td className="text-center">{user.email}</td>
                                <td className="bg-neutral-400 text-neutral-300 px-3 py-1 border border-neutral-300 rounded-md cursor-not-allowed">
                                    Edit
                                </td>
                            </tr>
                            <tr className="flex flex-row justify-between items-center">
                                <td className="font-semibold">
                                    Contact Number
                                </td>
                                {editingField === "phone" ? (
                                    <td className="flex gap-1">
                                        <input
                                            type="text"
                                            value={editedValue}
                                            onChange={e =>
                                                setEditedValue(e.target.value)
                                            }
                                            className="border border-gray-300 p-1 text-black rounded-md"
                                        />
                                        <button
                                            className="bg-sky-400 py-1 px-3 text-white rounded-md"
                                            onClick={handleFieldSave}>
                                            Save
                                        </button>
                                        <button
                                            onClick={() =>
                                                setEditingField(null)
                                            }
                                            className="bg-red-500 py-1 px-3 text-white rounded-md">
                                            Cancel
                                        </button>
                                    </td>
                                ) : (
                                    <>
                                        <td className="text-center">
                                            {user.phone}
                                        </td>
                                        <td>
                                            <button
                                                className="hover:text-cyan-300 hover:border-cyan-300 bg-neutral-900 px-3 py-1 text-white border border-white rounded-md transition duration-300"
                                                onClick={() =>
                                                    handleFieldEdit("phone")
                                                }>
                                                Edit
                                            </button>
                                        </td>
                                    </>
                                )}
                            </tr>
                            <tr className="flex flex-row justify-between items-center">
                                <td className="font-semibold">Address</td>
                                {editingField === "address" ? (
                                    <td className="flex gap-1">
                                        <input
                                            type="text"
                                            value={editedValue}
                                            onChange={e =>
                                                setEditedValue(e.target.value)
                                            }
                                            className="border border-gray-300 p-1 text-black rounded-md"
                                        />
                                        <button
                                            className="bg-sky-400 py-1 px-3 text-white rounded-md"
                                            onClick={handleFieldSave}>
                                            Save
                                        </button>
                                        <button
                                            onClick={() =>
                                                setEditingField(null)
                                            }
                                            className="bg-red-500 py-1 px-3 text-white rounded-md">
                                            Cancel
                                        </button>
                                    </td>
                                ) : (
                                    <>
                                        <td className="text-center">
                                            {user.address}
                                        </td>
                                        <td>
                                            <button
                                                className="hover:text-cyan-300 hover:border-cyan-300 bg-neutral-900 px-3 py-1 text-white border border-white rounded-md transition duration-300"
                                                onClick={() =>
                                                    handleFieldEdit("address")
                                                }>
                                                Edit
                                            </button>
                                        </td>
                                    </>
                                )}
                            </tr>
                            <tr className="flex flex-row justify-between items-center">
                                <td className="font-semibold">Birthday</td>
                                {editingField === "birthday" ? (
                                    <td className="flex gap-1">
                                        <input
                                            type="date"
                                            value={editedValue}
                                            onChange={e =>
                                                setEditedValue(e.target.value)
                                            }
                                            className="border border-gray-300 p-1 text-black rounded-md"
                                        />
                                        <button
                                            className="bg-sky-400 py-1 px-3 text-white rounded-md"
                                            onClick={handleFieldSave}>
                                            Save
                                        </button>
                                        <button
                                            onClick={() =>
                                                setEditingField(null)
                                            }
                                            className="bg-red-500 py-1 px-3 text-white rounded-md">
                                            Cancel
                                        </button>
                                    </td>
                                ) : (
                                    <>
                                        <td className="text-center gap-1">
                                            {user.birthday?.toLocaleDateString()}
                                        </td>
                                        <td>
                                            <button
                                                className="hover:text-cyan-300 hover:border-cyan-300 bg-neutral-900 px-3 py-1 text-white border border-white rounded-md transition duration-300"
                                                onClick={() =>
                                                    handleFieldEdit("birthday")
                                                }>
                                                Edit
                                            </button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Profile;
// a
