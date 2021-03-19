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

//evaluates truthy if the two date objects have the same day
const compareDate = (day1, day2) => {
    return (
        day1.getFullYear() === day2.getFullYear() &&
        day1.getMonth() === day2.getMonth() &&
        day1.getDate() === day2.getDate()
    );
};

//formats the time of day of the date object
const formatTime = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
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
                    compareDate(selected, event.date) ? (
                        <div key={index}>
                            <h3>
                                {formatTime(event.date)} {event.title}
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
