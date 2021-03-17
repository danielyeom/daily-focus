/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import EventView from "./EventView/";
import initialEvents from "./initial-events.js";

const compareDate = (day1, day2) => {
    return (
        day1.getFullYear() === day2.getFullYear() &&
        day1.getMonth() === day2.getMonth() &&
        day1.getDate() === day2.getDate()
    );
};

export default function CalendarWidget() {
    const [selected, setSelected] = useState(new Date());
    const [events, setEvents] = useState(initialEvents);

    //Add content to the calendar tiles
    const tileContent = ({ date }) => (
        <div>{events.map((event) => (compareDate(event.date, date) ? event.title : null))}</div>
    );

    return (
        <div>
            <div style={{ width: "400px" }}>
                <Calendar onClickDay={(value) => setSelected(value)} tileContent={tileContent} />
            </div>
            <div>
                <EventView selected={selected} />
            </div>
        </div>
    );
}
