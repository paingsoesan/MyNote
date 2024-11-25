import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCheck } from "react-icons/ai";


const Note = ({id, deleteNote}) => {

    const [noteText, setnoteText] = useState('')
    const [savedDate, setSavedDate] = useState("");
    const [isSaved, setIsSaved] = useState(false);

    const handleChange = (e) => {
        setnoteText(e.target.value);
    }

    const handleDate = () =>{
      
        const currentDate = new Date();
        const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
        setSavedDate(formattedDate); 
         setIsSaved(true);
    }
    

    
    return (
        <div className="note">
            <textarea className="text-area"
                value={noteText}
                onChange={handleChange}
                placeholder="Text Here" readOnly={isSaved}></textarea>
            <div className="note-footer">
                <small>{savedDate}</small>
                <div className="save-button" onClick={handleDate}>{isSaved ? <AiOutlineCheck /> : "Save" }</div>
                <div onClick={() => deleteNote(id)}><MdDeleteForever className="delete-icon" size='1.3em'></MdDeleteForever></div>
            </div>
        </div>
    )
}

export default Note;