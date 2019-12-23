import React, { useState } from 'react';
import moment from "moment";
import { format } from '../services/dateService';
import DatePicker from './DatePicker';
import MonthPicker from './MonthPicker';
import YearPicker from './YearPicker';

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
            <p>Day {currentMoment.dayOfYear()} Week {currentMoment.week()}</p>
            <p>{format(currentMoment.startOf("week"))} - {format(currentMoment.endOf("week"))}</p>
        </div>
    </>
}

export default CalendarWeeks;