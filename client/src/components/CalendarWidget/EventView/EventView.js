/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function EventView({ selected }) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div>
            <h2>
                {selected.getDate()} {months[selected.getMonth()]}
            </h2>
            <button>Add Event</button>
        </div>
    );
}
