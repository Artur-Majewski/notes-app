import styles from './CardTitle.module.scss'

interface Props {
  title: string;
}

export const CardTitle = ({title}:Props) => (
  <h3 className={styles.title}>{title}</h3>
)