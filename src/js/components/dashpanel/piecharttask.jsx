import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { VictoryPie } from "victory";
import { useTranslation } from "react-i18next";

export const PieChartTask = () => {
    const [t] = useTranslation("dashboard");
    const { store, actions } = useContext(Context);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        actions.getAllTask().then(() => {
            setActiveIndex(store.tasks);
        });
    }, []);

    const activeTasks = store.tasks.filter(task => task.completed === true);
    const inactiveTasks = store.tasks.filter(task => task.completed === false);

    const data = [
        { x: t("completed"), y: activeTasks.length },
        { x: t("pending"), y: inactiveTasks.length }
    ];

    const colors = {
        [t("completed")]: "#008000",
        [t("pending")]: "#ff0000"
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-120 h-120 mx-auto">
                <div className="flex flex-row"></div>
                {(store.tasks.length !== 0 && (
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
                        <p className="w-[400px] h-[400px] text-black dark:text-white flex items-center justify-center pb-20 font-bold text-lg">
                            {t("notasks")}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
