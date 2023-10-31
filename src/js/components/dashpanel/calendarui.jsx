import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

export const CalendarDay = ({ day, tasks, setTasks }) => {
    const [showModal, setShowModal] = useState(false);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        const dateKey = day.format("YYYY-MM-DD");
        setTasks(prevTasks => ({
            ...prevTasks,
            [dateKey]: [...(prevTasks[dateKey] || []), { text: newTask }]
        }));
        setNewTask("");
        setShowModal(false);
    };

    const deleteTask = index => {
        const dateKey = day.format("YYYY-MM-DD");
        setTasks(prevTasks => ({
            ...prevTasks,
            [dateKey]: prevTasks[dateKey].filter((_, i) => i !== index)
        }));
    };

    return (
        <div className="p-2 text-left border border-gray-200 rounded-md">
            <div className="text-sm font-medium text-gray-500">
                {day.format("MMM YYYY")}
            </div>
            <div className="text-sm font-medium text-white">
                {day.format("D")}
            </div>
            <div className="mt-1">
                {tasks[day.format("YYYY-MM-DD")]?.map((task, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between">
                        <div className="text-sm font-medium text-green-500">
                            {task.text}
                        </div>
                        <button onClick={() => deleteTask(index)}>
                            <FaTrash className="h-4 w-4 text-red-600" />
                        </button>
                    </div>
                ))}
                <button
                    onClick={() => setShowModal(true)}
                    className="mt-6 flex items-center text-sm font-medium text-white">
                    <FaPlus className="h-4 w-4 mr-1" />
                    Add task
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
                                            className="border border-gray-300 rounded-md w-full px-3 py-2 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            placeholder="Enter task"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            onClick={addTask}
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                            Add
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
