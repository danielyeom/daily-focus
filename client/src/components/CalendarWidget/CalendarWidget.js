/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import EventView from "./EventView/EventView.js";

export default function CalendarWidget() {
    const [selected, setSelected] = useState(new Date());

    const events = [
        // {
        //     id: ,
        //     date: ,
        //     title: ,
        //     description:
        // }
        {
            id: 1,
            date: 4,
            title: "test 1",
            description: "This is test event one 1",
        },
        {
            id: 2,
            date: 16,
            title: "test 2",
            description: "This is test event 2!",
        },
    ];

    //renders the array
    const content = ({ date }) => (
        <div>{events.map((val) => (val.date === date.getDate() ? val.title : null))}</div>
    );
    return (
        <div>
            <div style={{ width: "400px" }}>
                <Calendar onClickDay={(value) => setSelected(value)} tileContent={content} />
            </div>
            <div>
                <EventView selected={selected} />
            </div>
        </div>
    );
}
