import {Note} from "./types";
import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";

interface EditeNoteFormProps{
    note:Note;
    editNote:(id:number, newText:string)=>void
}

export const EditeNoteForm=({note, editNote}:EditeNoteFormProps)=>{
    const [text, setText] = useState(note.text)

    const submitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        if (text.trim()){
            editNote(note.id, text)
        }
    }
    return(
        <Box component='form' onSubmit={submitHandler} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            <TextField label='Edit Note' value={text} onChange={(event)=>setText(event.target.value)} variant='outlined' fullWidth/>
            <Button type='submit' variant='contained' color='primary'>
                Save Note
            </Button>

        </Box>
    )
}