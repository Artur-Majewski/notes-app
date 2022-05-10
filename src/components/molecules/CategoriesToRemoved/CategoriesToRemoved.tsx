import { useDispatch, useSelector } from 'react-redux';
import { removeCategory } from '../../../Redux/actions/categorie';
import { RootState } from '../../../Redux/store';
import styles from './CategoriesToRemoved.module.scss'

export const CategoriesToRemoved = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: RootState) => state.categories);
	const handelRemoveCategory = (name: string) => dispatch(removeCategory(name));

	return (
		<div>
			Select a category to delete:
			<div className={styles.removeBlockWrapper}>
				{categories.map((category) => (
					<button key={category.id}
						className={styles.btn}
						onClick={() => handelRemoveCategory(category.id)}
					>
						{category.name}
					</button>
				))}
			</div>
		</div>
	);
};