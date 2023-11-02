import React from "react";
import { toast } from "react-toastify";

export const UserCreated = () => {
    const notify = () => toast.success("User created successfully!");
    return (
        <div>
            <button onClick={notify}>Create User</button>
        </div>
    );
};

export const UserUpdated = () => {
    toast.success("Client updated Successfully ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });
};

export const UserDeleted = () => {
    const notify = () => toast.error("User deleted successfully!");
    return (
        <div>
            <button onClick={notify}>Delete User</button>
        </div>
    );
};
