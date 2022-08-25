import React, { useState } from "react";
import { useNotesStore } from "./todomcontext";

function Addnote(){

    const [note, setNote] = useState();
    const notesStore = useNotesStore();

    return(
        <>
        <div>
            <h1> Make Notes </h1>
            <h3> Enter the notes</h3>
            <input type= "text" onchange = {(e) => setNote(e.target.value)}/>
            <button type = "submit" onClick ={() => notesStore.addNote(notetext)}>Add Notes</button>
        </div>
        <div>
            <h3>____________________________________</h3>
        </div>

        <div>
            <h3>List of Notes</h3>
        </div>
        </>
    )
}

export default Addnote;