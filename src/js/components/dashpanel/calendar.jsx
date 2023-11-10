import React, { useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { CalendarDay } from "./calendarui";
import {
    FaChevronLeft,
    FaChevronRight,
    FaFastBackward,
    FaFastForward
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

dayjs.extend(customParseFormat);
dayjs.locale("es"); //

export const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(dayjs());
    const [t] = useTranslation("dashboard");

    const daysInMonth = currentMonth.daysInMonth();
    const firstDayOfMonth = currentMonth.startOf("month").day();
    const days = Array.from({ length: daysInMonth }, (_, i) =>
        currentMonth.startOf("month").add(i, "day")
    );

    for (let i = 0; i < firstDayOfMonth; i++) {
        days.unshift(null);
    }

    const weeks = Array.from({ length: Math.ceil(days.length / 7) }, (_, i) =>
        days.slice(i * 7, i * 7 + 7)
    );

    const handlePrevMonth = () => {
        setCurrentMonth(currentMonth.subtract(1, "month"));
    };

    const handleNextMonth = () => {
        setCurrentMonth(currentMonth.add(1, "month"));
    };

    const handlePrevYear = () => {
        setCurrentMonth(currentMonth.subtract(1, "year"));
    };

    const handleNextYear = () => {
        setCurrentMonth(currentMonth.add(1, "year"));
    };

    return (
        <>
            <div className="text-sm font-medium text-white items-end flex justify-between mb-12">
                <h1 className="w-10/12 text-xl minimum:text-[0.5rem] tiny:text-3xl sm:text-7xl md:text-6xl font-black z-10 text-black dark:text-white m-auto">
                    {t("Calendar")}
                </h1>
                <div className="w-96 items-center flex h-10">
                    <button
                        onClick={handlePrevYear}
                        className="mr-2 px-3 bg-cyan-300 text-black rounded-full">
                        <FaFastBackward />
                    </button>
                    <button
                        onClick={handlePrevMonth}
                        className="mr-2 px-3 bg-cyan-300 text-black rounded-full">
                        <FaChevronLeft />
                    </button>
                    <div className="text-md font-bold dark:text-white text-black">
                        {currentMonth.format("MMMM YYYY")}
                    </div>
                    <button
                        onClick={handleNextMonth}
                        className="ml-2 px-3 bg-cyan-300 text-black rounded-full">
                        <FaChevronRight />
                    </button>
                    <button
                        onClick={handleNextYear}
                        className="ml-2 px-3 bg-cyan-300 text-black rounded-full">
                        <FaFastForward />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-2">
                <div className="text-sm font-bold dark:text-white text-black">
                    {t("Sunday")}
                </div>
                <div className="text-sm font-bold dark:text-white text-black">
                    {t("Monday")}
                </div>
                <div className="text-sm font-bold dark:text-white text-black">
                    {t("Tuesday")}{" "}
                </div>
                <div className="text-sm font-bold dark:text-white text-black">
                    {t("Wednesday")}
                </div>
                <div className="text-sm font-bold dark:text-white text-black">
                    {t("Thursday")}
                </div>
                <div className="text-sm font-bold dark:text-white text-black">
                    {t("Friday")}
                </div>
                <div className="text-sm font-bold dark:text-white text-black">
                    {t("Saturday")}
                </div>
                {weeks.map((week, index) => (
                    <React.Fragment key={index}>
                        {week.map((day, index) => (
                            <React.Fragment key={index}>
                                {day ? (
                                    <CalendarDay day={day} />
                                ) : (
                                    <div className="border border-cyan-400 p-2"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};
