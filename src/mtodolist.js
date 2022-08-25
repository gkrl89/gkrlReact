import React from "react";

import { Addnote } from "./mobxtodo"
import { useNotesStore } from "./NotesContext";
import { useObserver } from "mobx-react";

function TodoList() {
  const notesStore = useNotesStore();

  return useObserver(() => (
    <>
      <ul>
        {notesStore.notes.map((id,note) => (
          <li onClick={
            () => notesStore.removeNote(note.id)
          } key={note.id}>{note.text}</li>
        ))}
      </ul>
      <Addnote/>
      </>
    
  ));
}

export default TodoList;