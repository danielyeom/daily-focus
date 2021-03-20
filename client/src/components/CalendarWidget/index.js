import React, { useState } from "react";
import Calendar from "react-calendar";
import EventView from "./EventView";
import NewEvent from "./NewEvent";
import initialEvents from "./initial-events.js";

const compareDate = (eventTime, date) => {
    return (
        eventTime.year === date.getFullYear() &&
        eventTime.month === date.getMonth() + 1 &&
        eventTime.date === date.getDate()
    );
};

export default function CalendarWidget() {
    const [selected, setSelected] = useState(new Date());
    const [events, setEvents] = useState(initialEvents);

    //Add content to the calendar tiles
    const tileContent = ({ date }) => (
        <div>{events.map((event) => (compareDate(event.time, date) ? event.title : null))}</div>
    );

    const onAddNewEvent = (title, description) => {
        setEvents([
            ...events,
            {
                time: {
                    date: selected.getDate(),
                    month: selected.getMonth() + 1,
                    year: selected.getYear() + 1900,
                    hours: 0,
                    minutes: 0,
                },
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
