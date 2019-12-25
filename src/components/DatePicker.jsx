import React from 'react';
import moment from "moment";
import { getDaysList } from '../services/dateService';

const DatePicker = ({ currentDate, month, year, setCurrentMoment }) => {
    const setDay = selectedDate => setCurrentMoment(moment().date(selectedDate).month(month).year(year))

    return <select onChange={e => setDay(e.target.value)} defaultValue={currentDate}>
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