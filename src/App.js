import mockData from "./MOCK_DATA";

import { useState } from "react";
import { NoteContext } from "./contexts/NoteContext";
import { ActiveNote } from "./contexts/ActiveNote";

import NoteList from "./components/NoteList/NoteList";
import NoteView from "./components/NoteView/NoteView";

import styles from "./App.module.css";

function App() {
  const [notes, setNotes] = useState(mockData);
  const [activeNote, setActiveNote] = useState({
    id: "",
    title: "",
    body: "",
  });

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      <ActiveNote.Provider value={{ activeNote, setActiveNote }}>
        <div>
          <h1>Notey - the notetaking application!</h1>
          <div className={styles.container}>
            <NoteList />
            <NoteView />
          </div>
        </div>
      </ActiveNote.Provider>
    </NoteContext.Provider>
  );
}

export default App;
