import { Note } from '../../atoms/Note/Note';
import { NoteData } from '../../../types/noteTypes';

import styles from './NotesList.module.scss';

interface Props {
	noteData: NoteData[];
}

export const NotesList = ({ noteData }: Props) => {

	return (
		<section className={styles.noteList}>
			{noteData.map(({ id, title, content, createAt }) => (
				<Note
					key={id}
          id={id}
					title={title}
					content={content}
					createAt={createAt}
				/>
			))}
		</section>
	);
};
