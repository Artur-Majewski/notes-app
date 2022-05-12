import { useDispatch, useSelector } from 'react-redux';
import { clearNoteToPreview } from '../../../Redux/actions/note';
import { RootState } from '../../../Redux/store';
import { BackgroundBlock } from '../../atoms/BackgroundBlock/BackgroundBlock';
import { WindowExitButton } from '../../atoms/WindowExitButton/WindowExitButton';
import styles from './PreviewNoteWindow.module.scss';

export const PreviewNoteWindow = () => {
	const dispatch = useDispatch();
	const { notes, noteToPreview } = useSelector(
		(store: RootState) => store.notes
	);
	const selectedNote = notes.filter((note) => note.id === noteToPreview);

	return (
		<>
			<BackgroundBlock functionality={() => dispatch(clearNoteToPreview())} />
			<article className={styles.addNoteWrapper}>
				<div className={styles.header}>
					<h4 className={styles.title}>{selectedNote[0].title}</h4>
					<small className={styles.category}>({selectedNote[0].category})</small>
					<small className={styles.date}>{new Date(selectedNote[0].createAt).toLocaleDateString()}</small>
				</div>
				<p className={styles.content}>{selectedNote[0].content}</p>
			<WindowExitButton funcionality={() => dispatch(clearNoteToPreview())}></WindowExitButton>
			</article>
		</>
	);
};
