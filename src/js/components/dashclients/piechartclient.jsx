import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { VictoryPie } from "victory";
import { useTranslation } from "react-i18next";

export const PieChartClient = () => {
    const [t] = useTranslation("dashboard");
    const { store, actions } = useContext(Context);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        actions.getAllClients().then(() => {
            setActiveIndex(store.clients);
        });
    }, []);

    const activeClients = store.clients.filter(
        client => client.status === "Active"
    );
    const inactiveClients = store.clients.filter(
        client => client.status === "Inactive"
    );

    const data = [
        { x: "Active", y: activeClients.length },
        { x: "Inactive", y: inactiveClients.length }
    ];

    const colors = {
        Active: "#008000",
        Inactive: "#ff0000"
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-120 h-120 mx-auto">
                <div className="flex flex-row"></div>
                {(store.clients.length !== 0 && (
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
                        <p className="w-[400px] h-[400px] flex items-center justify-center pb-20 font-bold text-lg">
                            No clients registered
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
