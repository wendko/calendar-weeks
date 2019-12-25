import React from 'react';
import moment from "moment";
import { getYearsList } from '../services/dateService';

const YearPicker = ({ date, month, currentYear, setCurrentMoment }) => {
    const setYear = selectedYear => setCurrentMoment(moment().date(date).month(month).year(selectedYear))

    return <select onChange={e => setYear(e.target.value)} defaultValue={currentYear}>
        {getYearsList({ yearsBefore: 5, yearsAfter: 5 }).map(year => (
            <option
                key={year}
                value={year}>
                {year}
            </option>
        ))}
    </select>
}

export default YearPicker;