import { Button } from '../Button/Button';
import styles from './Note.module.scss';

export const Note = () => {
	return (
		<div className={styles.note}>
			<div className={styles.titleBlock}>
				<h3 className={styles.title}>Note Title</h3>
				<Button name='X' functionality={() => {}} />
			</div>
			<p className={styles.content}>Note Content</p>
		</div>
	);
};
