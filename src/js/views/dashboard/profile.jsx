import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../../store/appContext";

export const Profile = () => {
    const [t] = useTranslation("createUser");
    const { store, actions } = useContext(Context);

    const [editingField, setEditingField] = useState(null);
    const [editedValue, setEditedValue] = useState("");
    const user = store.user;

    const handleFieldEdit = fieldName => {
        setEditingField(fieldName);
    };
    const handleFieldSave = async () => {
        if (editedValue) {
            const updatedInfo = {
                ...user,
                [editingField]: editedValue
            };
            await actions.updateOwnUser(updatedInfo);
            actions.setUser(updatedInfo);
            setEditedValue("");
        }
        setEditingField(null);
    };

    const changeIsActive = async isActive => {
        if (isActive === "Active") {
            isActive = true;
        } else {
            isActive = false;
        }
        await actions.updateOwnUser({ ...user, isActive });
        actions.setUser({ ...user, isActive });
    };

    return (
        <>
            <img
                className="w-screen h-screen -z-50 fixed object-cover top-0 dark:invert-0 invert transition duration-500"
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fprofile%2FProfileBG.jpeg?alt=media&token=c90a4f9c-9ae6-4ce2-a4b2-0bb4af67e72e"
            />
            <div className="dark:text-white mt-28 w-[30rem] max-w-full m-auto mb-5 p-2">
                <div className="border border-black dark:border-white transition duration-300 rounded-xl p-2">
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
                            <span>{t("status")}</span>
                            <select
                                name="isActive"
                                id="isActive"
                                className={
                                    "py-1 rounded text-sm" +
                                    " " +
                                    (store.user.isActive
                                        ? "bg-cyan-500"
                                        : "bg-red-500")
                                }
                                defaultValue={
                                    store.user.isActive
                                        ? "Active"
                                        : "Inactive"
                                }
                                onChange={e => {
                                    changeIsActive(e.target.value);
                                }}>
                                <option value="Active" className="bg-cyan-500">
                                    {t("active")}
                                </option>
                                <option value="Inactive" className="bg-red-500">
                                    {t("inactive")}
                                </option>
                            </select>
                        </li>
                        <li className="flex items-center py-3">
                            <span>{t("members")}</span>
                            <span className="ml-auto">
                                {`${new Date(user?.createdAt).getUTCDate()}/${
                                    new Date(user?.createdAt).getUTCMonth() + 1
                                }/${new Date(
                                    user?.createdAt
                                ).getUTCFullYear()}`}
                            </span>
                        </li>
                    </ul>
                    <table className="w-full">
                        <tbody className="flex flex-col gap-3 text-sm px-2">
                            <tr className="flex flex-row justify-between items-center">
                                <td className="font-semibold w-1/3">{t("email")}</td>
                                <td className="text-center">{user.email}</td>
                                <td className="bg-neutral-400 text-neutral-300 px-3 py-1 border border-neutral-300 rounded-md cursor-not-allowed">
                                    {t("edit")}
                                </td>
                            </tr>
                            <tr className="flex flex-row justify-between items-center">
                                <td className="font-semibold w-1/3">
                                    {t("contactnumber")}
                                </td>
                                {editingField === "phone" ? (
                                    <td className="flex gap-1 ">
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
                                            {t("save")}
                                        </button>
                                        <button
                                            onClick={() =>
                                                setEditingField(null)
                                            }
                                            className="bg-red-500 py-1 px-3 text-white rounded-md">
                                            {t("cancel")}
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
                                                {t("edit")}
                                            </button>
                                        </td>
                                    </>
                                )}
                            </tr>
                            <tr className="flex flex-row justify-between items-center">
                                <td className="font-semibold w-1/3">
                                    {t("address")}
                                </td>
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
                                            {t("save")}
                                        </button>
                                        <button
                                            onClick={() =>
                                                setEditingField(null)
                                            }
                                            className="bg-red-500 py-1 px-3 text-white rounded-md">
                                            {t("cancel")}
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
                                                {t("edit")}
                                            </button>
                                        </td>
                                    </>
                                )}
                            </tr>
                            <tr className="flex flex-row justify-between items-center">
                                <td className="font-semibold w-1/3">
                                    {t("birthday")}
                                </td>
                                {editingField === "birthday" ? (
                                    <td className="flex gap-1">
                                        <input
                                            type="date"
                                            value={
                                                editedValue ||
                                                `${new Date(
                                                    user?.birthday
                                                ).getUTCFullYear()}-${String(
                                                    new Date(
                                                        user?.birthday
                                                    ).getUTCMonth() + 1
                                                ).padStart(2, "0")}-${String(
                                                    new Date(
                                                        user?.birthday
                                                    ).getUTCDate()
                                                ).padStart(2, "0")}`
                                            }
                                            onChange={e =>
                                                setEditedValue(e.target.value)
                                            }
                                            className="border border-gray-300 p-1 text-black rounded-md"
                                        />
                                        <button
                                            className="bg-sky-400 py-1 px-3 text-white rounded-md"
                                            onClick={handleFieldSave}>
                                            {t("save")}
                                        </button>
                                        <button
                                            onClick={() =>
                                                setEditingField(null)
                                            }
                                            className="bg-red-500 py-1 px-3 text-white rounded-md">
                                            {t("cancel")}
                                        </button>
                                    </td>
                                ) : (
                                    <>
                                        <td className="text-center gap-1">
                                            {`${new Date(
                                                user?.birthday
                                            ).getUTCDate()}/${
                                                new Date(
                                                    user?.birthday
                                                ).getUTCMonth() + 1
                                            }/${new Date(
                                                user?.birthday
                                            ).getUTCFullYear()}`}
                                        </td>
                                        <td>
                                            <button
                                                className="hover:text-cyan-300 hover:border-cyan-300 bg-neutral-900 px-3 py-1 text-white border border-white rounded-md transition duration-300"
                                                onClick={() =>
                                                    handleFieldEdit("birthday")
                                                }>
                                                {t("edit")}
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
