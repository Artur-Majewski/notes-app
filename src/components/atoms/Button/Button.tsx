import styles from './Button.module.scss'

interface Props {
  id?: string;
  name: string;
  funcionality: (arg?: any) => void
}

export const Button = ({id, name, funcionality}: Props) => {
  
  return (
    <button  onClick={funcionality} 
      className={styles.btn}>
        {name === 'E' ? <i className="fa-solid fa-pencil"></i> : null}
      {name} 
    </button>
  )
}