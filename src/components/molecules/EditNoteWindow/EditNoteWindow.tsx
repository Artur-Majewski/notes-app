import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrencyNote, editNote } from '../../../Redux/actions/note';
import { RootState } from '../../../Redux/store';
import { Select } from '../../atoms/Select/Select';
import { WindowExitButton } from '../../atoms/WindowExitButton/WindowExitButton';
import styles from './EditNoteWindow.module.scss';

export const EditNoteWindow = () => {
	const dispatch = useDispatch();
	const { categories } = useSelector((state: RootState) => state.categories)
	const { notes, currentNote } = useSelector((store: RootState) => store.notes);
	const prevNote = notes.filter((note) => note.id === currentNote);
	const [formValues, setFormValues] = useState({
		title: prevNote[0].title,
		category: prevNote[0].category,
		content: prevNote[0].content,
	});

	const handleInputChange = ( event: ChangeEvent< HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement > ) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = () => {
		dispatch(
			editNote({
				id: prevNote[0].id,
				title: formValues.title,
				category: formValues.category,
				content: formValues.content,
				createAt: prevNote[0].createAt,
			})
		);
		dispatch(clearCurrencyNote());
	};

	return (
		<>
			<div
				className={styles.blockBackground}
				onClick={() => dispatch(clearCurrencyNote())}
			></div>
			<section className={styles.addNoteWrapper}>
				<label htmlFor='title'>Title:</label>
				<input
					type='text'
					name='title'
					id='title'
					value={formValues.title}
					onChange={handleInputChange}
				/>
				<Select name='category' value={formValues.category} options={categories} handlerFuntion={handleInputChange} isLabel/>
				
				<label htmlFor='content'>Content:</label>
				<textarea
					name='content'
					id='content'
					className={styles.content}
					cols={30}
					rows={10}
					value={formValues.content}
					onChange={handleInputChange}
				></textarea>
				<button onClick={handleSubmit}>Edit</button>
				<WindowExitButton funcionality={() => dispatch(clearCurrencyNote())}></WindowExitButton>
			</section>
		</>
	);
};
