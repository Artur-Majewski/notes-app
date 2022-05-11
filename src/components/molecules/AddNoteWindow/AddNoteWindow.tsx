import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../../../Redux/actions/note';
import { RootState } from '../../../Redux/store';
import { Select } from '../../atoms/Select/Select';
import { WindowExitButton } from '../../atoms/WindowExitButton/WindowExitButton';
import styles from './AddNoteWindow.module.scss';

interface Props {
	handleAddNoteClose: () => void;
}

export const AddNoteWindow = ({ handleAddNoteClose }: Props) => {
	const dispatch = useDispatch();
	const { categories } = useSelector((state: RootState) => state.categories)
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
				<Select name='category' value={formValues.category} options={categories} handlerFuntion={handleInputChange} isLabel/>

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
				<WindowExitButton funcionality={handleAddNoteClose}></WindowExitButton>
			</section>
		</>
	);
};
