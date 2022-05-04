import { Note } from "../../atoms/Note/Note";
import styles from './NotesList.module.scss';

import { noteData } from "../../../data/data";


export const NotesList = () => {
  return (
    <section className={styles.noteList} >
      {noteData.map(({title, content, createAt}) => <Note key={createAt} title={title} content={content} createAt={createAt}/>)}
          
    </section>
  );
}