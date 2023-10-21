import React from "react";
import { ContactCard } from "../components/contact/ContactCard.jsx";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
    const navigate = useNavigate();
    return (
        <div className="font-serif text-gray-200 ">
            <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-7xl font-black z-10 text-center text-white mt-36">
                Fundadores de SERØ
            </h2>
            <div className="flex justify-evenly flex-wrap my-20">
                <ContactCard
                    to="SebastianLopez"
                    first="SE"
                    second="bastián López"
                    img="SebastianLopezCard.jpg"
                    bg="center"
                />
                <ContactCard
                    to="SebastianCastroRajbe"
                    first="SE"
                    second="bastián
                    Castro Rajbe"
                    img="SebastianCastroRajbeCard.jpg"
                    bg="center"
                />
                <ContactCard
                    to="RobertoVargas"
                    first="RØ"
                    second="berto Vargas"
                    img="RobertoVargasCard.jpg"
                    bg="left"
                />
                <ContactCard
                    to="RolandoUzcategui"
                    first="RØ"
                    second="lando Uzcátegui"
                    img="RolandoUzcateguiCard.jpeg"
                    bg="center"
                />
            </div>
            <button
                className="block"
                onClick={() => {
                    localStorage.setItem("token", "sdfas2e");
                }}>
                token
            </button>
            <button
                className="text-4xl block"
                onClick={() => {
                    navigate("/private");
                }}>
                PRIVATE
            </button>
        </div>
    );
};
