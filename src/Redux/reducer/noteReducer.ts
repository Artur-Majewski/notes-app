import { v4 as uuid } from 'uuid';
import { addNewNote, NoteData } from '../../types/noteTypes';
import { noteTypes } from '../actionTypes/note';

const loadData = localStorage.getItem('noteList');

let initialState = {
	notes: Array<NoteData>(),
	currentNote: '',
	noteToPreview: '',
};

if (loadData) {
	initialState.notes = JSON.parse(loadData);
}

interface AddNote {
	type: noteTypes.ADD_NOTE;
	payload: addNewNote;
}

interface RemoveNote {
	type: noteTypes.REMOVE_NOTE;
	payload: string;
}

interface EditNote {
	type: noteTypes.EDIT_NOTE;
	payload: NoteData;
}
interface CurrentNote {
	type: noteTypes.CURRENT_NOTE;
	payload: string;
}

interface ClearCurrencyNote {
	type: noteTypes.CLEAR_CURRENT_NOTE;
}

interface NoteToPreview {
	type: noteTypes.NOTE_TO_PREVIEW;
	payload: string;
}

interface ClearNoteToPreview {
	type: noteTypes.CLEAR_NOTE_TO_PREVIEW;
}

type Action = AddNote | RemoveNote | EditNote | CurrentNote | ClearCurrencyNote | NoteToPreview | ClearNoteToPreview;

export const saveToLS = (keyValue: string, contentValue: NoteData[]) =>
	localStorage.setItem(keyValue, JSON.stringify(contentValue));

export const noteReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case noteTypes.ADD_NOTE: {
			const newNote: NoteData = {
				id: uuid(),
				title: action.payload.title,
				category: action.payload.category,
				content: action.payload.content,
				createAt: new Date().getTime(),
				lastEdition: 0,
			};
			const newNoteList = [...state.notes, newNote];
			saveToLS('noteList', newNoteList);
			return {
				...state,
				notes: newNoteList,
			};
		}

		case noteTypes.REMOVE_NOTE: {
			const otherNotes = [...state.notes].filter(
				(note) => note.id !== action.payload
			);
			saveToLS('noteList', otherNotes);
			return {
				...state,
				notes: otherNotes,
			};
		}

		case noteTypes.EDIT_NOTE: {
			const otherNotes = [...state.notes].filter(
				(note) => note.id !== action.payload.id
			);
			const modifiedNote: NoteData = {
				id: action.payload.id,
				title: action.payload.title,
				category: action.payload.category,
				content: action.payload.content,
				createAt: action.payload.createAt,
				lastEdition: new Date().getTime(),
			};
			otherNotes.push(modifiedNote);
			saveToLS('noteList', otherNotes);
			return {
				...state,
				notes: otherNotes,
			};
		}
		case noteTypes.CURRENT_NOTE: {
			return {
				...state,
				currentNote: action.payload,
			};
		}
		case noteTypes.CLEAR_CURRENT_NOTE: {
			return {
				...state,
				currentNote: '',
			};
		}
		case noteTypes.NOTE_TO_PREVIEW: {
			return {
				...state,
				noteToPreview: action.payload,
			};
		}
		case noteTypes.CLEAR_NOTE_TO_PREVIEW: {
			return {
				...state,
				noteToPreview: '',
			};
		}
	}
	return state;
};
