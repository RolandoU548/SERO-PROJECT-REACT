import React from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

export const UserProfile = () => {
    const [t] = useTranslation("userprofile");

    const user = {
        photo: "https://example.com/userphoto.jpg",
        name: "John",
        lastname: "Doe",
        email: "johndoe@example.com"
    };
    return (
        <div className="glass">
            <>
                <img
                    src="ReportsBG.jpg"
                    className="w-screen h-screen -z-50 fixed object-cover top-0 left-0"
                />
                <div className="font-serif text-gray-200 mt-28">
                    <h1 className="w-10/12 text-xl minimum:text-[0.5rem]  sm:text-7xl md:text-6xl font-black z-10 text-white m-auto">
                        {t("User Profile")}
                    </h1>
                </div>
                <div className="p-2 mt-10 m-auto w-full max-w-7xl flex justify-center items-center text-white font-bold h-full">
                    <div className="glass mx-auto py-24 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                            <div className="flex items-center">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="User photo"
                                    className="w-24 h-24 rounded-full mr-4"
                                />
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-800">
                                        {user.name} {user.lastname}
                                    </h1>
                                    <p className="text-gray-600 font-bold">
                                        {t("jobTitle")}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mt-4 sm:mt-0">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    {t("editProfile")}
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-gray-200 pt-8 sm:flex sm:items-center sm:justify-between">
                            <div className="sm:flex">
                                <div className="flex items-center text-gray-600 mr-8 sm:mr-12">
                                    <HiOutlineMail className="text-2xl mr-2" />
                                    <span className="font-bold">
                                        {user.email}
                                    </span>
                                </div>
                                <div className="flex items-center text-gray-600 mr-8 sm:mr-12">
                                    <AiOutlinePhone className="text-2xl mr-2" />
                                    <span className="font-bold">
                                        {t("phone")}
                                    </span>
                                </div>
                                <div className="flex items-center text-white">
                                    <MdLocationOn className="text-2xl mr-2" />
                                    <span className="font-bold">
                                        {t("location")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};
