import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, removeCategory } from '../../../Redux/actions/categorie';
import { RootState } from '../../../Redux/store';
import { addNewCategory } from '../../../types/noteTypes';
import { CategoriesToRemoved } from '../CategoriesToRemoved/CategoriesToRemoved';
import styles from './ManageCategoryWindow.module.scss';

interface Props {
	handleWindowClose: () => void;
}

export const ManageCategoryWindow = ({ handleWindowClose }: Props) => {
	const dispatch = useDispatch();
	const inputNameRef = useRef<HTMLInputElement>(null);
	const inputColorRef = useRef<HTMLInputElement>(null);

	const handleSubmit = () => {
		const nameValue = inputNameRef.current?.value;
		const colorValue = inputColorRef.current?.value;
		
		if (nameValue && colorValue) {
			const newCategory: addNewCategory = {
				name: nameValue,
				color: colorValue,
			}
			dispatch(addCategory(newCategory));
			handleWindowClose();
		}
	};

	return (
		<>
			<div className={styles.blockBackground} onClick={handleWindowClose}></div>
			<section className={styles.AddCategoryWrapper}>
				<label htmlFor='name'>New Category name:</label>
				<input type='text' name='name' id='name' ref={inputNameRef} />
				<label htmlFor='color'>New Category color:</label>
				<input type='color' name='color' id='color' ref={inputColorRef}/>
				<button onClick={handleSubmit}>Add new category</button>
				<CategoriesToRemoved />
				<button onClick={handleWindowClose}>Close</button>
			</section>
		</>
	);
};
