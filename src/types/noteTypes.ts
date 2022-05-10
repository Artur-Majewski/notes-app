export interface NoteData {
  id: string;
	title: string;
	content: string;
	category: string;
	createAt: number;
}

export type addNewNote = Omit<NoteData, 'id' | 'createAt'>

export interface CategorieData {
  id: string;
  name: string;
}