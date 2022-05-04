import { NotesList } from "../../molecules/NotesList/NotesList";
import styles from './Main.module.scss'

export const Main = () => {
	return (
		<main className={styles.wrapper}>
			<h2>Note List:</h2>
      <NotesList />
		</main>
	);
};
