/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

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
                <input type="text" value={title} onInput={(e) => setTitle(e.target.value)}></input>
                <label>Description</label>
                <input
                    type="text"
                    value={description}
                    onInput={(e) => setDescription(e.target.value)}
                ></input>
            </div>

            <button onClick={AddEventHandler}>Add Event</button>
        </div>
    );
}
