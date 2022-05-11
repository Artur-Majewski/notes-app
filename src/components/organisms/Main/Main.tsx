import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import { NotesList } from '../../molecules/NotesList/NotesList';
import { Search } from '../../molecules/Search/Search';
import { AddNoteWindow } from '../../molecules/AddNoteWindow/AddNoteWindow';
import { EditNoteWindow } from '../../molecules/EditNoteWindow/EditNoteWindow';
import { Select } from '../../atoms/Select/Select';
import { ManageCategoryWindow } from '../../molecules/ManageCategoryWindow/ManageCategoryWindow';

import styles from './Main.module.scss';
import { BigNoteWindow } from '../../molecules/BigNoteWindow/BigNoteWindow';


export const Main = () => {
	const { notes, currentNote, noteToPreview } = useSelector((store: RootState) => store.notes);
	const { categories } = useSelector((state: RootState) => state.categories);
	const [isAddNoteActiv, setIsAddNoteActiv] = useState(false);
	const [searchNote, setSearchNote] = useState('');
	const [currentCategory, setCurrentCategory] = useState('');
	const [isAddCategoryActiv, setisAddCategoryActiv] = useState(false);

	const handleAddNoteToggle = () => setIsAddNoteActiv((prev) => !prev);
	const handleAddCategoryToggle = () => setisAddCategoryActiv((prev) => !prev);
	const handleCategoryCheck = (event: ChangeEvent<HTMLSelectElement>) =>
		setCurrentCategory(event.target.value);

	const handleFilterNote = (searchText: string) => {
		searchText = searchText.toLowerCase();
		return notes
			.filter(
				(note) =>
					(note.content.toLowerCase().includes(searchText) ||
						note.title.toLowerCase().includes(searchText)) &&
					note.category.includes(currentCategory)
			)
			.sort((a, b) => a.createAt - b.createAt);
	};

	return (
		<main className={styles.wrapper}>
			<Search searchNote={setSearchNote} />
			<div className={styles.navBtnWrapper}> 
				<button className={styles.navBtn} onClick={handleAddNoteToggle}>Add new note</button>
				<button className={styles.navBtn} onClick={handleAddCategoryToggle}> Add/Remove category</button>
			</div>
			<div className={styles.selectWrapper}>
			<Select
				isLabel
				name='Category filter'
				value={currentCategory}
				options={categories}
				handlerFuntion={handleCategoryCheck}
			/>
			</div>

			<div className={styles.mainInternalWrapper}>
				<div>
					{notes.length > 0 ? (
						<NotesList noteData={handleFilterNote(searchNote)} />
					) : (
						<h3> You don't have any notes yet </h3>
					)}
					
				</div>
				<div>
					{isAddNoteActiv ? (
						<AddNoteWindow handleAddNoteClose={handleAddNoteToggle} />
					) : null}
					{isAddCategoryActiv ? (
						<ManageCategoryWindow handleWindowClose={handleAddCategoryToggle} />
					) : null}
					{currentNote.length > 0 ? <EditNoteWindow /> : null}
					{noteToPreview.length > 0 ? <BigNoteWindow /> : null}
					
				</div>
			</div>
		</main>
	);
};
