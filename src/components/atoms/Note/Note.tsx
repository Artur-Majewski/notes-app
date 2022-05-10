import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
	currentNote,
	noteToPreview,
	removeNote,
} from '../../../Redux/actions/note';
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
	const handlerPreviewNote = () => dispatch(noteToPreview(id));

	return (
		<article className={styles.wrapper}>
			<div className={styles.note}>
				<div className={styles.titleBlock}>
					<h3 className={styles.title}>{title}</h3>
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
				<p className={styles.content}>
					{}
					{content}
				</p>
			</div>
			<small className={styles.date}>
				Create at: {new Date(createAt).toLocaleDateString()}
			</small>
		</article>
	);
};
