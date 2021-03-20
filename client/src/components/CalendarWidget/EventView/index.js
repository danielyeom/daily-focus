import React from "react";
import PropTypes from "prop-types";
import Event from "./Event";

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

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function EventView({ selected, displayEvents, onRemoveEvent }) {
    return (
        <div>
            <h2>
                {weekdays[selected.getDay()]} {selected.getDate()} {months[selected.getMonth()]}
            </h2>
            {displayEvents.length === 0 ? null : (
                <ul>
                    {displayEvents.map((event, index) => (
                        <Event key={index} event={event} onRemoveEvent={onRemoveEvent} />
                    ))}
                </ul>
            )}
        </div>
    );
}

EventView.propTypes = {
    selected: PropTypes.instanceOf(Date),
    displayEvents: PropTypes.array,
    onRemoveEvent: PropTypes.func,
};
