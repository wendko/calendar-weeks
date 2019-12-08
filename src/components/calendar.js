import React, { useState } from "react";
import moment from "moment";
import "../styles.css";

const getCalendarWeeks = (startDate, endDate) => {
  const startDateMoment = moment(startDate);
  const endDateMoment = moment(endDate);

  const diffInWeeks = endDateMoment.diff(startDateMoment, "weeks");
  if (!diffInWeeks) return;

  let currentDate = startDateMoment;
  const calendarWeeks = [];

  while (currentDate < endDateMoment) {
    calendarWeeks.push({
      week: currentDate.week(),
      displayDate: currentDate.format("DD MMM YYYY"),
      isPast: currentDate < moment.now()
    });
    currentDate = currentDate.add(1, "week");
  }

  // const calendarWeeks2 = new Array(diffInWeeks).fill([0, 0]).map((_, i) => {
  //   const currentDate = startDateMoment.add(+i, "week"); // something is wrong here
  //   return [currentDate.week(), currentDate.format("DD MMM YYYY")];
  // });

  return calendarWeeks;
};

const pastDateStyle = {
  textDecoration: "line-through"
};

const DateInput = props => {
  const days = new Array(31).fill(0).map((_, i) => i + 1);
  const months = moment.months();
  const years = [
    moment().subtract(2, "year"),
    moment().subtract(1, "year"),
    moment(),
    moment().add(1, "year"),
    moment().add(2, "year")
  ].map(x => x.year());

  const [initialYear, initialMonth, initialDay] = props.date
    .split("-")
    .map(x => +x);

  console.log(
    moment()
      .month("January")
      .format("M")
  );

  const setDay = e => {
    const day = e.target.value.padStart(2, 0);
    const date = props.date.split("-");
    props.setDate([date[0], date[1], day].join("-"));
  };

  const setMonth = e => {
    const month = moment()
      .month(e.target.value)
      .format("M");
    const date = props.date.split("-");
    props.setDate([date[0], month, date[2]].join("-"));
  };

  const setYear = e => {
    const year = e.target.value;
    const date = props.date.split("-");
    props.setDate([year, date[1], date[2]].join("-"));
  };

  return (
    <form className="datepicker-group">
      <select onChange={setDay}>
        {days.map(day => (
          <option key={day} value={day} selected={day === initialDay}>
            {day}
          </option>
        ))}
      </select>
      <select onChange={setMonth}>
        {months.map(month => (
          <option
            key={month}
            value={month}
            selected={
              +moment()
                .month(month)
                .format("M") === initialMonth
            }
          >
            {month}
          </option>
        ))}
      </select>
      <select onChange={setYear}>
        {years.map(year => (
          <option key={year} value={year} selected={year === initialYear}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
};

const DateList = props => (
  <div className="date-list">
    {getCalendarWeeks(props.startDate, props.endDate).map((c, i) => (
      <div
        key={i}
        tabIndex={i}
        className="date-row"
        style={c.isPast ? pastDateStyle : null}
      >
        <div>week {c.week}</div>
        <div>{c.displayDate}</div>
      </div>
    ))}
  </div>
);

const Calendar = () => {
  const [startDate, setStartDate] = useState("2019-12-09");
  const [endDate, setEndDate] = useState("2020-12-31");

  return (
    <div className="content">
      <p className="title"> Calendar Weeks </p>
      <DateInput setDate={setStartDate} date={startDate} />
      <DateList startDate={startDate} endDate={endDate} />
      <DateInput setDate={setEndDate} date={endDate} />
    </div>
  );
};

export default Calendar;
