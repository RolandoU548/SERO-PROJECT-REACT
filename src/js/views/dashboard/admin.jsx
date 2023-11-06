import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../css/app.css";
import "../../../css/glass.css";
import { UpdateUserModal } from "../../components/adminView/UpdateUserModal";
import { DeleteUserModal } from "../../components/adminView/DeleteUserModal";
import { useTranslation } from "react-i18next";

export const Admin = () => {
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [user, setUser] = useState();
    const [t] = useTranslation("admin");
    const { store, actions } = useContext(Context);
    const users = store.users?.filter(user => {
        return user.id !== store.user.id;
    });

    useEffect(() => {
        actions.getAllUsers(store.token);
    }, []);

    return (
        <>
            {isOpenEdit && (
                <UpdateUserModal setIsOpen={setIsOpenEdit} user={user} />
            )}
            {isOpenDelete && (
                <DeleteUserModal setIsOpen={setIsOpenDelete} user={user} />
            )}
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fadmin%2FAdminBG.jpeg?alt=media&token=bb862525-094d-4ea4-bd01-ad4ed93518fe"
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="font-serif text-black dark:text-white mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 m-auto">
                    {t("admin")}
                </h1>
                <div className="glass p-10 mt-5 m-auto w-11/12">
                    {users && (
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <td className="font-bold">ID</td>
                                    <td className="font-bold">Name</td>
                                    <td className="font-bold">Lastname</td>
                                    <td className="font-bold">Email</td>
                                    <td className="font-bold">Role</td>
                                    <td className="font-bold">Edit</td>
                                    <td className="font-bold">Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                {user.role.map((role, i) => {
                                                    return (
                                                        <span key={i}>
                                                            {role.role}
                                                            {i !==
                                                                user.role
                                                                    .length -
                                                                    1 && ","}
                                                        </span>
                                                    );
                                                })}
                                            </td>
                                            <td>
                                                <button
                                                    className="p-1 border border-black dark:border-white rounded"
                                                    onClick={() => {
                                                        setIsOpenEdit(true);
                                                        setUser(user);
                                                    }}>
                                                    Editar
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="p-1 border border-black dark:border-white rounded"
                                                    onClick={() => {
                                                        setIsOpenDelete(true);
                                                        setUser(user);
                                                    }}>
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
};
