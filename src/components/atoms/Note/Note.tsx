import { useDispatch, useSelector } from 'react-redux';
import { currentNote, noteToPreview, removeNote } from '../../../Redux/actions/note';
import { RootState } from '../../../Redux/store';
import styles from './Note.module.scss';

interface Props {
	id: string;
	title: string;
	category: string
	content: string;
	createAt: number;
}

export const Note = ({ id, title, content, category,  createAt }: Props) => {
	const dispatch = useDispatch();
	const { categories } = useSelector((state: RootState) => state.categories)
	const handleRemoveNote = () => dispatch(removeNote(id));
	const handlerEditNote = () => dispatch(currentNote(id));
	const handlerPreviewNote = () => dispatch(noteToPreview(id));

	const categoryColor = categories.filter(categoryItem => categoryItem.name === category)
	const color = categoryColor.length ? categoryColor[0].color : '#333333'


	return (
		<article className={styles.wrapper}>
			<div className={styles.note} style={{ background: color}}>
				<div className={styles.titleBlock}>
					<h2 className={styles.title}>{title}</h2>
					<div className={styles.buttonWrapper}>
						<button onClick={handlerPreviewNote} className={styles.btn}>
							<i className='fa-solid fa-up-right-and-down-left-from-center'></i>
						</button>
						<button onClick={handlerEditNote} className={styles.btn}>
							<i className='fa-solid fa-pencil'></i>
						</button>
						<button onClick={handleRemoveNote} className={styles.btn}>
							<i className='fa-solid fa-xmark'></i>
						</button>
					</div>
				</div>
				<p className={styles.content}>{content}</p>
			</div>
			<small className={styles.date} style={{ background: color }}>
				<div className={styles.dateOverlay}>
					Create at: {new Date(createAt).toLocaleDateString()}
				</div>
			</small>
		</article>
	);
};
