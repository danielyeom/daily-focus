import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function NewEvent({ onAddNewEvent }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [pm, setPm] = useState(false);

    /**
     * Gives back hours, minutes, title, and description of a new event to the parent component.
     * adds 12 hours if 'ampm' is set to pm
     * accounts for 24 hour time, regardless of 'ampm' setting
     */
    const AddEventHandler = () => {
        let hrs = parseInt(hours) || 8;
        let mins = parseInt(minutes) || 0;
        if (hrs < 13 && pm) {
            hrs += 12;
        }
        if (hrs > 24) {
            hrs = 8;
        }
        if (mins > 59) {
            mins = 0;
        }
        onAddNewEvent(title, hrs, mins, description);
        setTitle("");
        setDescription("");
        setHours("");
        setMinutes("");
        setPm(false);
    };

    const onClickAmpm = () => {
        setPm(!pm);
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
                <button onClick={onClickAmpm}>{pm ? "pm" : "am"}</button>
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
