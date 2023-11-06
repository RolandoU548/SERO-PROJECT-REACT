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
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/videos%2FSERO_BG.mp4?alt=media&token=bc8e9bae-7a2c-41b0-9f1a-bed3ab6bf751"
                type="video/mp4"
            />
        </video>
    );
};
