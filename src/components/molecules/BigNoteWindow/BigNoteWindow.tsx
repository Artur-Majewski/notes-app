import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrencyNote, editNote } from '../../../Redux/actions/note';
import { RootState } from '../../../Redux/store';
import styles from './BigNoteWindow.module.scss';

export const EditNoteWindow = () => {
	const dispatch = useDispatch();
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
				<label htmlFor='category'>Category:</label>
				<select
					name='category'
					id='category'
					onChange={handleInputChange}
					value={formValues.category}
				>
					<option value='null'>Choose a category</option>
					<option value='work'>Work</option>
					<option value='home'>Home</option>
				</select>
				<label htmlFor='content'>Content:</label>
				<textarea
					name='content'
					id='content'
					cols={30}
					rows={10}
					value={formValues.content}
					onChange={handleInputChange}
				></textarea>
				<button onClick={handleSubmit}>Edit</button>
				<button onClick={() => dispatch(clearCurrencyNote())}>Close</button>
			</section>
		</>
	);
};
