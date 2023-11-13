import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { Transition } from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./task";

export const Kanban = () => {
    const [t] = useTranslation("kanban");
    // const users = useSelector(state => state.user);
    const [showModal, setShowModal] = useState(false);
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [assignedUser, setAssignedUser] = useState("");
    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            title: "Task 1",
            description: "This is the first task",
            assignedTo: "John Doe",
            status: "todo"
        },
        {
            id: uuidv4(),
            title: "Task 2",
            description: "This is the second task",
            assignedTo: "Jane Smith",
            status: "inprogress"
        },
        {
            id: uuidv4(),
            title: "Task 3",
            description: "This is the third task",
            assignedTo: "John Doe",
            status: "done"
        }
    ]);

    const handleCreateTask = () => {
        const newTask = {
            id: uuidv4(),
            title: taskTitle,
            description: taskDescription,
            assignedTo: assignedUser,
            status: "todo"
        };
        setTasks([...tasks, newTask]);
        setShowModal(false);
        setTaskTitle("");
        setTaskDescription("");
        setAssignedUser("");
    };

    const handleDeleteTask = taskId => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const handleUpdateTaskStatus = (taskId, newStatus) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, status: newStatus };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Ftasks%2FTasksBG.jpg?alt=media&token=e765e05c-ec9a-4f6d-8bed-121cc7354a30"
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <div className="font-serif text-black dark:text-white mt-28">
                <h2 className="w-10/12 text-3xl minimum:text-4xl md:text-5xl lg:text-6xl font-black z-10 m-auto">
                    {t("tasks")}
                </h2>
                <div className="flex justify-center mt-5">
                    {/* {users.map(user => (
                        <div key={user.id} className="flex items-center mx-2">
                            <AiOutlineUser className="h-6 w-6 mr-1" />
                            <span>{user.name}</span>
                        </div>
                    ))} */}
                </div>
                <div className="flex justify-center mt-5">
                    <div className="w-1/4">
                        <h3 className="text-xl font-bold mb-3">{t("todo")}</h3>
                        <div className="bg-gray-100 p-3 rounded-md">
                            {tasks
                                .filter(task => task.status === "todo")
                                .map(task => (
                                    <Task
                                        key={task.id}
                                        task={task}
                                        onDelete={handleDeleteTask}
                                        onUpdateStatus={handleUpdateTaskStatus}
                                    />
                                ))}
                        </div>
                        <button
                            className="flex items-center mt-3 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowModal(true)}>
                            <FaPlus className="h-6 w-6 mr-1" />
                            {t("createTask")}
                        </button>
                    </div>
                    <div className="w-1/4 mx-5">
                        <h3 className="text-xl font-bold mb-3">
                            {t("inProgress")}
                        </h3>
                        <div className="bg-gray-100 p-3 rounded-md">
                            {tasks
                                .filter(task => task.status === "inprogress")
                                .map(task => (
                                    <Task
                                        key={task.id}
                                        task={task}
                                        onDelete={handleDeleteTask}
                                        onUpdateStatus={handleUpdateTaskStatus}
                                    />
                                ))}
                        </div>
                    </div>
                    <div className="w-1/4">
                        <h3 className="text-xl font-bold mb-3">{t("done")}</h3>
                        <div className="bg-gray-100 p-3 rounded-md">
                            {tasks
                                .filter(task => task.status === "done")
                                .map(task => (
                                    <Task
                                        key={task.id}
                                        task={task}
                                        onDelete={handleDeleteTask}
                                        onUpdateStatus={handleUpdateTaskStatus}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <Transition
                show={showModal}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                        &#8203;
                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <FaPlus className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3
                                            className="text-lg leading-6 font-medium text-gray-900"
                                            id="modal-headline">
                                            {t("createTask")}
                                        </h3>
                                        <div className="mt-2">
                                            <div className="mb-2">
                                                <label
                                                    htmlFor="taskTitle"
                                                    className="block text-gray-700 font-bold mb-2">
                                                    {t("title")}
                                                </label>
                                                <input
                                                    type="text"
                                                    id="taskTitle"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={taskTitle}
                                                    onChange={e =>
                                                        setTaskTitle(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <label
                                                    htmlFor="taskDescription"
                                                    className="block text-gray-700 font-bold mb-2">
                                                    {t("description")}
                                                </label>
                                                <textarea
                                                    id="taskDescription"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={taskDescription}
                                                    onChange={e =>
                                                        setTaskDescription(
                                                            e.target.value
                                                        )
                                                    }></textarea>
                                            </div>
                                            <div className="mb-2">
                                                <label
                                                    htmlFor="assignedUser"
                                                    className="block text-gray-700 font-bold mb-2">
                                                    {t("assignedTo")}
                                                </label>
                                                <select
                                                    id="assignedUser"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={assignedUser}
                                                    onChange={e =>
                                                        setAssignedUser(
                                                            e.target.value
                                                        )
                                                    }>
                                                    <option value="">
                                                        {t("selectUser")}
                                                    </option>
                                                    {/* {users.map(user => (
                                                        <option
                                                            key={user.id}
                                                            value={user.name}>
                                                            {user.name}
                                                        </option>
                                                    ))} */}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleCreateTask}>
                                    {t("create")}
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setShowModal(false)}>
                                    {t("cancel")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </>
    );
};
