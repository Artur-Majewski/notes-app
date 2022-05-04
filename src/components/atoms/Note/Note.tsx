import { Button } from '../Button/Button';
import styles from './Note.module.scss';

interface Props {
	title: string;
	content: string;
	createAt: number;
}

export const Note = ({title, content, createAt}: Props) => {
	return (
		<div className={styles.note}>
			<div className={styles.titleBlock}>
				<h3 className={styles.title}>{title}</h3>
				<Button name='X' functionality={() => {}} />
				<small className={styles.date}>{new Date(createAt).toLocaleDateString()}</small>
			</div>
			<p className={styles.content}>{content}</p>
			
		</div>
	);
};
