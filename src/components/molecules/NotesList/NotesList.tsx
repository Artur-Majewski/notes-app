import { Note } from '../../atoms/Note/Note';
import styles from './NotesList.module.scss';

interface NoteData {
  id: string;
	title: string;
	content: string;
	category: string;
	createAt: number;
}

interface Props {
	noteData: NoteData[];
  removeNote: (id?:string) => void;
}

export const NotesList = ({ noteData, removeNote }: Props) => {
	return (
		<section className={styles.noteList}>
			{noteData.map(({ id, title, content, createAt }) => (
				<Note
					key={id}
          id={id}
					title={title}
					content={content}
					createAt={createAt}
          removeNote={removeNote}
				/>
			))}
		</section>
	);
};
