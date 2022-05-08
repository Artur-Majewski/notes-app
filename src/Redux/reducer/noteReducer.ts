import { v4 as uuid } from "uuid";
import { noteTypes } from "../actionTypes/note";

interface NoteData {
	id: string;
	title: string;
	content: string;
	category: string;
	createAt: number;
}

type addNewNote = Omit<NoteData, 'id' | 'createAt'>

const loadData = localStorage.getItem('noteList2')

let initialState = {
  notes: Array<NoteData>()
}

if (loadData) {
  initialState.notes = JSON.parse(loadData)
} 

interface AddNote {
  type: noteTypes.ADD_NOTE,
  payload: addNewNote
}

interface RemoveNote {
  type: noteTypes.REMOVE_NOTE,
  payload: string
}

type Action = AddNote | RemoveNote;

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: Action) => {
  switch(action.type){
      case noteTypes.ADD_NOTE: {
        const newNote: NoteData = {
          id: uuid(),
          title: action.payload.title,
          category: action.payload.category,
          content: action.payload.content,
          createAt: new Date().getTime(),
        };
        return {
          ...state,
          notes: [...state.notes, newNote]
        }
      }
      case noteTypes.REMOVE_NOTE: {
        const otherNotes = [...state.notes].filter(note => note.id !== action.payload)
        localStorage.setItem('noteList2', JSON.stringify(otherNotes))
        return {
          ...state,
          notes: otherNotes
        }
      }
  }
  return state
}