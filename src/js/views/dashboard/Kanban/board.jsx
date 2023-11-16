import React, { useEffect, useState } from "react";
import Card from "../Kanban/Card/card.jsx";
import "../../../../css/Board.css";
import { MoreHorizontal } from "react-feather";
import Editable from "../Kanban/editable.jsx";
import Dropdown from "../Kanban/dropdown.jsx";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";

const Board = props => {
    const [show, setShow] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [card, setCard] = useState(props.card);

    useEffect(() => {
        document.addEventListener("keypress", e => {
            if (e.code === "Enter") setShow(false);
        });
        return () => {
            document.removeEventListener("keypress", e => {
                if (e.code === "Enter") setShow(false);
            });
        };
    }, []);

    return (
        <div className="board">
            <div className="board__top">
                {show ? (
                    <div>
                        <input
                            className="title__input"
                            type={"text"}
                            defaultValue={props.name}
                            onChange={e => {
                                props.setName(e.target.value, props.id);
                            }}
                        />
                    </div>
                ) : (
                    <div>
                        <p
                            onClick={() => {
                                setShow(true);
                            }}
                            className="board__title">
                            {props?.name || "Name of Board"}
                            <span className="total__cards">
                                {props.card?.length}
                            </span>
                        </p>
                    </div>
                )}
                <div
                    onClick={() => {
                        setDropdown(true);
                    }}>
                    <MoreHorizontal />
                    {dropdown && (
                        <Dropdown
                            class="board__dropdown"
                            onClose={() => {
                                setDropdown(false);
                            }}>
                            <p onClick={() => props.removeBoard(props.id)}>
                                Delete Board
                            </p>
                        </Dropdown>
                    )}
                </div>
            </div>
            {/* Droppable para permitir arrastrar tarjetas */}
            <Droppable droppableId={props.id.toString()}>
                {provided => (
                    <div
                        className="board__cards"
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        {/* Iterar sobre las tarjetas y renderizar el componente Card */}
                        {props.card?.map((items, index) => (
                            <Card
                                key={items.id}
                                bid={props.id}
                                id={items.id}
                                index={index}
                                title={items.title}
                                tags={items.tags}
                                updateCard={props.updateCard}
                                removeCard={props.removeCard}
                                card={items}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <div className="board__footer">
                <Editable
                    name={"Add Card"}
                    btnName={"Add Card"}
                    placeholder={"Enter Card Title"}
                    // onSubmit debe pasar el valor al método addCard del componente principal
                    onSubmit={value => props.addCard(value, props.id)}
                />
            </div>
        </div>
    );
};

Board.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    card: PropTypes.array.isRequired,
    setName: PropTypes.func.isRequired,
    addCard: PropTypes.func.isRequired,
    removeCard: PropTypes.func.isRequired,
    removeBoard: PropTypes.func.isRequired,
    updateCard: PropTypes.func.isRequired
};

export default Board;
