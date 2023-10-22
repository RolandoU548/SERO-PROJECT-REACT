import React from "react";
import { NotFound } from "./notfound";
import { useNavigate, useParams } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { Navbar } from "../components/Navbar";
import { useTranslation } from "react-i18next";

export const SpecificContact = () => {
    const [t] = useTranslation("app");
    const { contact } = useParams();
    let data;
    switch (contact) {
        case "SebastianCastroRajbe":
            data = {
                name: "Sebastián Castro Rajbe",
                nickname: "BYNX",
                p1: "Es comunicador social, fotógrafo y desarrollador Full-Stack, especializado en Front-End.",
                p2: "Le gusta crear funcionalidades complejas que parezcan tareas simples para el usuario.",
                p3: "Es el responsable de los videos de fondo",
                img: "SebastianCastroRajbeCard.jpg",
                bg: "center"
            };
            break;
        case "SebastianLopez":
            data = {
                name: "Sebastián López",
                nickname: "EL SEBA",
                p1: "Es diseñador gráfico y desarrollador Full-Stack, especializado en Front-End.",
                p2: "Conoce la psicología del consumidor y del usuario cibernauta.",
                p3: "Visionario del nombre SERØ.",
                img: "SebastianLopezCard.jpg",
                bg: "center"
            };
            break;
        case "RolandoUzcategui":
            data = {
                name: "Rolando Uzcátegui",
                nickname: "EL SIR ROLAND",
                p1: "Estudia Ingeniería de la Computación y es desarrollador Full-Stack, su fuerte yace en el lado del Back-End, sin embargo, es la mente maestra del equipo y domina todas las areas sin ningún inconveniente.",
                p2: "Fue quien estableció las principales tecnologías del proyecto.",
                p3: "Esta no es su cara, su cara se desconoce por razones desconocidas.",
                img: "RolandoUzcateguiCard.jpeg",
                bg: "center"
            };
            break;
        case "RobertoVargas":
            data = {
                name: "Roberto Vargas",
                nickname: "EL PASTOR",
                p1: "Se gana la vida con su empresa 'Roberto Vargas Solutions' (RVS) y crea sistemas de administración de datos. Es desarrollador Full-Stack, especializado tanto en Front-End como Back-End.",
                p2: "Busca crear soluciones sencillas que optimicen el trabajo y del desarrollo en el proyecto.",
                p3: "Fue el responsable de establecer las bases y fundamentos de la esencia de SERØ.",
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
            <div className="font-serif text-gray-200">
                <div className="h-40"></div>
                <h2 className="mix-blend-difference lg:px-32 text-3xl minimum:text-[2.5rem] tiny:text-6xl sm:text-7xl md:text-8xl font-black z-10 text-center text-white">
                    {data.name}
                </h2>
                <div className="glass rounded-2xl w-9/12 ml-40 mt-20 mb-16 flex justify-between">
                    <div
                        className={
                            "cursor-pointer transition ease-out duration-300 hover:scale-105 w-96 bg-cover rounded-2xl h-[23rem] border-2 border-white relative" +
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
                    <div className="w-[50rem] p-10 text-lg flex items-center">
                        <div>
                            <h2>Mejor conocido como: {data.nickname}.</h2>
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
