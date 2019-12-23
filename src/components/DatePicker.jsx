import React from 'react';
import moment from "moment";
import { getDaysList } from '../services/dateService';

const DatePicker = ({ currentDate, month, year, setCurrentMoment }) => {
    const setDay = e => {
        const selectedDate = e.target.value;
        setCurrentMoment(moment().date(selectedDate).month(month).year(year));
    }
    return <select onChange={setDay} defaultValue={currentDate}>
        {getDaysList().map(day => (
            <option
                key={day}
                value={day}>
                {day}
            </option>
        ))}
    </select>
}

export default DatePicker;