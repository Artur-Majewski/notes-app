import { noteTypes } from "../actionTypes/note";

interface NoteData {
	id: string;
	title: string;
	content: string;
	category: string;
	createAt: number;
}

type addNewNote = Omit<NoteData, 'id' | 'createAt'>

export const  addNote = (noteData: addNewNote) => ({
  type: noteTypes.ADD_NOTE,
  payload: noteData
})

export const  removeNote = (id: string) => ({
  type: noteTypes.REMOVE_NOTE,
  payload: id
})