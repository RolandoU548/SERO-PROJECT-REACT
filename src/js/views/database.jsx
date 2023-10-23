import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/app.css";
import "../../css/glass.css";
import "../../css/database.css";
import { useTranslation } from "react-i18next";

export const Database = () => {
    const [t] = useTranslation("app");

    const navigate = useNavigate();
    return (
        <>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-screen h-screen -z-50 fixed top-0 left-0 object-cover">
                <source src="DatabaseBlackBG.mp4" type="video/mp4" />
            </video>
            <div className="font-serif text-gray-200 mt-28">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-white m-auto">
                    Database
                </h1>
                <div className="">
                    <div className="flex justify-end mr-12">
                        <div
                            className="flex justify-center items-center mr-5 w-64 h-16 text-2xl bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] rounded-full cursor-pointer"
                            // onClick={() => {
                            //     setIsOpen(true);
                            // }}
                        >
                            <p>New Column</p>
                            <i className="ml-4 fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className="flex justify-end ">
                        <div className="glass p-10 w-11/12 h-screen mt-5 mb-[10rem] m-auto table2">
                            <div className="relative force-overflow table1 shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Product name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Product name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Product name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Color
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Category
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Accesories
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Available
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Weight
                                            </th>
                                            {/* <th
                                                scope="col"
                                                className="px-6 py-3">
                                                Action
                                            </th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4"></td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple MacBook Pro 17
                                            </th>
                                            <td className="px-6 py-4">
                                                Silver
                                            </td>
                                            <td className="px-6 py-4">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">$2999</td>
                                            <td className="px-6 py-4">
                                                3.0 lb.
                                            </td>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4"></td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Microsoft Surface Pro
                                            </th>
                                            <td className="px-6 py-4">White</td>
                                            <td className="px-6 py-4">
                                                Laptop PC
                                            </td>
                                            <td className="px-6 py-4">No</td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">$1999</td>
                                            <td className="px-6 py-4">
                                                1.0 lb.
                                            </td>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4"></td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-6 py-4">Black</td>
                                            <td className="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">No</td>
                                            <td className="px-6 py-4">$99</td>
                                            <td className="px-6 py-4">
                                                0.2 lb.
                                            </td>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4"></td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple Watch
                                            </th>
                                            <td className="px-6 py-4">Black</td>
                                            <td className="px-6 py-4">
                                                Watches
                                            </td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">No</td>
                                            <td className="px-6 py-4">$199</td>
                                            <td className="px-6 py-4">
                                                0.12 lb.
                                            </td>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4"></td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple iMac
                                            </th>
                                            <td className="px-6 py-4">
                                                Silver
                                            </td>
                                            <td className="px-6 py-4">PC</td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">$2999</td>
                                            <td className="px-6 py-4">
                                                7.0 lb.
                                            </td>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4"></td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple AirPods
                                            </th>
                                            <td className="px-6 py-4">White</td>
                                            <td className="px-6 py-4">
                                                Accessories
                                            </td>
                                            <td className="px-6 py-4">No</td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">$399</td>
                                            <td className="px-6 py-4">38 g</td>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4"></td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                iPad Pro
                                            </th>
                                            <td className="px-6 py-4">Gold</td>
                                            <td className="px-6 py-4">
                                                Tablet
                                            </td>
                                            <td className="px-6 py-4">No</td>
                                            <td className="px-6 py-4">Yes</td>
                                            <td className="px-6 py-4">$699</td>
                                            <td className="px-6 py-4">
                                                1.3 lb.
                                            </td>
                                            <td className="flex items-center px-6 py-4 space-x-3">
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Remove
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th>ROBERTO</th>
                                        <th>ROLANDO</th>
                                        <th>SEBAS</th>
                                        <th>BYNX</th>
                                        <th>BYNX</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                    </tr>
                                    <tr>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                    </tr>
                                    <tr>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                    </tr>
                                    <tr>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                    </tr>
                                    <tr>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                        <td>DATABASE</td>
                                    </tr>
                                </tbody>
                            </table> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
