import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const FounderCard = ({ to, first, second }) => {
    const navigate = useNavigate();

    return (
        <div
            className={
                "cursor-pointer ease-out duration-300 hover:scale-105 w-72 bg-cover rounded-2xl h-[23rem] flex justify-center text-white text-3xl font-semibold border-2 border-white my-5 group relative" +
                " " +
                (to === "SebastianCastroRajbe"
                    ? "bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fcontact%2FSebastianCastroRajbeCard.jpg?alt=media&token=232c13b9-a942-41cf-bdf8-7ada779fb8b8&_gl=1*13pgz92*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTYzNi42MC4wLjA.')] bg-center"
                    : to === "SebastianLopez"
                    ? "bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fcontact%2FSebastianLopezCard.jpg?alt=media&token=6ffaa8ad-d0c1-4dfb-a90a-2c0838830d7a&_gl=1*17dyvzc*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTY0NS41MS4wLjA.')] bg-center"
                    : to === "RobertoVargas"
                    ? "bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fcontact%2FRobertoVargasCard.jpg?alt=media&token=3ffe1fb7-69fd-4476-baa3-61a7673e5225&_gl=1*1y6d1f8*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTYxMy4xNi4wLjA.')] bg-left"
                    : to === "RolandoUzcategui"
                    ? "bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fcontact%2FRolandoUzcateguiCard.jpg?alt=media&token=ea051e60-71ae-406e-87d6-85a62a382d77&_gl=1*7ifq9c*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5OTA3NjA3Ni43LjEuMTY5OTA3NjEzMi40LjAuMA..')] bg-center"
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

FounderCard.propTypes = {
    to: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    second: PropTypes.string.isRequired
};
