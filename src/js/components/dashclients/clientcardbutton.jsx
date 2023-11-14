import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import PropTypes from "prop-types";

export const ClientCardButton = ({ client }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/clientcard/${client.id}`);
    };

    return (
        <>
            <button
                className="m-1 p-1.5 text-xs rounded-lg bg-black text-white border border-neutral-600 hover:bg-neutral-700  hover:border-cyan-300 hover:text-cyan-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                onClick={handleClick}>
                <FaUser />
            </button>
        </>
    );
};

ClientCardButton.propTypes = {
    client: PropTypes.object
};
