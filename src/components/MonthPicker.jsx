import React from 'react';
import moment from "moment";
import { getMonthsList } from '../services/dateService';

const MonthPicker = ({ date, currentMonth, year, setCurrentMoment }) => {
    const setMonth = e => {
        const selected = e.target.value;
        const selectedMonth = moment().month(selected).month();
        setCurrentMoment(moment().date(date).month(selectedMonth).year(year));
    }
    return <select onChange={setMonth} defaultValue={moment().month(currentMonth).format("MMMM")}>
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