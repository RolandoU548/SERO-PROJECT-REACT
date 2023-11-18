import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export const Task = ({ task, onDelete, onUpdateStatus }) => {
    const { t } = useTranslation();

    const handleDelete = () => {
        onDelete(task.id);
    };

    const handleUpdateStatus = e => {
        onUpdateStatus(task.id, e.target.value);
    };

    return (
        <div className="mb-3">
            <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-bold">{task.title}</h4>
                <div className="flex items-center">
                    <button
                        className="mr-2"
                        onClick={() => onUpdateStatus(task.id, "todo")}
                        disabled={task.status === "todo"}>
                        {t("todo")}
                    </button>
                    <button
                        className="mr-2"
                        onClick={() => onUpdateStatus(task.id, "inprogress")}
                        disabled={task.status === "inprogress"}>
                        {t("inProgress")}
                    </button>
                    <button
                        onClick={() => onUpdateStatus(task.id, "done")}
                        disabled={task.status === "done"}>
                        {t("done")}
                    </button>
                </div>
            </div>
            <p className="dark:text-black text-white">{task.description}</p>
            <div className="flex justify-between items-center mt-2">
                <span className="dark:text-black text-white">{task.assignedTo}</span>
                <div className="flex items-center">
                    <button className="mr-2" onClick={handleDelete}>
                        <FaTrashAlt className="h-5 w-5 text-red-500" />
                    </button>
                    <button>
                        <HiPencilAlt className="h-5 w-5 text-cyan-300 dark:text-cyan-400" />
                    </button>
                </div>
            </div>
        </div>
    );
};
Task.propTypes = {
    task: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdateStatus: PropTypes.func.isRequired
};
