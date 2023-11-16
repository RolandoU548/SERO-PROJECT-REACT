import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { MoreHorizontal, CheckSquare } from "react-feather";
import Tag from "../tag.jsx";
import PropTypes from "prop-types";
import "../../../../../css/Card.css";
import CardDetails from "./cardDetails.jsx";

const Card = props => {
    const [modalShow, setModalShow] = useState(false);

    const handleCardClick = () => {
        setModalShow(true);
    };

    const handleModalClose = () => {
        setModalShow(false);
    };

    return (
        <Draggable
            draggableId={props.id.toString()}
            index={props.index}
            key={props.id.toString()}>
            {(provided, snapshot) => (
                <>
                    {modalShow && (
                        <CardDetails
                            updateCard={props.updateCard}
                            onClose={handleModalClose}
                            card={props.card}
                            bid={props.bid}
                            removeCard={props.removeCard}
                        />
                    )}

                    <div
                        className={`custom__card ${
                            snapshot.isDragging ? "dragging" : ""
                        }`}
                        onClick={handleCardClick}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <div className="card__text">
                            <p>{props.title}</p>
                            <MoreHorizontal className="car__more" />
                        </div>

                        <div className="card__tags">
                            {props.tags?.map((item, index) => (
                                <Tag
                                    key={index}
                                    tagName={item.tagName}
                                    color={item.color}
                                />
                            ))}
                        </div>

                        <div className="card__footer">
                            {props.card.task.length !== 0 && (
                                <div className="task">
                                    <CheckSquare />
                                    <span>
                                        {`${
                                            props.card.task.filter(
                                                item => item.completed === true
                                            ).length
                                        } / ${props.card.task.length}`}
                                    </span>
                                </div>
                            )}
                        </div>

                        {provided.placeholder}
                    </div>
                </>
            )}
        </Draggable>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    updateCard: PropTypes.func.isRequired,
    removeCard: PropTypes.func.isRequired,
    bid: PropTypes.string.isRequired,
    card: PropTypes.shape({
        task: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                task: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired
            })
        )
    }),
    tags: PropTypes.arrayOf(
        PropTypes.shape({
            tagName: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        })
    )
};

export default Card;
