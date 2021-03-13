/* eslint-disable linebreak-style */
import React from "react";
import Calendar from "react-calendar";

export default function CalendarWidget() {
    return (
        <div>
            <div style={{ width: "400px", height: "200px" }}>
                <Calendar />
            </div>
            <div>
                <p>event view will go here</p>
            </div>
        </div>
    );
}
