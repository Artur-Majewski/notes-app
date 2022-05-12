import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeError, sendErrorMessage } from '../../../Redux/actions/error';
import { addNote } from '../../../Redux/actions/note';
import { RootState } from '../../../Redux/store';
import { CardTitle } from '../../atoms/CardTitle/CardTitle';
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
		if (!formValues.title) {
			dispatch(activeError(true))
			dispatch(sendErrorMessage('The title of the note has not been completed. Please complete these fields. '))
			return
		}
		if (!formValues.content) {
			dispatch(activeError(true))
			dispatch(sendErrorMessage('The content of the note has not been completed. Please complete these fields. '))
			return
		}

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
				<CardTitle title='Add new note'/>
				<Input name='title' type='text' value={formValues.title} handlerFunction={handleInputChange}/> 
				<Select name='category' value={formValues.category} options={categories} handlerFuntion={handleInputChange} isLabel/>
				<Textarea name='content' value={formValues.content} handlerFunction={handleInputChange}/>
				<FormButton name='Add' functionality={handleSubmit}/>
				<WindowExitButton funcionality={handleAddNoteClose}></WindowExitButton>
			</section>
		</>
	);
};