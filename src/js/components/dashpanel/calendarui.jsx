import React, { Fragment, useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { FaPlus } from "react-icons/fa";
import { ModalDeleteTask } from "./modaldeletetask";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CalendarDay = ({ day }) => {
    const [t] = useTranslation("dashboard");
    const [showModal, setShowModal] = useState(false);
    const [newTask, setNewTask] = useState("");
    const { store, actions } = useContext(Context);
    const [tasks, setTasks] = useState([]);

    const notify = () =>
        toast.success(t("taskadded"), {
            position: "bottom-right",
            style: {
                background: "rgba(23, 23, 23, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px 0 rgba(77, 208, 225, 0.37)",
                color: "#fff",
                borderRadius: "10px"
            }
        });

    useEffect(() => {
        setTasks(
            store.tasks.filter(task => task.date === day.format("YYYY-MM-DD"))
        );
    }, [store.tasks, day]);

    const addTask = async () => {
        if (newTask.trim() !== "") {
            const taskData = {
                text: newTask.trim(),
                completed: false,
                date: day.format("YYYY-MM-DD")
            };
            const data = await actions.createTask(taskData);
            setNewTask("");
            setShowModal(false);
            notify();
            if (data.date === day.format("YYYY-MM-DD")) {
                setTasks([...tasks, data]);
            }
        }
    };

    const toggleTask = async (id, completed) => {
        const taskData = {
            completed: !completed
        };
        const data = await actions.updateTask(id, taskData);
        if (data) {
            setTasks(tasks.map(task => (task.id === data.id ? data : task)));
        }
    };

    const deleteTask = async id => {
        await actions.deleteTask(id);
        setTasks(tasks.filter(task => task.id !== id));
        actions.getAllTask();
    };

    return (
        <div className="p-2 text-left border border-gray-200 rounded-md">
            <div className="text-sm font-medium text-gray-500">
                {day.format("MMM YYYY")}
            </div>
            <div className="text-sm font-medium dark:text-white text-black">
                {day.format("D")}
            </div>
            <div className="mt-6">
                {tasks.map(task => (
                    <div
                        key={task.id}
                        onClick={() => toggleTask(task.id, task.completed)}
                        className={`flex items-center justify-between px-2 py-1 rounded-md mb-2 cursor-pointer ${
                            task.completed
                                ? "bg-gray-300 text-gray-500 line-through"
                                : "bg-cyan-300 text-black"
                        }`}>
                        <div className="text-sm font-bold overflow-hidden">
                            {task.text}
                        </div>
                        <ModalDeleteTask id={task.id} deleteTask={deleteTask} />
                    </div>
                ))}
                <button
                    onClick={() => setShowModal(true)}
                    className="mt-2 flex items-center justify-center px-1 py-0.5 border border-transparent text-sm font-medium rounded-md text-white bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <FaPlus className="h-4 w-4 mr-1" />
                    {t("task")}
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
                                        {t("addtaskto")}{" "}
                                        {day.format("MMM D, YYYY")}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            value={newTask}
                                            onChange={e =>
                                                setNewTask(e.target.value)
                                            }
                                            className="block w-full border border-gray-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-cyan-300 sm:text-md px-4"
                                            placeholder={t("taskdescription")}
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            onClick={addTask}
                                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                            {t("addtask")}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="inline-flex justify-center px-4 py-2 ml-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                            {t("cancel")}
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
    day: PropTypes.object.isRequired
};
