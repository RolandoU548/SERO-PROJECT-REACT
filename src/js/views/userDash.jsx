import React from "react";
import Header from "../components/dash-component/header";
import Sidebar from "../components/dash-component/sidebar";

import { RiLineChartLine, RiHashtag } from "react-icons/ri";

export const Dash = () => {
    return (
        <>
            <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
                <Sidebar />
                <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
                    <Header />
                    {/* Sección 1 */}
                    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
                        {/* Card 1 */}
                        <div className="bg-primary-100 p-8 rounded-xl text-gray-500 flex flex-col gap-6">
                            <RiLineChartLine className="text-5xl" />
                            <h4 className="text-2xl">Earnings</h4>
                            <span className="text-5xl text-black">
                                &#36; 8,350
                            </span>
                            <span className="py-1 px-3 bg-primary-300/80 rounded-full">
                                + 10% Este mes
                            </span>
                        </div>
                        {/* Card 2 */}
                        <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
                            <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
                                <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                                    98
                                </span>
                                <div>
                                    <h3 className="font-bold">Tramites</h3>
                                    <p className="text-gray-500">En top 30%</p>
                                </div>
                            </div>
                            <div className="bg-primary-100/10 rounded-xl p-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                                        32
                                    </span>
                                    <div>
                                        <h3 className="font-bold">Clientes</h3>
                                        <p className="text-gray-500">
                                            8 Este Mes
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                                        Mobile app
                                    </span>
                                    <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                                        Branding
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
                            <h1 className="text-2xl font-bold mb-8">
                                Clientes
                            </h1>
                            <div className="bg-white p-8 rounded-xl shadow-2xl">
                                <div className="flex items-center gap-4 mb-8">
                                    <img
                                        src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                                        className="w-14 h-14 object-cover rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-bold">
                                            Rolando Uzcátegui
                                        </h3>
                                        <p className="text-gray-500">
                                            2 days Created
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                                        className="w-14 h-14 object-cover rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-bold">
                                            Sabastian Lopez
                                        </h3>
                                        <p className="text-gray-500">
                                            1 day Created
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <a
                                        href="#"
                                        className="hover:text-primary-100 transition-colors hover:underline">
                                        Ver Clientes
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Section 2 */}
                    <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
                        <div>
                            <h1 className="text-2xl font-bold mb-8">
                                Archivos Recientes
                            </h1>
                            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
                                {/* Card 1 */}
                                <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                                    <div className="col-span-2 flex items-center gap-4">
                                        <img
                                            src="https://img.freepik.com/foto-gratis/hombre-joven-hermoso-contento-camiseta-azul-que-senala-lado_1262-17845.jpg"
                                            className="w-14 h-14 object-cover rounded-xl"
                                        />
                                        <div>
                                            <h3 className="font-bold">
                                                Alexander Williams
                                            </h3>
                                            <p className="text-gray-500">
                                                JQ Holdings
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                                            activo
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-bold">
                                            20 Tramites
                                        </span>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                                    <div className="col-span-2 flex items-center gap-4">
                                        <img
                                            src="https://img.freepik.com/foto-gratis/alegre-joven-deportista-posando-mostrando-pulgares-arriba-gesto_171337-8194.jpg"
                                            className="w-14 h-14 object-cover rounded-xl"
                                        />
                                        <div>
                                            <h3 className="font-bold">
                                                Jhon Philips
                                            </h3>
                                            <p className="text-gray-500">
                                                Inchor Techs
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                                            inactivo
                                        </span>
                                    </div>
                                    <div>
                                        <span className="font-bold">
                                            40 Tramites
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-primary-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
                                <div>
                                    <RiHashtag className="text-4xl -rotate-12" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-white">
                                        Engage with clients
                                    </h5>
                                    <h5>Join slack channel</h5>
                                </div>
                                <div className="w-full xl:w-auto">
                                    <button className="bg-primary-100 py-2 px-6 rounded-xl text-white w-full">
                                        Join now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-8">
                                Próximos Trámites
                            </h1>
                            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
                                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                                            className="w-14 h-14 object-cover rounded-full"
                                        />
                                        <div>
                                            <h3 className="font-bold">
                                                Thomas Martin
                                            </h3>
                                            <p className="text-gray-500">
                                                Actualizado hace 10 meses
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="bg-primary-100 py-2 px-4 rounded-full text-white">
                                            Design
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="text-lg font-bold">
                                        Tramite de Migración Pendiente
                                    </h5>
                                    <p className="text-gray-500">
                                        Se debe realizar tramite de migración
                                        para compañia Holding JQ
                                    </p>
                                </div>
                                <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
                                    <div>
                                        <sup className="text-sm text-gray-500">
                                            &#36;
                                        </sup>{" "}
                                        <span className="text-2xl font-bold mr-2">
                                            8,700
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            / month
                                        </span>
                                    </div>
                                    <div>
                                        <span className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">
                                            Legal
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};
