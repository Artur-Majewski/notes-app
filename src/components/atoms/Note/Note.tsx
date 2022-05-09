import { useDispatch } from 'react-redux';
import { currentNote, removeNote } from '../../../Redux/actions/note';
import { Button } from '../Button/Button';
import styles from './Note.module.scss';

interface Props {
	id: string;
	title: string;
	content: string;
	createAt: number;
}

export const Note = ({ id, title, content, createAt }: Props) => {
	const dispatch = useDispatch();

	const handleRemoveNote = () => dispatch(removeNote(id));
	const handlerEditNote = () => dispatch(currentNote(id));

	return (
		<div className={styles.note}>
			<div className={styles.titleBlock}>
				<h3 className={styles.title}>{title}</h3>
				<div>
					<button onClick={handlerEditNote} className={styles.btn}><i className='fa-solid fa-pencil'></i></button>
					<button onClick={handleRemoveNote} className={styles.btn}><i className='fa-solid fa-xmark'></i></button>
				</div>
				<small className={styles.date}>
					{new Date(createAt).toLocaleDateString()}
				</small>
			</div>
			<p className={styles.content}>{content}</p>
		</div>
	);
};
