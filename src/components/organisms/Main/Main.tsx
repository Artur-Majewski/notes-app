import { useState } from "react";
import {v4 as uuid} from 'uuid'
import { NotesList } from "../../molecules/NotesList/NotesList";
import styles from './Main.module.scss'
import { noteData } from "../../../data/data";
import { AddNoteBlock } from "../../molecules/AddNoteWindow/AddNoteWindow";

interface NoteData {
  id: string;
	title: string;
	content: string;
	category: string;
	createAt: number;
}

export const Main = () => {
	const [notes , setNotes] = useState(noteData);
	const [isAddNoteActiv, setIsAddNoteActiv] = useState(false);

	const handleAddNoteToggle = () => setIsAddNoteActiv( prev => !prev)

	const handleRemoveNote = (id?: string) => {
		const newNoteList = notes.filter(note => note.id !== id)
		setNotes(newNoteList)
	}
	
	const handleAddNote = (title: string, category: string, content: string) => {
		const newNote: NoteData = {
			id: uuid(),
			title: title,
			category: category,
			content: content,
			createAt: new Date().getTime()
		}
		setNotes([...notes, newNote])
	}

	return (
		<main className={styles.wrapper}>
			<h2>Note List:</h2>
      <NotesList noteData={notes} removeNote={handleRemoveNote}/>
			<button onClick={handleAddNoteToggle}>Add</button>
			{isAddNoteActiv ? <AddNoteBlock handleAddNote={handleAddNote} handleAddNoteClose={handleAddNoteToggle}/> : null}
		</main>
	);
};
