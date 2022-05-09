import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../../Redux/actions/note';
import styles from './AddNoteWindow.module.scss';

interface Props {
	handleAddNoteClose: () => void;
}

export const AddNoteWindow = ({ handleAddNoteClose }: Props) => {
	const dispatch = useDispatch();
	const [formValues, setFormValues] = useState({
		title: '',
		category: '',
		content: '',
	});

	const handleInputChange = (
		event: ChangeEvent<	HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement > 
    ) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = () => {
		dispatch(
			addNote({
				title: formValues.title,
				category: formValues.category,
				content: formValues.content,
			})
		);
		handleAddNoteClose();
	};

	return (
		<>
			<div
				className={styles.blockBackground}
				onClick={handleAddNoteClose}
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
				<button onClick={handleSubmit}>Add</button>
				<button onClick={handleAddNoteClose}>Close</button>
			</section>
		</>
	);
};
