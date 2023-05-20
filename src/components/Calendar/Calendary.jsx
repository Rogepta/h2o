import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import Time from "./Time/Time";

function Calendary() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  return (
    <div className="calendar-wrapper">
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={() => setShowTime(true)}
        />
      </div>
      {date instanceof Array && date.length > 1 ? (
        <p className="text-center">
          <span>Start:</span>
          {date[0].toDateString()}
          &nbsp; &nbsp;
          <span>End:</span>
          {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span>Default selected date:</span>
          {date.toDateString()}
        </p>
      )}
      <Time showTime={showTime} date={date} />
    </div>
  );
}

export default Calendary;
