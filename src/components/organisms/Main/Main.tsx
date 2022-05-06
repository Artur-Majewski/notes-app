import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { NotesList } from '../../molecules/NotesList/NotesList';
import styles from './Main.module.scss';
import { AddNoteBlock } from '../../molecules/AddNoteWindow/AddNoteWindow';
import { Search } from '../../molecules/Search/Search';

interface NoteData {
	id: string;
	title: string;
	content: string;
	category: string;
	createAt: number;
}

const loadData = () => {
	const sevedNotes = localStorage.getItem('noteList');
		if (sevedNotes) {
			return JSON.parse(sevedNotes)
		}
}

export const Main = () => {
	const [notes, setNotes] = useState<NoteData[]>(loadData());
	const [isAddNoteActiv, setIsAddNoteActiv] = useState(false);
	const [searchNote, setSearchNote] = useState('');

	useEffect( () => {
		localStorage.setItem('noteList', JSON.stringify(notes))
	}, [notes]) 

	const handleAddNoteToggle = () => setIsAddNoteActiv((prev) => !prev);

	const handleRemoveNote = (id?: string) => {
		const newNoteList = notes.filter((note) => note.id !== id);
		setNotes(newNoteList);
	};

	const handleAddNote = (title: string, category: string, content: string) => {
		const newNote: NoteData = {
			id: uuid(),
			title: title,
			category: category,
			content: content,
			createAt: new Date().getTime(),
		};
		setNotes([...notes, newNote]);
	};

	const handleFilterNote = (searchText: string) => {
		return notes.filter((note) => note.content.includes(searchText) || note.title.includes(searchText));
	};

	return (
		<main className={styles.wrapper}>
			<Search searchNote={setSearchNote} />
			<h2>Note List:</h2>
			{
				notes.length > 0 ? 
				<NotesList noteData={handleFilterNote(searchNote)} removeNote={handleRemoveNote} /> 
				: 
				<h3> You do not have any notes yet </ h3>
			}
			
			<button onClick={handleAddNoteToggle}>Add</button>
			{isAddNoteActiv ? (
				<AddNoteBlock
					handleAddNote={handleAddNote}
					handleAddNoteClose={handleAddNoteToggle}
				/>
			) : null}
		</main>
	);
};
