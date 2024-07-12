import {Note} from "./types";
import {List} from "@mui/material";
import {NoteItem} from "./NoteItem";

interface NotesListProps{
    notes:Note[];
    deleteNote:(id:number)=>void
    startEditing:(note:Note)=>void
}

export const NotesList=({notes, deleteNote, startEditing}:NotesListProps)=>{
    return (
        <List>
            {notes.map(note=>(
                <NoteItem key={note.id} note={note} deleteNote={deleteNote} startEditing={startEditing}/>
            ))}
        </List>
    )
}