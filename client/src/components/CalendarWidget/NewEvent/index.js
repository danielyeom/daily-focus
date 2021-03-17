/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

export default function NewEvent({ selected, onAddNewEvent }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const AddEventHandler = () => {
        const date = new Date(
            selected.getMonth() +
                " " +
                selected.getDate() +
                ", " +
                selected.getYear() +
                " " +
                "00:00:00"
        );
        const event = {
            date: date,
            title: title,
            description: description,
        };
        setTitle("");
        setDescription("");
        onAddNewEvent(event);
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
