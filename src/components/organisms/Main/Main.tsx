import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import { NotesList } from '../../molecules/NotesList/NotesList';
import { Search } from '../../molecules/Search/Search';
import { AddNoteWindow } from '../../molecules/AddNoteWindow/AddNoteWindow';
import { EditNoteWindow } from '../../molecules/EditNoteWindow/EditNoteWindow';

import styles from './Main.module.scss';

export const Main = () => {
	const { notes, currentNote } = useSelector((store: RootState) => store.notes);
	const [isAddNoteActiv, setIsAddNoteActiv] = useState(false);
	const [searchNote, setSearchNote] = useState('');

	const handleAddNoteToggle = () => setIsAddNoteActiv((prev) => !prev);

	const handleFilterNote = (searchText: string) => {
		searchText = searchText.toLowerCase();
		return notes
			.filter(
				(note) =>
					note.content.toLowerCase().includes(searchText) ||
					note.title.toLowerCase().includes(searchText)
			)
			.sort((a, b) => a.createAt - b.createAt);
	};

	return (
		<main className={styles.wrapper}>
			<Search searchNote={setSearchNote} />
			<h2>Note List:</h2>
			<div className={styles.mainInternalWrapper}>
				<div>
					{notes.length > 0 ? (
						<NotesList noteData={handleFilterNote(searchNote)} />
					) : (
						<h3> You do not have any notes yet </h3>
					)}
					<button onClick={handleAddNoteToggle}>Add</button>
				</div>
				<div>
					{isAddNoteActiv ? (
						<AddNoteWindow handleAddNoteClose={handleAddNoteToggle} />
					) : null}
					{currentNote.length > 0 ? <EditNoteWindow /> : null}
				</div>
			</div>
		</main>
	);
};
