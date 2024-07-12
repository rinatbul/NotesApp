import {Note} from "./types";
import {IconButton, ListItem, ListItemText} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface NoteItemProps {
    key: number;
    note: Note;
    deleteNote: (id: number) => void
    startEditing: (note: Note) => void
}

export const NoteItem = ({key, note, deleteNote, startEditing}: NoteItemProps) => {
    return (
        <ListItem
            secondaryAction={
                <>
                    <IconButton edge='end' aria-label='edit' onClick={() => startEditing(note)}/>
                    <EditIcon/>
                    <IconButton/>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </>
            }
        >
            <ListItemText primary={note.text}/>
        </ListItem>
    )
}