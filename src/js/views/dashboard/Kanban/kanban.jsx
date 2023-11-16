import React, { useEffect, useState } from "react";
import "../../../../css/Kanban.css";
import Board from "../Kanban/board.jsx";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import Editable from "../Kanban/editable.jsx";

export const Kanban = () => {
    const [data, setData] = useState(
        localStorage.getItem("kanban-board")
            ? JSON.parse(localStorage.getItem("kanban-board"))
            : []
    );

    const setName = (title, bid) => {
        const index = data.findIndex(item => item.id === bid);
        const tempData = [...data];
        tempData[index].boardName = title;
        setData(tempData);
    };

    const dragCardInBoard = (source, destination) => {
        const tempData = [...data];
        const destinationBoardIdx = tempData.findIndex(
            item => item.id.toString() === destination.droppableId
        );
        const sourceBoardIdx = tempData.findIndex(
            item => item.id.toString() === source.droppableId
        );
        tempData[destinationBoardIdx].card.splice(
            destination.index,
            0,
            tempData[sourceBoardIdx].card[source.index]
        );
        tempData[sourceBoardIdx].card.splice(source.index, 1);

        return tempData;
    };

    const addCard = (title, bid) => {
        const index = data.findIndex(item => item.id === bid);
        const tempData = [...data];
        tempData[index].card.push({
            id: uuidv4(),
            title: title,
            tags: [],
            task: []
        });
        setData(tempData);
    };

    const removeCard = (boardId, cardId) => {
        const index = data.findIndex(item => item.id === boardId);
        const tempData = [...data];
        const cardIndex = data[index].card.findIndex(
            item => item.id === cardId
        );

        tempData[index].card.splice(cardIndex, 1);
        setData(tempData);
    };

    const addBoard = title => {
        const tempData = [...data];
        tempData.push({
            id: uuidv4(),
            boardName: title,
            card: []
        });
        setData(tempData);
    };

    const removeBoard = bid => {
        const tempData = [...data];
        const index = data.findIndex(item => item.id === bid);
        tempData.splice(index, 1);
        setData(tempData);
    };

    const onDragEnd = result => {
        const { source, destination } = result;
        if (!destination) return;

        if (source.droppableId === destination.droppableId) return;

        setData(dragCardInBoard(source, destination));
    };

    const updateCard = (bid, cid, card) => {
        const index = data.findIndex(item => item.id === bid);
        if (index < 0) return;

        const tempBoards = [...data];
        const cards = tempBoards[index].card;

        const cardIndex = cards.findIndex(item => item.id === cid);
        if (cardIndex < 0) return;

        tempBoards[index].card[cardIndex] = card;
        setData(tempBoards);
    };

    useEffect(() => {
        localStorage.setItem("kanban-board", JSON.stringify(data));
    }, [data]);

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="App">
                <div className="app_outer">
                    <div className="app_boards">
                        {data.map(item => (
                            <Board
                                key={item.id}
                                id={item.id}
                                name={item.boardName}
                                card={item.card}
                                setName={setName}
                                addCard={addCard}
                                removeCard={removeCard}
                                removeBoard={removeBoard}
                                updateCard={updateCard}
                            />
                        ))}
                        <Editable
                            className={"add__board"}
                            name={"Add Board"}
                            btnName={"Add Board"}
                            onSubmit={addBoard}
                            placeholder={"Enter Board Title"}
                        />
                    </div>
                </div>
            </div>
        </DragDropContext>
    );
};
