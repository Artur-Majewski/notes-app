import { addNewNote, editNoteType } from '../../types/noteTypes';
import { noteTypes } from '../actionTypes/note';

export const addNote = (noteData: addNewNote) => ({
	type: noteTypes.ADD_NOTE,
	payload: noteData,
});

export const removeNote = (id: string) => ({
	type: noteTypes.REMOVE_NOTE,
	payload: id,
});

export const editNote = (newNoteData: editNoteType) => ({
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

export const noteToPreview = (id: string) => ({
	type: noteTypes.NOTE_TO_PREVIEW,
	payload: id,
});

export const clearNoteToPreview = () => ({
	type: noteTypes.CLEAR_NOTE_TO_PREVIEW,
});
