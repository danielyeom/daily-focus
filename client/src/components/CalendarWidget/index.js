/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import EventView from "./EventView/";

export default function CalendarWidget() {
    const [selected, setSelected] = useState(new Date());

    const events = [
        {
            id: 1,
            date: new Date("March 2, 2021 02:00:00"),
            title: "test 1",
            description: "This is test event one 1",
        },
        {
            id: 2,
            date: new Date("March 17, 2021 21:00:00"),
            title: "test 2",
            description: "This is test event 2!",
        },
    ];

    //renders the array
    const tileContent = ({ date }) => (
        <div>
            {events.map((event) =>
                event.date.getDate() === date.getDate() &&
                event.date.getMonth() === date.getMonth() &&
                event.date.getYear() === date.getYear()
                    ? event.title
                    : null
            )}
        </div>
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
