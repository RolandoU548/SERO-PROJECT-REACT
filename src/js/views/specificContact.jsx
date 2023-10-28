import React from "react";
import { NotFound } from "./notfound";
import { useNavigate, useParams } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { Navbar } from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { BackArrow } from "../components/BackArrow";

export const SpecificContact = () => {
    const [t] = useTranslation("specificContact");
    const { contact } = useParams();
    let data;
    switch (contact) {
        case "SebastianCastroRajbe":
            data = {
                name: "Sebastián Castro Rajbe",
                nickname: "BYNX",
                p1: t("p1BYNX"),
                p2: t("p2BYNX"),
                p3: t("p3BYNX"),
                img: "SebastianCastroRajbeCard.jpg",
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
                img: "SebastianLopezCard.jpg",
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
                img: "RolandoUzcateguiCard.jpeg",
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
                img: "RobertoVargasCard.jpg",
                bg: "left"
            };
            break;
        default:
            return <NotFound />;
    }
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="font-serif text-black dark:text-gray-200">
                <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white mt-36">
                    {data.name}
                </h2>
                <div className="glass rounded-2xl w-9/12 ml-40 mt-20 mb-16 flex justify-between relative flex-wrap lg:flex-nowrap">
                    <div
                        className={
                            "cursor-pointer transition ease-out duration-300 hover:scale-105 lg:w-96 w-full bg-cover rounded-2xl h-[23rem] border-2 border-white relative" +
                            " " +
                            (contact === "SebastianCastroRajbe"
                                ? "bg-[url('SebastianCastroRajbeCard.jpg')] bg-center"
                                : contact === "SebastianLopez"
                                ? "bg-[url('SebastianLopezCard.jpg')] bg-center"
                                : contact === "RobertoVargas"
                                ? "bg-[url('RobertoVargasCard.jpg')] bg-left"
                                : contact === "RolandoUzcategui"
                                ? "bg-[url('RolandoUzcateguiCard.jpeg')] bg-center"
                                : "")
                        }
                        onClick={() => {
                            navigate(`/contact/${contact}`);
                        }}>
                        <div className="bg-black absolute w-full h-full rounded-2xl ease-out duration-300 hover:opacity-30 opacity-50 z-0 left-0 top-0"></div>
                    </div>
                    <div className="lg:w-[50rem] w-full p-10 text-lg flex items-center">
                        <div>
                            <h2>
                                {t("aka")} {data.nickname}.
                            </h2>
                            <p className="mt-10">{data.p1}</p>
                            <p className="mt-10">{data.p2}</p>
                            <p className="mt-10">{data.p3}</p>
                        </div>
                    </div>
                    <BackArrow className="absolute right-5" to="/contact" />
                </div>
            </div>
        </>
    );
};
