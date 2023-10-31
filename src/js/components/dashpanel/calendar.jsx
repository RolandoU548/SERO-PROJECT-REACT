import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/es"; // Import the locale you want to use
import customParseFormat from "dayjs/plugin/customParseFormat";
import { CalendarDay } from "./calendarui";

dayjs.extend(customParseFormat);
dayjs.locale("es"); //

// Component for the entire calendar
export const Calendar = () => {
    const [tasks, setTasks] = useState([]);

    // Generate an array of dayjs objects for the current month
    const daysInMonth = dayjs().daysInMonth();
    const firstDayOfMonth = dayjs().startOf("month").day();
    const days = Array.from({ length: daysInMonth }, (_, i) =>
        dayjs().startOf("month").add(i, "day")
    );

    // Add empty days to the beginning of the array to align with the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.unshift(null);
    }

    // Split the days array into weeks
    const weeks = Array.from({ length: Math.ceil(days.length / 7) }, (_, i) =>
        days.slice(i * 7, i * 7 + 7)
    );

    return (
        <div className="grid grid-cols-7 gap-2">
            <div className="text-sm font-medium text-white">Domingo</div>
            <div className="text-sm font-medium text-white">Lunes</div>
            <div className="text-sm font-medium text-white">Martes</div>
            <div className="text-sm font-medium text-white">Miércoles</div>
            <div className="text-sm font-medium text-white">Jueves</div>
            <div className="text-sm font-medium text-white">Viernes</div>
            <div className="text-sm font-medium text-white">Sábado</div>
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
                                <div className="border border-green-200 p-2"></div>
                            )}
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};
