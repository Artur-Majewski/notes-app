import { useDispatch } from 'react-redux';
import { removeCategory } from '../../../Redux/actions/categorie';
import styles from './RemoveCategoryButton.module.scss';

interface Props {
	id: string;
	name: string;
	categoryColor: string;
}

export const RemoveCategoryButton = ({ id, name, categoryColor }: Props) => {
	const dispatch = useDispatch();
	const handelRemoveCategory = (name: string) => dispatch(removeCategory(name));

	return (
		<div className={styles.btnWrapper}>
			<button
				key={id}
				style={{color: categoryColor}}
				className={styles.btn}
				onClick={() => handelRemoveCategory(id)}
			>
				<i className="fa-solid fa-circle-minus"></i>
			</button>
			<p className={styles.categoryName}>{name}</p>
		</div>
	);
};
