import React from "react";
import "../styles/Notes.css"

function Note ({ note, onDelete}) {
    const formattedDated = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <div className="note-container">
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDated}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete Now
            </button>
        </div>
    );
}

export default Note