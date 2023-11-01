import React, { useState, useContext, useEffect } from "react";
import { VictoryPie } from "victory";
import { Context } from "../../store/appContext";

export const PieChartClient = () => {
    const { actions } = useContext(Context);
    const [activeIndex, setActiveIndex] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getStatus = async () => {
            const status = await actions.getAllClients();
            const activeClients = status.filter(
                client => client.status === "Active"
            );
            const inactiveClients = status.filter(
                client => client.status === "Inactive"
            );
            const data = [
                { x: "Active", y: activeClients.length },
                { x: "Inactive", y: inactiveClients.length }
            ];
            setData(data);
        };
        getStatus();
    }, [actions]);

    const colors = {
        Active: "#008000",
        Inactive: "#ff0000"
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-120 h-120 mx-auto">
                <div className="flex flex-row"></div>
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
                            fontSize: 14,
                            fontFamily: "sans-serif",
                            fontWeight: "bold"
                        },
                        data: {
                            fill: ({ datum }) => colors[datum.x]
                        }
                    }}
                />
            </div>
        </div>
    );
};
