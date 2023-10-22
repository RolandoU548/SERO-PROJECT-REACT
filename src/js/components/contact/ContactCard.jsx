import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const ContactCard = ({ to, first, second }) => {
    const navigate = useNavigate();

    return (
        <div
            className={
                "cursor-pointer ease-out duration-300 hover:scale-105 w-72 bg-cover rounded-2xl h-[23rem] flex justify-center text-white text-3xl font-semibold border-2 border-white my-5 group relative" +
                " " +
                (to === "SebastianCastroRajbe"
                    ? "bg-[url('SebastianCastroRajbeCard.jpg')] bg-center"
                    : to === "SebastianLopez"
                    ? "bg-[url('SebastianLopezCard.jpg')] bg-center"
                    : to === "RobertoVargas"
                    ? "bg-[url('RobertoVargasCard.jpg')] bg-left"
                    : to === "RolandoUzcategui"
                    ? "bg-[url('RolandoUzcateguiCard.jpeg')] bg-center"
                    : "")
            }
            onClick={() => {
                navigate(to);
            }}>
            <div className="bg-black absolute w-full h-full rounded-2xl ease-out duration-300 group-hover:opacity-30 opacity-50 z-0"></div>
            <h2 className="w-4/5 z-10 relative top-72 h-10 text-center">
                <b className="text-cyan-300">{first}</b>
                {second}
            </h2>
        </div>
    );
};

ContactCard.propTypes = {
    to: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    second: PropTypes.string.isRequired
};
