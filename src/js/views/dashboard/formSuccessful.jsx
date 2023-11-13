import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import "../../../css/glass.css";
import { useTranslation } from "react-i18next";
import { RingLoader } from "react-spinners";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export const FormSuccessful = () => {
    const { actions } = useContext(Context);
    const [t] = useTranslation("formSuccessful");
    const navigate = useNavigate();
    const { width, height } = useWindowSize();

    // useEffect(() => {
    //     (async () => {
    //         const isClHashValid =
    //             await actions.existsInvitationClientForm(clienthash);
    //         setTimeout(() => {
    //             setValidClHash(isClHashValid);
    //         }, 2000);
    //     })();
    // });

    return (
        <>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/ser0-project.appspot.com/o/images%2FformSuccessful%2FformSuccessful.jpg?alt=media&token=0395b314-3d58-4019-a071-b43633a859fd"
                className="invert w-screen h-screen -z-50 fixed object-cover top-0 left-0 dark:invert-0 transition duration-500"
            />
            <Confetti width={width} height={height} recycle={false} />
            <div className="m-auto p-7 rounded-3xl text-black mt-72 font-serif dark:text-white">
                <h2 className="w-10/12 text-center text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 m-auto">
                    {t("successfulMessage")}
                </h2>
                <h2 className="mt-10 w-10/12 text-center text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 m-auto">
                    {":)"}
                </h2>
                {/* <div className="border border-white rounded-3xl p-20 mt-5 m-auto w-6/12"></div> */}
            </div>
        </>
        // <>
        //     <div className="flex justify-center items-center h-screen">
        //         <RingLoader color="#26C6DA" loading={true} size={100} />
        //     </div>
        // </>
    );
};
