/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import EventView from "./EventView/EventView.js";

export default function CalendarWidget() {
    const [selected, setSelected] = useState(new Date());

    return (
        <div>
            <div style={{ width: "400px", height: "200px" }}>
                <Calendar onClickDay={(value) => setSelected(value)} />
            </div>
            <div>
                <EventView selected={selected} />
            </div>
        </div>
    );
}
