import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import { RemoveCategoryButton } from '../../atoms/RemoveCategoryButton/RemoveCategoryButton';
import styles from './CategoriesList.module.scss';

export const CategoriesList = () => {
	const { categories } = useSelector((state: RootState) => state.categories);
	
	return (
		<>
			<h3>Select a category to delete:</h3>
			<div className={styles.wrapper}>
				<div className={styles.removeBlockWrapper}>
					{categories.sort((a, b) => a.name.length - b.name.length).map(({id, name, color}) => (
						<RemoveCategoryButton key={id} id={id} name={name} categoryColor={color} />
					))}
				</div>
			</div>
		</>
	);
};
