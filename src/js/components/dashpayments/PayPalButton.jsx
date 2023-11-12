import React from "react";

export const PayPalButton = () => {
    return (
        <div className="font-serif text-gray-200 mt-28">
            <div className="flex items-center">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-black dark:text-white m-auto">
                    Make Payment
                </h1>
            </div>
            <div className="glass p-10 mt-5 m-auto w-11/12">
                <div className="paypal">PAYPAL</div>
            </div>
        </div>
    );
};
