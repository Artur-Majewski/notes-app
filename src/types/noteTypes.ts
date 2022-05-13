export interface NoteData {
  id: string;
	title: string;
	content: string;
	category: string;
	createAt: number;
	lastEdition: number; 
}

export type addNewNote = Omit<NoteData, 'id' | 'createAt' | 'lastEdition'>
export type editNoteType = Omit<NoteData, 'lastEdition'>

export interface CategorieData {
  id: string;
  name: string;
	color: string;
}

export type addNewCategory = Omit<CategorieData, 'id'>