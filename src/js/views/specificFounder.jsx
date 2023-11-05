import React from "react";
import { NotFound } from "./notfound";
import { useNavigate, useParams } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";
import { BackArrow } from "../components/BackArrow";

export const SpecificFounder = () => {
    const [t] = useTranslation("specificFounder");
    const { founder } = useParams();
    let data;
    switch (founder) {
        case "SebastianCastroRajbe":
            data = {
                name: "Sebastián Castro Rajbe",
                nickname: "BYNX",
                p1: t("p1BYNX"),
                p2: t("p2BYNX"),
                p3: t("p3BYNX"),
                img: "https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fcontact%2FSebastianCastroRajbeCard.jpg?alt=media&token=232c13b9-a942-41cf-bdf8-7ada779fb8b8&_gl=1*13pgz92*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTYzNi42MC4wLjA.",
                bg: "center"
            };
            break;
        case "SebastianLopez":
            data = {
                name: "Sebastián López",
                nickname: "EL SEBA",
                p1: t("p1SEBAS"),
                p2: t("p2SEBAS"),
                p3: t("p3SEBAS"),
                img: "https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fcontact%2FSebastianLopezCard.jpg?alt=media&token=6ffaa8ad-d0c1-4dfb-a90a-2c0838830d7a&_gl=1*17dyvzc*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTY0NS41MS4wLjA.",
                bg: "center"
            };
            break;
        case "RolandoUzcategui":
            data = {
                name: "Rolando Uzcátegui",
                nickname: "EL SIR ROLAND",
                p1: t("p1ROLANDO"),
                p2: t("p2ROLANDO"),
                p3: t("p3ROLANDO"),
                img: "https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fcontact%2FRolandoUzcateguiCard.jpg?alt=media&token=ea051e60-71ae-406e-87d6-85a62a382d77&_gl=1*7ifq9c*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5OTA3NjA3Ni43LjEuMTY5OTA3NjEzMi40LjAuMA..",
                bg: "center"
            };
            break;
        case "RobertoVargas":
            data = {
                name: "Roberto Vargas",
                nickname: "EL PASTOR",
                p1: t("p1ROBERTO"),
                p2: t("p2ROBERTO"),
                p3: t("p3ROBERTO"),
                img: "https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fcontact%2FRobertoVargasCard.jpg?alt=media&token=3ffe1fb7-69fd-4476-baa3-61a7673e5225&_gl=1*1y6d1f8*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTYxMy4xNi4wLjA.",
                bg: "left"
            };
            break;
        default:
            return <NotFound />;
    }
    const navigate = useNavigate();
    return (
        <>
            <div className="font-serif dark:text-white">
                <h2 className="mix-blend-difference text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white mt-32">
                    {data.name}
                </h2>
                <div className="glass rounded-2xl md:w-9/12 w-10/12 my-16 m-auto flex justify-between relative flex-col lg:flex-row">
                    <BackArrow
                        className="absolute right-5 lg:text-black text-white"
                        to="/founders"
                    />
                    <div
                        className={
                            "cursor-pointer transition ease-out duration-300 hover:scale-105 lg:w-4/5 w-full bg-cover rounded-2xl h-[30rem] border-2 border-white relative" +
                            " " +
                            (founder === "SebastianCastroRajbe"
                                ? "bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fcontact%2FSebastianCastroRajbeCard.jpg?alt=media&token=232c13b9-a942-41cf-bdf8-7ada779fb8b8&_gl=1*13pgz92*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTYzNi42MC4wLjA.')] bg-center"
                                : founder === "SebastianLopez"
                                ? "bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fcontact%2FSebastianLopezCard.jpg?alt=media&token=6ffaa8ad-d0c1-4dfb-a90a-2c0838830d7a&_gl=1*17dyvzc*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTY0NS41MS4wLjA.')] bg-center"
                                : founder === "RobertoVargas"
                                ? "bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fcontact%2FRobertoVargasCard.jpg?alt=media&token=3ffe1fb7-69fd-4476-baa3-61a7673e5225&_gl=1*1y6d1f8*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjEuMTY5ODU1OTYxMy4xNi4wLjA.')] bg-left"
                                : founder === "RolandoUzcategui"
                                ? "bg-[url('https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2Fcontact%2FRolandoUzcateguiCard.jpg?alt=media&token=ea051e60-71ae-406e-87d6-85a62a382d77&_gl=1*7ifq9c*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5OTA3NjA3Ni43LjEuMTY5OTA3NjEzMi40LjAuMA..')] bg-top"
                                : "")
                        }
                        onClick={() => {
                            navigate(`/founders/${founder}`);
                        }}>
                        <div className="bg-black absolute w-full h-full rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 left-0 top-0"></div>
                    </div>
                    <div className="lg:1/5 w-full p-5 sm:p-10 lg:pt-0 sm:text-lg tiny:text-base minimum:text-md text-sm flex items-center">
                        <div>
                            <h2>
                                {t("aka")} {data.nickname}.
                            </h2>
                            <p className="mt-10">{data.p1}</p>
                            <p className="mt-10">{data.p2}</p>
                            <p className="mt-10">{data.p3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
