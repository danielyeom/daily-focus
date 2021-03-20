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

const compareDate = (eventTime, date) => {
    return (
        eventTime.year === date.getFullYear() &&
        eventTime.month === date.getMonth() + 1 &&
        eventTime.date === date.getDate()
    );
};

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

export default function EventView({ selected, events, onRemoveEvent }) {
    return (
        <div>
            <h2>
                {selected.getDate()} {months[selected.getMonth()]}
            </h2>
            <ul>
                {events.map((event, index) =>
                    compareDate(event.time, selected) ? (
                        <div key={index}>
                            <h3>
                                {formatTime(event.time)} {event.title}
                            </h3>
                            <p>{event.description}</p>
                            <button onClick={() => onRemoveEvent(events.indexOf(event))}>
                                Remove Event
                            </button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    );
}

EventView.propTypes = {
    selected: PropTypes.instanceOf(Date),
    events: PropTypes.array,
    onRemoveEvent: PropTypes.func,
};
