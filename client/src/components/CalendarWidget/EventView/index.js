import React from "react";
import PropTypes from "prop-types";

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

//formats the time of day of the event object
const formatTime = (eventTime) => {
    var hours = eventTime.hours;
    var minutes = eventTime.minutes;
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
};

export default function EventView({ selected, displayEvents, onRemoveEvent }) {
    return (
        <div>
            <h2>
                {weekdays[selected.getDay()]} {selected.getDate()} {months[selected.getMonth()]}
            </h2>
            {displayEvents.length === 0 ? null : (
                <ul>
                    {displayEvents.map((event, index) => (
                        <div key={index}>
                            <h3>
                                {formatTime(event.time)} {event.title}
                            </h3>
                            <p>{event.description}</p>
                            <button onClick={() => onRemoveEvent(event)}>Remove Event</button>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}

EventView.propTypes = {
    selected: PropTypes.instanceOf(Date),
    events: PropTypes.array,
    onRemoveEvent: PropTypes.func,
};
