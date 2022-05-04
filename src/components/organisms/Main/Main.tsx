import { useState } from "react";
import { NotesList } from "../../molecules/NotesList/NotesList";
import styles from './Main.module.scss'
import { noteData } from "../../../data/data";


export const Main = () => {
	const [notes , setNotes] = useState(noteData)

	const handleRemoveNote = (id?: string) => {
		const newNoteList = notes.filter(note => note.id !== id)
		setNotes(newNoteList)
	}

	return (
		<main className={styles.wrapper}>
			<h2>Note List:</h2>
      <NotesList noteData={notes} removeNote={handleRemoveNote}/>
		</main>
	);
};
