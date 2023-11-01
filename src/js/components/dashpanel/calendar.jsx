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

dayjs.extend(customParseFormat);
dayjs.locale("es"); //

export const Calendar = () => {
    const [tasks, setTasks] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(dayjs());

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
            <div className="text-sm font-medium text-white flex justify-end mb-12">
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
                <div className="text-md font-bold">
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
            <div className="grid grid-cols-7 gap-2">
                <div className="text-sm font-bold text-white">Domingo</div>
                <div className="text-sm font-bold text-white">Lunes</div>
                <div className="text-sm font-bold text-white">Martes</div>
                <div className="text-sm font-bold text-white">Miércoles</div>
                <div className="text-sm font-bold text-white">Jueves</div>
                <div className="text-sm font-bold text-white">Viernes</div>
                <div className="text-sm font-bold text-white">Sábado</div>
                {weeks.map((week, index) => (
                    <React.Fragment key={index}>
                        {week.map((day, index) => (
                            <React.Fragment key={index}>
                                {day ? (
                                    <CalendarDay
                                        day={day}
                                        tasks={tasks}
                                        setTasks={setTasks}
                                    />
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
