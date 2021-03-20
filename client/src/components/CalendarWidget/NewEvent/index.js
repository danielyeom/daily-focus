import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function NewEvent({ onAddNewEvent }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");

    const AddEventHandler = () => {
        const hrs = parseInt(hours) || 8;
        const mins = parseInt(minutes) || 0;
        onAddNewEvent(title, hrs, mins, description);
        setTitle("");
        setDescription("");
        setHours("");
        setMinutes("");
    };

    return (
        <div>
            <div>
                <label>New Event</label>
                <input
                    type="text"
                    value={title}
                    onInput={(e) => setTitle(e.target.value)}
                    onChange={() => null}
                ></input>
            </div>
            <div>
                <label>Time</label>
                <input
                    type="text"
                    value={hours}
                    onInput={(e) => setHours(e.target.value)}
                    onChange={() => null}
                    style={{ width: 20 }}
                ></input>
                {" : "}
                <input
                    type="text"
                    value={minutes}
                    onInput={(e) => setMinutes(e.target.value)}
                    onChange={() => null}
                    style={{ width: 20 }}
                ></input>
            </div>
            <div>
                <label>Description</label>
                <input
                    type="text"
                    value={description}
                    onInput={(e) => setDescription(e.target.value)}
                    onChange={() => null}
                ></input>
            </div>

            <button onClick={() => AddEventHandler()}>Add Event</button>
        </div>
    );
}

NewEvent.propTypes = {
    onAddNewEvent: PropTypes.func,
};
