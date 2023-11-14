import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { VictoryPie } from "victory";
import { useTranslation } from "react-i18next";

export const PieChartPayment = () => {
    const [t] = useTranslation("dashboard");
    const { store, actions } = useContext(Context);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        actions.getAllPayments().then(() => {
            setActiveIndex(store.payments);
        });
    }, []);

    const activePayments = store.payments.filter(
        payment => payment.status === "Paid"
    );
    const inactivePayments = store.payments.filter(
        payment => payment.status === "Credit"
    );

    const data = [
        { x: t("paid"), y: activePayments.length },
        { x: t("credit"), y: inactivePayments.length }
    ];

    const colors = {
        [t("paid")]: "#008000",
        [t("credit")]: "#ff0000"
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-120 h-120 mx-auto">
                <div className="flex flex-row"></div>
                {(store.payments.length !== 0 && (
                    <VictoryPie
                        data={data}
                        innerRadius={70}
                        padAngle={3}
                        activeIndex={activeIndex}
                        events={[
                            {
                                target: "data",
                                eventHandlers: {
                                    onClick: (_, { index }) => {
                                        setActiveIndex(index);
                                        return [
                                            {
                                                target: "labels",
                                                mutation: () => ({
                                                    active: true
                                                })
                                            }
                                        ];
                                    }
                                }
                            }
                        ]}
                        labelRadius={80}
                        style={{
                            labels: {
                                fill: "white",
                                fontSize: 18,
                                fontFamily: "sans-serif",
                                fontWeight: "bold"
                            },
                            data: {
                                fill: ({ datum }) => colors[datum.x]
                            }
                        }}
                    />
                )) || (
                    <div className="w-full h-full">
                        <p className="w-[400px] h-[400px] flex items-center text-black dark:text-white justify-center pb-20 font-bold text-lg">
                            {t("nopayments")}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
