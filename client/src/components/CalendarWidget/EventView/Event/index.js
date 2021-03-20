//formats the time of day of the event.time object
const formatTime = (eventTime) => {
    var hours = eventTime.hours;
    var minutes = eventTime.minutes;
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
};

export default function Event({ event, onRemoveEvent }) {
    return event ? (
        <div>
            <h3>
                {formatTime(event.time)} {event.title}
            </h3>
            <p>{event.description}</p>

            <button onClick={() => onRemoveEvent(event)}>Remove</button>
        </div>
    ) : null;
}
