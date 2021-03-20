import React, { useState } from "react";
import Calendar from "react-calendar";
import EventView from "./EventView";
import NewEvent from "./NewEvent";
import initialEvents from "./initial-events.js";

import createPersistedState from "use-persisted-state";
const useEventListState = createPersistedState("events");

const compareDate = (eventTime, date) => {
    return (
        eventTime.year === date.getFullYear() &&
        eventTime.month === date.getMonth() + 1 &&
        eventTime.date === date.getDate()
    );
};

export default function CalendarWidget() {
    const [selected, setSelected] = useState(new Date());
    const [events, setEvents] = useEventListState([]);

    //Add content to the calendar tiles
    const tileContent = ({ date }) => (
        <div>{events.map((event) => (compareDate(event.time, date) ? event.title : null))}</div>
    );

    const onAddNewEvent = (title, hours, minutes, description) => {
        setEvents([
            ...events,
            {
                time: {
                    date: selected.getDate(),
                    month: selected.getMonth() + 1,
                    year: selected.getYear() + 1900,
                    hours: hours,
                    minutes: minutes,
                },
                title: title,
                description: description,
            },
        ]);
    };

    const onRemoveEvent = (event) => {
        const index = events.indexOf(event);
        events.splice(index, 1);
        setEvents([...events]);
    };

    return (
        <div>
            <div style={{ width: "400px" }}>
                <Calendar onClickDay={(value) => setSelected(value)} tileContent={tileContent} />
            </div>
            <div>
                <EventView
                    selected={selected}
                    displayEvents={events.filter((event) => compareDate(event.time, selected))}
                    onRemoveEvent={onRemoveEvent}
                />
            </div>
            <div>
                <NewEvent onAddNewEvent={onAddNewEvent} />
            </div>
        </div>
    );
}
