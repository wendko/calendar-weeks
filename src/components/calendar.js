import React from "react";
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

const Calendar = () => {
  const startDate = "2019-12-09";
  const endDate = "2020-12-31";

  const calendarWeeks = getCalendarWeeks(startDate, endDate);

  return (
    <div>
      <p className="title"> Calendar Weeks </p>
      <div className="input-group">
        <input placeholder="start: 2019-12-09" />
        -
        <input placeholder="end: 2020-12-31" />
      </div>
      <div className="date-list">
        {calendarWeeks.map((c, i) => (
          <div
            key={i}
            className="date-row"
            style={c.isPast ? pastDateStyle : null}
          >
            <div>week {c.week}</div>
            <div>{c.displayDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
