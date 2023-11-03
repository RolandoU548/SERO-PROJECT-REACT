import React from "react";

export const BackgroundClientsVideo = () => {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 invert transition duration-500">
            <source src="ClientsBG.mp4" type="video/mp4" />
        </video>
    );
};