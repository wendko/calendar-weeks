import React, { useState } from 'react';
import moment from "moment";
import DatePicker from './DatePicker';
import MonthPicker from './MonthPicker';
import YearPicker from './YearPicker';

const adjustDate = date => date.add(1, "day").format("DD MMM")

const CalendarWeeks = () => {
    const [currentMoment, setCurrentMoment] = useState(moment());

    return <>
        <div className="section picker-group">
            <DatePicker
                currentDate={currentMoment.date()}
                month={currentMoment.month()}
                year={currentMoment.year()}
                setCurrentMoment={setCurrentMoment}>
            </DatePicker>

            <MonthPicker
                date={currentMoment.date()}
                currentMonth={currentMoment.month()}
                year={currentMoment.year()}
                setCurrentMoment={setCurrentMoment}>
            </MonthPicker>

            <YearPicker
                date={currentMoment.date()}
                month={currentMoment.month()}
                currentYear={currentMoment.year()}
                setCurrentMoment={setCurrentMoment}>
            </YearPicker>
        </div>

        <div className="section description">
            <p>Day {currentMoment.dayOfYear()}</p>
            <p>Week {currentMoment.week()}</p>
            <p>{adjustDate(currentMoment.startOf("week"))} - {adjustDate(currentMoment.endOf("week"))}</p>
        </div>
    </>
}

export default CalendarWeeks;