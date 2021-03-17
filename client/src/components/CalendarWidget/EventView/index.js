/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const compareDate = (day1, day2) => {
    return (
        day1.getFullYear() === day2.getFullYear() &&
        day1.getMonth() === day2.getMonth() &&
        day1.getDate() === day2.getDate()
    );
};

export default function EventView({ selected, events }) {
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
            <ul>
                {events.map((event) =>
                    compareDate(selected, event.date) ? (
                        <div>
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                        </div>
                    ) : null
                )}
            </ul>
            <button onClick={() => console.log("trying to add event for: ", selected.getDate())}>
                Add Event
            </button>
        </div>
    );
}
