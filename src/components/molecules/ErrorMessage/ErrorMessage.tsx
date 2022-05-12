import { useSelector } from 'react-redux';
import { RootState } from '../../../Redux/store';
import styles from './ErrorMessage.module.scss';

export const ErrorMessage = () => {
	const { message } = useSelector((state: RootState) => state.error);

	return (
		<div className={styles.blockBackground}>
			<div className={styles.wrapper}>
				<h3 className={styles.title}>Oops</h3>
				<p className={styles.message}>
					{message}
				</p>
			</div>
		</div>
	);
};
