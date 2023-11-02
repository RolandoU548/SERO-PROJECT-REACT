import React, { useState } from "react";
import { VictoryChart, VictoryPie, VictoryLabel } from "victory";

export const PieChartPayment = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const data = [
        { x: "Paid", y: 75 },
        { x: "Pending", y: 25 }
    ];

    const colors = {
        Paid: "#008000",
        Pending: "#ff0000"
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-120 h-120 mx-auto">
                <div className="flex flex-row"></div>
                {/* <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 20 }}
                    x={175}
                    y={175}
                    text="Payment Status"
                /> */}
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
