import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrencyNote, editNote } from '../../../Redux/actions/note';
import { RootState } from '../../../Redux/store';
import { FormButton } from '../../atoms/FormButton/FormButton';
import { Input } from '../../atoms/Input/Input';
import { Select } from '../../atoms/Select/Select';
import { Textarea } from '../../atoms/Textarea/Textarea';
import { WindowExitButton } from '../../atoms/WindowExitButton/WindowExitButton';
import styles from './EditNoteWindow.module.scss';

export const EditNoteWindow = () => {
	const dispatch = useDispatch();
	const { categories } = useSelector((state: RootState) => state.categories);
	const { notes, currentNote } = useSelector((store: RootState) => store.notes);
	const prevNote = notes.filter((note) => note.id === currentNote);
	const [formValues, setFormValues] = useState({
		title: prevNote[0].title,
		category: prevNote[0].category,
		content: prevNote[0].content,
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
				<Input name='title' type='text' value={formValues.title} handlerFunction={handleInputChange}/>
				<Select name='category' value={formValues.category} options={categories} handlerFuntion={handleInputChange} isLabel/>
				<Textarea name='content' value={formValues.content} handlerFunction={handleInputChange}/>
				<FormButton name='Edit' functionality={handleSubmit}/>
				<WindowExitButton funcionality={() => dispatch(clearCurrencyNote())}></WindowExitButton>
			</section>
		</>
	);
};