import { useState } from "react";
import Note from "./Note";

const NoteList = () => {
  const [notes, setNotes] = useState([]); 

  const addNote = () => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now() },  ]);
  };    

     const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };
    
    return (
      <>
        <div className="note-list">
                {notes.map((note) => (
             <Note key={note.id} id={note.id} deleteNote={deleteNote}/>
         ))}
        </div>
            <button onClick={addNote} className="button">Add Note</button>
    </>
  );
};

export default NoteList;
