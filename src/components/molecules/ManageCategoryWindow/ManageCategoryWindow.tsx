import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, removeCategory } from '../../../Redux/actions/categorie';
import { RootState } from '../../../Redux/store';
import { CategoriesToRemoved } from '../CategoriesToRemoved/CategoriesToRemoved';
import styles from './ManageCategoryWindow.module.scss';

interface Props {
	handleWindowClose: () => void;
}

export const ManageCategoryWindow = ({ handleWindowClose }: Props) => {
	const dispatch = useDispatch();
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = () => {
		const value = inputRef.current?.value;
		if (value) dispatch(addCategory(value));
		handleWindowClose();
	};

	return (
		<>
			<div className={styles.blockBackground} onClick={handleWindowClose}></div>
			<section className={styles.AddCategoryWrapper}>
				<label htmlFor='category'>New Category name:</label>
				<input type='text' name='category' id='category' ref={inputRef} />
				<button onClick={handleSubmit}>Add new category</button>
				<CategoriesToRemoved />
				<button onClick={handleWindowClose}>Close</button>
			</section>
		</>
	);
};
