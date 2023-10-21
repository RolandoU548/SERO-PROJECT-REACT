import React from "react";

export const BackgroundVideo = () => {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-screen h-screen -z-50 fixed object-cover top-0 left-0">
            <source src="SERO_BG.mp4" type="video/mp4" />
        </video>
    );
};
