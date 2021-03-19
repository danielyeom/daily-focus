import React, { useState } from "react";
import Calendar from "react-calendar";
import EventView from "./EventView/";
import NewEvent from "./NewEvent";
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

    const onAddNewEvent = (title, description) => {
        setEvents([
            ...events,
            {
                date: new Date(
                    selected.getMonth() +
                        1 +
                        " " +
                        selected.getDate() +
                        ", " +
                        (selected.getYear() + 1900) +
                        " " +
                        "00:00:00"
                ),
                title: title,
                description: description,
            },
        ]);
    };

    const onRemoveEvent = (index) => {
        events.splice(index, 1);
        setEvents([...events]);
    };

    return (
        <div>
            <div style={{ width: "400px" }}>
                <Calendar onClickDay={(value) => setSelected(value)} tileContent={tileContent} />
            </div>
            <div>
                <EventView selected={selected} events={events} onRemoveEvent={onRemoveEvent} />
            </div>
            <div>
                <NewEvent onAddNewEvent={onAddNewEvent} />
            </div>
        </div>
    );
}
