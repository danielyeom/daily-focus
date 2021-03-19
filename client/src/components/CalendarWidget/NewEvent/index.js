import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function NewEvent({ onAddNewEvent }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const AddEventHandler = () => {
        onAddNewEvent(title, description);
        setTitle("");
        setDescription("");
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
