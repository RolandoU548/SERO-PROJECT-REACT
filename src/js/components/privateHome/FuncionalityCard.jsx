import React from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { OpacityBackground } from "../OpacityBackground";

export const FuncionalityCard = ({ title, image, to }) => {
    const navigate = useNavigate();
    return (
        <div
            className={`cursor-pointer ease-out duration-300 hover:scale-105 w-72 bg-center bg-cover rounded-2xl h-[25rem] flex justify-center items-center text-white text-5xl font-semibold border-2 border-white relative bg-[url('${image}')] `}
            onClick={() => {
                navigate(to);
            }}>
            <OpacityBackground className="rounded-2xl" />
            <h2 className="z-10 pointer-events-none text-center">{title}</h2>
        </div>
    );
};

FuncionalityCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};
