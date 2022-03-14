import { NoteContext } from "../../contexts/NoteContext";
import { ActiveNote } from "../../contexts/ActiveNote";
import { useContext } from "react";

import styles from "./NoteList.module.css";

export default function NoteList() {
  const { notes } = useContext(NoteContext);
  const { setActiveNote } = useContext(ActiveNote);

  const handleNoteSelection = (id) => {
    // find the active note, based on the id
    const activeNote = notes.find((note) => note.id === id);

    setActiveNote({
      title: activeNote.title,
      body: activeNote.body,
      id: activeNote.id,
    });
  };

  return (
    <div className={styles.container}>
      <ol>
        {notes.map((note) => (
          <li key={note.id} onClick={() => handleNoteSelection(note.id)}>
            {note.title}
          </li>
        ))}
      </ol>
    </div>
  );
}
