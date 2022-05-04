import styles from './Button.module.scss'

interface Props {
  id?: string;
  name: string;
  functionality: (id?:string) => void; 
}

export const Button = ({id, name, functionality}: Props) => {
  return (
    <button onClick={() => functionality(id)} className={styles.btn}> {name} </button>
  )
}