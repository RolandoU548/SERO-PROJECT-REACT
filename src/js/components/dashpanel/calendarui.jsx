import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { FaPlus } from "react-icons/fa";
import { ModalDeleteTask } from "./modaldeletetask";

export const CalendarDay = ({ day }) => {
    const [showModal, setShowModal] = useState(false);
    const [newTask, setNewTask] = useState("");

    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : {};
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(prevTasks => ({
                ...prevTasks,
                [day.format("YYYY-MM-DD")]: [
                    ...(prevTasks[day.format("YYYY-MM-DD")] || []),
                    { text: newTask.trim(), completed: false }
                ]
            }));
            setNewTask("");
            setShowModal(false);
        }
    };

    const toggleTask = index => {
        setTasks(prevTasks => {
            const updatedTasks = {
                ...prevTasks,
                [day.format("YYYY-MM-DD")]: prevTasks[
                    day.format("YYYY-MM-DD")
                ].map((task, i) => {
                    if (i === index) {
                        return { ...task, completed: !task.completed };
                    }
                    return task;
                })
            };
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };

    const deleteTask = index => {
        setTasks(prevTasks => {
            const updatedTasks = {
                ...prevTasks,
                [day.format("YYYY-MM-DD")]: prevTasks[
                    day.format("YYYY-MM-DD")
                ].filter((_, i) => i !== index)
            };
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };

    return (
        <div className="p-2 text-left border border-gray-200 rounded-md">
            <div className="text-sm font-medium text-gray-500">
                {day.format("MMM YYYY")}
            </div>
            <div className="text-sm font-medium text-white">
                {day.format("D")}
            </div>
            <div className="mt-6">
                {tasks[day.format("YYYY-MM-DD")]?.map((task, index) => (
                    <div
                        key={index}
                        onClick={() => toggleTask(index)}
                        className={`flex items-center justify-between px-2 py-1 rounded-md mb-2 cursor-pointer ${
                            task.completed
                                ? "bg-gray-300 text-gray-500 line-through"
                                : "bg-cyan-300 text-black"
                        }`}>
                        <div className="text-sm font-bold overflow-hidden">
                            {task.text}
                        </div>
                        <ModalDeleteTask
                            index={index}
                            deleteTask={deleteTask}
                        />
                    </div>
                ))}
                <button
                    onClick={() => setShowModal(true)}
                    className="mt-2 flex items-center justify-center px-1 py-0.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <FaPlus className="h-4 w-4 mr-1" />
                    Task
                </button>

                <Transition appear show={showModal} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        onClose={() => setShowModal(false)}>
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0">
                                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                            </Transition.Child>

                            <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true">
                                &#8203;
                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900">
                                        Add task to {day.format("MMM D, YYYY")}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            value={newTask}
                                            onChange={e =>
                                                setNewTask(e.target.value)
                                            }
                                            className="block w-full border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-cyan-300 sm:text-md px-4"
                                            placeholder="Task description"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            onClick={addTask}
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                            Add task
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </div>
    );
};

CalendarDay.propTypes = {
    day: PropTypes.object,
    tasks: PropTypes.object,
    setTasks: PropTypes.func
};
