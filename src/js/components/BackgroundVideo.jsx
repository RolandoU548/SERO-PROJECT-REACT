import React from "react";

export const BackgroundVideo = () => {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[100%] h-[100%] -z-50 fixed object-cover">
            <source src="SERO_BG.mp4" type="video/mp4" />
        </video>
    );
};
