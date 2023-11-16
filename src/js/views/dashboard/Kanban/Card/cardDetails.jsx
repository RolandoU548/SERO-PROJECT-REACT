import React, { useState, useEffect } from "react";
import {
    Calendar,
    CheckSquare,
    Clock,
    CreditCard,
    X,
    Trash,
    Tag as TagIcon
} from "react-feather";
import Editable from "../editable.jsx";
import Modal from "../modal.jsx";
import PropTypes from "prop-types";
import "../../../../../css/CardDetails.css";
import { Label } from "../label.jsx";
import { v4 as uuidv4 } from "uuid";

const CardDetails = props => {
    const colors = ["#61bd4f", "#f2d600", "#ff9f1a", "#eb5a46", "#c377e0"];

    const [values, setValues] = useState({ ...props.card });

    const [input, setInput] = useState(false);
    const [text, setText] = useState(values.title);
    const [labelShow, setLabelShow] = useState(false);

    const initializeTask = value => ({
        id: uuidv4(),
        task: value,
        completed: false
    });

    const initializeTag = (value, color) => ({
        id: uuidv4(),
        tagName: value,
        color: color
    });

    const Input = () => (
        <div className="">
            <input
                autoFocus
                defaultValue={text}
                type={"text"}
                onChange={e => {
                    setText(e.target.value);
                }}
            />
        </div>
    );

    const addTask = value => {
        setValues(prevValues => ({
            ...prevValues,
            task: [...prevValues.task, initializeTask(value)]
        }));
    };

    const removeTask = id => {
        setValues(prevValues => ({
            ...prevValues,
            task: prevValues.task.filter(item => item.id !== id)
        }));
    };

    const deleteAllTask = () => {
        setValues(prevValues => ({
            ...prevValues,
            task: []
        }));
    };

    const updateTask = id => {
        setValues(prevValues => ({
            ...prevValues,
            task: prevValues.task.map(item =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        }));
    };

    const updateTitle = value => {
        setValues(prevValues => ({
            ...prevValues,
            title: value
        }));
    };

    const calculatePercent = () => {
        const totalTask = values.task.length;
        const completedTask = values.task.filter(
            item => item.completed === true
        ).length;

        return Math.floor((completedTask * 100) / totalTask) || 0;
    };

    const removeTag = id => {
        setValues(prevValues => ({
            ...prevValues,
            tags: prevValues.tags.filter(item => item.id !== id)
        }));
    };

    const addTag = (value, color) => {
        setValues(prevValues => ({
            ...prevValues,
            tags: [...prevValues.tags, initializeTag(value, color)]
        }));
    };

    const handleClickListener = e => {
        if (e.code === "Enter") {
            setInput(false);
            updateTitle(text === "" ? values.title : text);
        }
    };

    useEffect(() => {
        document.addEventListener("keypress", handleClickListener);
        return () => {
            document.removeEventListener("keypress", handleClickListener);
        };
    }, [handleClickListener]);

    useEffect(() => {
        if (props.updateCard) props.updateCard(props.bid, values.id, values);
    }, [values]);

    return (
        <Modal onClose={props.onClose}>
            <div className="local__bootstrap">
                <div
                    className="container"
                    style={{ minWidth: "650px", position: "relative" }}>
                    <div className="row pb-4">
                        <div className="col-12">
                            <div className="d-flex align-items-center pt-3 gap-2">
                                <CreditCard className="icon__md" />
                                {input ? (
                                    <Input />
                                ) : (
                                    <h5
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setInput(true)}>
                                        {values.title}
                                    </h5>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <h6 className="text-justify">Label</h6>
                            <div
                                className="d-flex label__color flex-wrap"
                                style={{
                                    width: "500px",
                                    paddingRight: "10px"
                                }}>
                                {values.tags.length !== 0 ? (
                                    values.tags.map(item => (
                                        <span
                                            key={item.id}
                                            className="d-flex justify-content-between align-items-center gap-2"
                                            style={{
                                                backgroundColor: item.color
                                            }}>
                                            {item.tagName.length > 10
                                                ? item.tagName.slice(0, 6) +
                                                "..."
                                                : item.tagName}
                                            <X
                                                onClick={() =>
                                                    removeTag(item.id)
                                                }
                                                style={{
                                                    width: "15px",
                                                    height: "15px"
                                                }}
                                            />
                                        </span>
                                    ))
                                ) : (
                                    <span
                                        style={{ color: "#ccc" }}
                                        className="d-flex justify-content-between align-items-center gap-2"
                                        key="no-labels">
                                        <i> No Labels</i>
                                    </span>
                                )}
                            </div>
                            <div className="check__list mt-2">
                                <div className="d-flex align-items-end  justify-content-between">
                                    <div className="d-flex align-items-center gap-2">
                                        <CheckSquare className="icon__md" />
                                        <h6>Check List</h6>
                                    </div>
                                    <div className="card__action__btn">
                                        <button onClick={() => deleteAllTask()}>
                                            Delete all tasks
                                        </button>
                                    </div>
                                </div>
                                <div className="progress__bar mt-2 mb-2">
                                    <div className="progress flex-1">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: calculatePercent() + "%"
                                            }}
                                            aria-valuenow="75"
                                            aria-valuemin="0"
                                            aria-valuemax="100">
                                            {calculatePercent() + "%"}
                                        </div>
                                    </div>
                                </div>

                                <div className="my-2">
                                    {values.task.length !== 0 ? (
                                        values.task.map(item => (
                                            <div
                                                key={item.id}
                                                className="task__list d-flex align-items-start gap-2">
                                                <input
                                                    className="task__checkbox"
                                                    type="checkbox"
                                                    defaultChecked={
                                                        item.completed
                                                    }
                                                    onChange={() => {
                                                        updateTask(item.id);
                                                    }}
                                                />
                                                <h6
                                                    className={`flex-grow-1 ${
                                                        item.completed === true
                                                            ? "strike-through"
                                                            : ""
                                                    }`}>
                                                    {item.task}
                                                </h6>
                                                <Trash
                                                    onClick={() => {
                                                        removeTask(item.id);
                                                    }}
                                                    style={{
                                                        cursor: "pointer",
                                                        width: "18px",
                                                        height: "18px"
                                                    }}
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        <></>
                                    )}

                                    <Editable
                                        parentClass={"task__editable"}
                                        name={"Add Task"}
                                        btnName={"Add task"}
                                        onSubmit={addTask}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <h6>Add to card</h6>
                            <div className="d-flex card__action__btn flex-column gap-2">
                                <button onClick={() => setLabelShow(true)}>
                                    <span className="icon__sm">
                                        <TagIcon />
                                    </span>
                                    Add Label
                                </button>
                                {labelShow && (
                                    <Label
                                        color={colors}
                                        addTag={addTag}
                                        tags={values.tags}
                                        onClose={() => setLabelShow(false)}
                                    />
                                )}
                                <button>
                                    <span className="icon__sm">
                                        <Clock />
                                    </span>
                                    Date
                                </button>

                                <button
                                    onClick={() =>
                                        props.removeCard(props.bid, values.id)
                                    }>
                                    <span className="icon__sm">
                                        <Trash />
                                    </span>
                                    Delete Card
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

CardDetails.propTypes = {
    onClose: PropTypes.func.isRequired,
    updateCard: PropTypes.func.isRequired,
    bid: PropTypes.string.isRequired,
    removeCard: PropTypes.func.isRequired,
    card: PropTypes.object.isRequired
};

export default CardDetails;
