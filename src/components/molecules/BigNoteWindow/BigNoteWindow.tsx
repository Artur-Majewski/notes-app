import { useDispatch, useSelector } from 'react-redux';
import { clearNoteToPreview } from '../../../Redux/actions/note';
import { RootState } from '../../../Redux/store';
import styles from './BigNoteWindow.module.scss';

export const BigNoteWindow = () => {
	const dispatch = useDispatch();
	const { notes, noteToPreview } = useSelector(
		(store: RootState) => store.notes
	);
	const selectedNote = notes.filter((note) => note.id === noteToPreview);

	return (
		<>
			<div
				className={styles.blockBackground}
				onClick={() => dispatch(clearNoteToPreview())}
			></div>
			<section className={styles.addNoteWrapper}>
				<h4 className={styles.title}>{selectedNote[0].title}</h4>
				<small className={styles.category}>({selectedNote[0].category})</small>
				<small className={styles.date}>{new Date(selectedNote[0].createAt).toLocaleDateString()}</small>
				<p className={styles.content}>{selectedNote[0].content}</p>
			<button className={styles.btnExit} onClick={() => dispatch(clearNoteToPreview())}><i className='fa-solid fa-xmark'></i></button>
			</section>
		</>
	);
};
