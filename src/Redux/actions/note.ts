import { addNewNote, NoteData } from '../../types/noteTypes';
import { noteTypes } from '../actionTypes/note';

export const addNote = (noteData: addNewNote) => ({
	type: noteTypes.ADD_NOTE,
	payload: noteData,
});

export const removeNote = (id: string) => ({
	type: noteTypes.REMOVE_NOTE,
	payload: id,
});

export const editNote = (newNoteData: NoteData) => ({
	type: noteTypes.EDIT_NOTE,
	payload: newNoteData,
});

export const currentNote = (id: string) => ({
	type: noteTypes.CURRENT_NOTE,
	payload: id,
});

export const clearCurrencyNote = () => ({
	type: noteTypes.CLEAR_CURRENT_NOTE,
});
