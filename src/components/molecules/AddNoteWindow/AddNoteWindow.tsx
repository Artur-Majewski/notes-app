import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../../Redux/actions/note";
import styles from './AddNoteWindow.module.scss'

interface Props {
// handleAddNote: (title: string, category: string, content: string) => void;
handleAddNoteClose: () => void;
}

export const AddNoteWindow = ({ handleAddNoteClose}: Props) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.currentTarget.value)
  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => setCategory(event.currentTarget.value)
  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => setContent(event.currentTarget.value)
  const handleSubmit = () => {
    dispatch(addNote({title, category, content}))
    handleAddNoteClose();
  }


	return (
    <>
    <div className={styles.blockBackground} onClick={handleAddNoteClose}></div>
      <section className={styles.addNoteWrapper}>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value={title} onChange={handleTitleChange}/>
        <label htmlFor="category">Category:</label>
        <select name="category" id="category" onChange={handleCategoryChange}>
          <option value="null" >Choose a category</option>
          <option value="work" >Work</option>
          <option value="home">Home</option>
        </select>
        <label htmlFor="content">Content:</label>
        <textarea name="content" id="content" cols={30} rows={10} value={content} onChange={handleContentChange}></textarea>
        <button onClick={handleSubmit}>Add</button>
        <button onClick={handleAddNoteClose}>Close</button>
      </section>
    </>
	)
}