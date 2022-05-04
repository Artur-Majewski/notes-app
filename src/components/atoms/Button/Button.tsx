import styles from './Button.module.scss'

interface Props {
  name: string;
  functionality: () => void; 
}

export const Button = ({name, functionality}: Props) => {
  return (
    <button onClick={functionality} className={styles.btn}> {name} </button>
  )
}