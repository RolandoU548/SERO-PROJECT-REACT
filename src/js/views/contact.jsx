import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const [t] = useTranslation("app");
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    return (
        <>
            <div className="font-serif text-gray-200">
                <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-7xl font-black z-10 text-center text-white mt-36">
                    Fundadores de SERØ
                </h2>
                <div
                    className="flex justify-evenly flex-wrap my-20 gap-5"
                    id="cards">
                    <div
                        className="cursor-pointer ease-out duration-300 hover:scale-105 w-80 bg-[url('SebastianLopezCard.jpg')] bg-center bg-cover rounded-2xl h-[23rem] flex justify-center text-white text-3xl font-semibold border-2 border-white"
                        onClick={() => {
                            navigate("/SebastianLopez");
                        }}>
                        <div className="bg-black absolute w-80 h-[23rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                        <h2 className="z-10 relative top-72 h-10">
                            <bold className="text-cyan-300">SE</bold>bastián
                            López
                        </h2>
                    </div>
                    <div
                        className="cursor-pointer ease-out duration-300 hover:scale-105 w-80 bg-[url('SebastianCastroRajbeCard.jpg')] bg-center bg-cover rounded-2xl h-[23rem] flex justify-center text-white text-2xl font-semibold border-2 border-white"
                        onClick={() => {
                            navigate("/SebastianCastroRajbe");
                        }}>
                        <div className="bg-black absolute w-80 h-[23rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                        <h2 className="z-10 relative top-72 h-10">
                            <bold className="text-cyan-300">SE</bold>bastián
                            Castro Rajbe
                        </h2>
                    </div>
                    <div
                        className="cursor-pointer ease-out duration-300 hover:scale-105 w-80 bg-[url('RobertoVargasCard.jpg')] bg-left bg-cover rounded-2xl h-[23rem] flex justify-center text-white text-3xl font-semibold border-2 border-white"
                        onClick={() => {
                            navigate("/RobertoVargas");
                        }}>
                        <div className="bg-black absolute w-80 h-[23rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                        <h2 className="z-10 relative top-72 h-10">
                            <bold className="text-cyan-300">RØ</bold>berto
                            Vargas
                        </h2>
                    </div>
                    <div
                        className="cursor-pointer ease-out duration-300 hover:scale-105 w-80 bg-[url('RolandoUzcateguiCard.jpeg')] bg-center bg-cover rounded-2xl h-[23rem] flex justify-center text-white text-3xl font-semibold border-2 border-white"
                        onClick={() => {
                            navigate("/RolandoUzcategui");
                        }}>
                        <div className="bg-black absolute w-80 h-[23rem] rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0"></div>
                        <h2 className="z-10 relative top-72 h-10">
                            <bold className="text-cyan-300">RØ</bold>lando
                            Uzcátegui
                        </h2>
                    </div>
                </div>
                <button
                    onClick={() => {
                        actions.setToken("Hey");
                    }}>
                    token
                </button>
                <div></div>
                <button
                    className="text-4xl"
                    onClick={() => {
                        navigate("/private");
                    }}>
                    PRIVATE
                </button>
            </div>
        </>
    );
};
