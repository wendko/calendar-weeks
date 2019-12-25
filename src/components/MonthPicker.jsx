import React from 'react';
import moment from "moment";
import { getMonthsList } from '../services/dateService';

const MonthPicker = ({ date, currentMonth, year, setCurrentMoment }) => {
    const setMonth = selectedText => {
        const selectedMonth = moment().month(selectedText).month();
        setCurrentMoment(moment().date(date).month(selectedMonth).year(year));
    }
    return <select onChange={e => setMonth(e.target.value)} defaultValue={moment().month(currentMonth).format("MMMM")}>
        {getMonthsList().map(month => (
            <option
                key={month}
                value={month}>
                {month}
            </option>
        ))}
    </select>
}

export default MonthPicker;