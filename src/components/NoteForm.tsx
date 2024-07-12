import {useState} from "react";
import {Box, Button, TextField} from "@mui/material";

interface NoteFormProps{
    addNote:(text:string)=>void
}

export const NoteForm=({addNote}:NoteFormProps)=>{
    const [text, setText]=useState('')

    const submitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        if (text.trim()){
            addNote(text);
            setText('')
        }
    }
    return(
        <Box component='form' onSubmit={submitHandler} sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px'}}>
            <TextField label='New Note' value={text} onChange={(event)=>setText(event.target.value)} variant='outlined' fullWidth/>
            <Button type='submit' variant='contained' color='primary'>
                Add Note
            </Button>
        </Box>
    )
}