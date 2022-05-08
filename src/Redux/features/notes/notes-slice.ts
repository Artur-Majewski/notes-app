import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { noteData } from '../../../data/data';

interface NoteData {
	id: string;
	title: string;
	content: string;
	category: string;
	createAt: number;
}

type addNewNote = Omit<NoteData, 'id' | 'createAt'>

let initialNoteState = {
  notes: Array<NoteData>()
}

const loadedData = localStorage.getItem('noteList2')

if (loadedData) {
	initialNoteState.notes = JSON.parse(loadedData)
}

interface AddNote {
	payload: addNewNote;
}

export const notesSlice = createSlice({
	name: 'notes',
	initialState: initialNoteState,
	reducers: {
		addNote: (state, action: AddNote) => {
			const newNote: NoteData = {
				id: uuid(),
				title: action.payload.title,
				category: action.payload.category,
				content: action.payload.content,
				createAt: new Date().getTime(),
			};
			state.notes.push(newNote);
      localStorage.setItem('noteList2', JSON.stringify(state.notes))
		},
	},
});

export const { addNote } = notesSlice.actions;
