import { Note } from "../../atoms/Note/Note";
import styles from './NotesList.module.scss'

export const NotesList = () => {
  return (
    <section className={styles.noteList} >
          <Note />
    </section>
  );
}