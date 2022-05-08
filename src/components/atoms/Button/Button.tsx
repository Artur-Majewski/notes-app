import { useDispatch } from 'react-redux';
import { removeNote } from '../../../Redux/actions/note';
import styles from './Button.module.scss'

interface Props {
  id?: string;
  name: string;
  // functionality: (id?:string) => void; 
}

export const Button = ({id, name}: Props) => {
  const dispatch = useDispatch()

  const handleRemoveNote = () => {
    if (id) {
      dispatch(removeNote(id))
    }
  }
  
  return (
    <button onClick={handleRemoveNote} className={styles.btn}> {name} </button>
  )
}