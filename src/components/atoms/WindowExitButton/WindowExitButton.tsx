import styles from './WindowExitButton.module.scss';

interface Props {
	funcionality: (arg?: any) => void;
}

export const WindowExitButton = ({funcionality }: Props) => {
	return (
		<button onClick={funcionality} className={styles.btn}>
			<i className='fa-solid fa-xmark'></i>
		</button>
	);
};
