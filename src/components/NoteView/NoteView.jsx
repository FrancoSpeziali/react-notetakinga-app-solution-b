import { ActiveNote } from "../../contexts/ActiveNote";
import { NoteContext } from "../../contexts/NoteContext";
import { useContext, useState } from "react";

import styles from "./NoteView.module.css";

export default function NoteView() {
  const { activeNote, setActiveNote } = useContext(ActiveNote);
  const { notes, setNotes } = useContext(NoteContext);
  const [editMode, setEditMode] = useState(false);

  const handleEditNoteBody = (newBodyText) => {
    const editedNoteIndex = notes.findIndex(
      (note) => note.id === activeNote.id
    );

    const newNote = {
      ...activeNote,
      body: newBodyText,
    };

    // using the index, we replace 1 item in the array with the newNote object
    notes.splice(editedNoteIndex, 1, newNote);

    setActiveNote(newNote);

    setNotes([...notes]);
  };

  const handleDeleteNote = (id) => {
    setEditMode(false);

    const deletedNoteIndex = notes.findIndex((note) => note.id === id);

    notes.splice(deletedNoteIndex, 1);

    setActiveNote(notes[0]);

    setNotes([...notes]);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.actions}>
        <li onClick={() => setEditMode(!editMode)}>Edit</li>
        <li onClick={() => handleDeleteNote(activeNote.id)}>🚮</li>
      </ul>
      <h3>{activeNote.title}</h3>
      {editMode ? (
        <textarea
          onChange={(event) => handleEditNoteBody(event.target.value)} // store in the state, all changes to textarea
          defaultValue={activeNote.body}
        />
      ) : (
        <p>{activeNote.body}</p>
      )}
    </div>
  );
}
