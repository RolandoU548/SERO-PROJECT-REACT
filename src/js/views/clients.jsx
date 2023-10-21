import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdFilterList } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";

const clientsData = [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+1 123-456-7890",
        image: "https://via.placeholder.com/50",
        business: "ABC Inc.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        status: "active"
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "janedoe@example.com",
        phone: "+1 234-567-8901",
        image: "https://via.placeholder.com/50",
        business: "XYZ Corp.",
        description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        status: "inactive"
    }
    // Add more clients here
];

export const Clients = () => {
    const [t] = useTranslation("app");
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const handleFilter = event => {
        setFilter(event.target.value);
    };

    const handleCreateClient = () => {
        // Navigate to create client page
        navigate("/create-client");
    };

    const filteredClients = clientsData.filter(client => {
        // Filter by search term
        if (searchTerm !== "") {
            const search = searchTerm.toLowerCase();
            const name = client.name.toLowerCase();
            const email = client.email.toLowerCase();
            const phone = client.phone.toLowerCase();
            if (
                !name.includes(search) &&
                !email.includes(search) &&
                !phone.includes(search)
            ) {
                return false;
            }
        }

        // Filter by dropdown filter
        if (filter !== "") {
            if (client.name !== filter) {
                return false;
            }
        }

        return true;
    });

    return (
        <>
            <div className="font-serif text-gray-200 min-h-screen bg-[url('ClientsBG.jpg')] bg-cover bg-bottom">
                <div className="h-28"></div>
                <h1 className="lg:px-36 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-white">
                    Clients
                </h1>
                <div className="glass p-10 w-11/12 mt-5 m-auto">
                    <div className="flex justify-between items-center mb-5">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search clients"
                                className="w-72 px-3 py-2 rounded-full bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                        </div>
                        <div className="relative">
                            <button
                                type="button"
                                className="w-36 px-3 py-2 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                onClick={handleCreateClient}>
                                <BsPlusCircle className="inline-block mr-2 mb-1" />
                                New Client
                            </button>
                            <IoIosArrowDown
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                                onClick={() => setShowFilters(!showFilters)}
                            />
                            {showFilters && (
                                <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200">
                                    <div className="px-4 py-2 border-b border-gray-200">
                                        <h2 className="text-lg font-bold">
                                            Filters
                                        </h2>
                                    </div>
                                    <div className="px-4 py-2">
                                        <label className="block mb-2 font-bold text-gray-700">
                                            Name
                                        </label>
                                        <select
                                            className="w-full px-3 py-2 rounded-full bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            value={filter}
                                            onChange={handleFilter}>
                                            <option value="">All</option>
                                            {clientsData.map(client => (
                                                <option
                                                    key={client.id}
                                                    value={client.name}>
                                                    {client.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                                    Phone
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClients.map(client => (
                                <tr key={client.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img
                                            src={client.image}
                                            alt={client.name}
                                            className="w-10 h-10 rounded-full"
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {client.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {client.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {client.phone}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
