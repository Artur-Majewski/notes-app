import styles from './BackgroundBlock.module.scss';

interface Props {
	functionality: () => void;
}

export const BackgroundBlock = ({ functionality }: Props) => {
	return (
		<div className={styles.blockBackground} onClick={functionality}></div>
	);
};
