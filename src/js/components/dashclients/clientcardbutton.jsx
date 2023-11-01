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
                className="ml-2 px-2 py-1 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                onClick={handleClick}>
                <FaUser />
            </button>
        </>
    );
};

ClientCardButton.propTypes = {
    client: PropTypes.object
};
