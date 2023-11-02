import React from "react";

export const BackgroundVideo = () => {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 invert transition duration-500">
            <source
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/videos%2FSERO_BG.mp4?alt=media&token=c5d1b877-3ea6-46da-b04c-4fc176b69ac8&_gl=1*1ox8wsi*_ga*NzgxNTMyNDcyLjE2OTg0NDk1MjI.*_ga_CW55HF8NVT*MTY5ODU1ODYyNS40LjAuMTY5ODU1ODYyNS42MC4wLjA."
                type="video/mp4"
            />
        </video>
    );
};
