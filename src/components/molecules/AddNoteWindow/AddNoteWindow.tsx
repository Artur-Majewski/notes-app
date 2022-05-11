import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../../../Redux/actions/note';
import { RootState } from '../../../Redux/store';
import { FormButton } from '../../atoms/FormButton/FormButton';
import { Input } from '../../atoms/Input/Input';
import { Select } from '../../atoms/Select/Select';
import { Textarea } from '../../atoms/Textarea/Textarea';
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

	const handleInputChange = ( event: ChangeEvent<	HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement > 
    ) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = () => {
		console.log('wysyła')
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
				<Input name='title' type='text' value={formValues.title} handlerFunction={handleInputChange}/> 
				<Select name='category' value={formValues.category} options={categories} handlerFuntion={handleInputChange} isLabel/>
				<Textarea name='content' value={formValues.content} handlerFunction={handleInputChange}/>
				<FormButton name='Add' functionality={handleSubmit}/>
				<WindowExitButton funcionality={handleAddNoteClose}></WindowExitButton>
				
			</section>
		</>
	);
};