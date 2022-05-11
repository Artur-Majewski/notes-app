import { ChangeEvent, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, removeCategory } from '../../../Redux/actions/categorie';
import { RootState } from '../../../Redux/store';
import { addNewCategory } from '../../../types/noteTypes';
import { FormButton } from '../../atoms/FormButton/FormButton';
import { Input } from '../../atoms/Input/Input';
import { WindowExitButton } from '../../atoms/WindowExitButton/WindowExitButton';
import { CategoriesToRemoved } from '../CategoriesToRemoved/CategoriesToRemoved';
import styles from './ManageCategoryWindow.module.scss';

interface Props {
	handleWindowClose: () => void;
}

export const ManageCategoryWindow = ({ handleWindowClose }: Props) => {
	const dispatch = useDispatch();
	const [formValues, setFormValues] = useState({
		name: '',
		color: '',
	});

	const handleInputChange = ( event: ChangeEvent<HTMLInputElement> 
    ) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = () => {
		console.log('wysyła')
		dispatch(
			addCategory({
				name: formValues.name,
				color: formValues.color,
			})
		);
		// handleWindowClose();
	};

	return (
		<>
			<div className={styles.blockBackground} onClick={handleWindowClose}></div>
			<section className={styles.AddCategoryWrapper}>
			<div className={styles.newCategoryWrapper}>
				<Input name='name' type='name' value={formValues.name} handlerFunction={handleInputChange}/> 
				<Input name='color' type='color' value={formValues.color} handlerFunction={handleInputChange}/> 
				<FormButton name='Add new category' functionality={handleSubmit}/>
			</div>
				<CategoriesToRemoved />
				<WindowExitButton funcionality={handleWindowClose}></WindowExitButton>
			</section>
		</>
	);
};
