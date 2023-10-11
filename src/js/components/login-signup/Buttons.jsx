import React from "react";
import PropTypes from "prop-types";

export const Buttons = ({ buttonGoogle, buttonGithub }) => {
    return (
        <div className="flex flex-col gap-4">
            <button className="py-1 px-2 font-normal w-full border flex justify-center items-center gap-2 border-slate-300 rounded-lg text-base text-slate-700 hover:border-cyan-300 hover:text-slate-900 hover:shadow dark:hover:bg-[#101010] transition duration-300 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-200 dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-offset-2 focus:ring-1 focus:ring-offset-2 dark:text-white">
                <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                />
                {buttonGoogle}
            </button>
        </div>
    );
};

Buttons.propTypes = {
    buttonGoogle: PropTypes.string.isRequired,
    buttonGithub: PropTypes.string.isRequired
};
