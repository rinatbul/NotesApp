import {useState} from "react";
import {Note} from "./types";
import {Container, Paper, Typography} from "@mui/material";
import {NoteForm} from "./NoteForm";
import {EditeNoteForm} from "./EditeNoteForm";
import {NotesList} from "./NotesList";

export const NotesApp=()=>{
    const [notes, setNotes] = useState<Note[]>([])
    const [editingNote, setEditingNote]=useState<Note | null>(null)

    const addNote=(text:string)=>{
        const newNote: Note ={
            id:Date.now(),
            text
        }
        setNotes([...notes, newNote]);
    }

    const editNote=(id:number, newText:string)=>{
        setNotes(notes.map(note=>note.id===id?{...note,text:newText}:note));
        setEditingNote(null)
    };

    const deleteNote =(id:number)=>{
        setNotes(notes.filter(note=>note.id !==id))
    }

    const startEditing = (note:Note)=>{
        setEditingNote(note)
    }

    return(
        <Container>
            <Paper elevation={3} style={{padding:'20px', marginTop:'20px'}}>
                <Typography variant='h4' gutterBottom>
                    Notes App
                </Typography>
                <NoteForm addNote={addNote}/>
                {editingNote && <EditeNoteForm note={editingNote} editNote={editNote}/>}
                <NotesList notes={notes} deleteNote={deleteNote} startEditing={startEditing}/>
            </Paper>
        </Container>
    )
}