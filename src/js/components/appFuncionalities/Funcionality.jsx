import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { OpacityBackground } from "../../components/OpacityBackground.jsx";

export const Funcionality = ({ title, paragraph, image }) => {
    const navigate = useNavigate();
    const [t] = useTranslation("app");
    return (
        <div className="flex resp:flex-col-reverse my-20 w-10/12 resp:w-[98%] m-auto">
            <div
                className="w-[40%] h-[20rem] cursor-pointer transition ease-out duration-300 hover:scale-105 rounded-2xl border-2 border-white relative group m-auto resp:mt-10 resp:w-[26rem] resp:max-w-[75%]"
                style={{
                    backgroundImage: `url('${image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                onClick={() => {
                    navigate("/signup");
                }}>
                <OpacityBackground className="rounded-2xl" />
            </div>
            <motion.div className="md:w-[60%] resp:text-center">
                <div className="px-10">
                    <h2 className="text-2xl/10 minimum:text-[2.5rem]/10 tiny:text-5xl/10 sm:text-6xl/10 md:text-7xl">
                        {title}
                    </h2>
                    <p className="text-lg mt-3">{paragraph}</p>
                    <Link
                        className="text-black text-2xl mt-10 bg-cyan-400 hover:bg-cyan-500 transition duration-300 py-2 px-16 rounded-2xl inline-block"
                        to="/login">
                        {t("tryIt")}
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

Funcionality.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};
