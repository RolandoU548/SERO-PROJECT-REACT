import React from "react";

export const AppLoader = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen  animate-pulse animate-fade-in animate-scale-in-up scale-150">
            <h1 className="text-5xl font-bold text-gray-700  animate-scale-in-up">
                <span className="text-cyan-400">S</span>
                <span className=" text-gray-700">E</span>
                <span className="text-cyan-400">R</span>
                <span className=" text-gray-700">Ø</span>
            </h1>
        </div>
    );
};
