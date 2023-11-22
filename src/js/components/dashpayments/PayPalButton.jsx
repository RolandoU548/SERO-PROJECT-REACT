import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
// import PropTypes from "prop-types";

export const PayPalButton = () => {
    const { t } = useTranslation("payments");
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const paypalAmount = store.paymentform.amount;

    const notify = () =>
        toast.success(t("paymentpaypal"), {
            position: "bottom-right",
            style: {
                background: "rgba(23, 23, 23, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px 0 rgba(77, 208, 225, 0.37)",
                color: "#fff",
                borderRadius: "10px"
            }
        });

    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://www.paypal.com/sdk/js?client-id=AWx2fi2KjROLraDYpuPyIK0QzJl93tbq7a7QUjKQqfX7UCxD_r4hWz_QFQUK0ASU5e-Y1aAHkpguC1SE";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.paypal
                .Buttons({
                    createOrder: (data, actions) => {
                        // Set up the transaction details
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: paypalAmount
                                    }
                                }
                            ]
                        });
                    },
                    onApprove: (data, actions) => {
                        // Capture the funds from the transaction
                        return actions.order.capture().then(details => {
                            // Show a success message to the user
                            notify();
                            navigate("/steppayment");
                        });
                    }
                })
                .render("#paypal-button-container");
            actions.storePayments({ ...store.paymentform, step: 3 });
        };
    }, []);

    return (
        <>
            <div className="font-serif text-gray-200 mt-28">
                <div className="flex items-center">
                    <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-black dark:text-white m-auto">
                        Pay with Paypal
                    </h1>
                </div>
                <div className="glass p-10 mt-5 m-auto w-1/2">
                    <div
                        className="flex justify-center"
                        id="paypal-button-container"></div>{" "}
                    <button
                        type="button"
                        className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md mt-4"
                        onClick={() => {
                            navigate("/steppayment");
                            actions.storePayments({
                                ...store.paymentform,
                                step: 2
                            });
                        }}>
                        Back
                    </button>
                </div>
            </div>
        </>
    );
};
// PayPalButton.propTypes = {
//     handleBack: PropTypes.func.isRequired
// };
